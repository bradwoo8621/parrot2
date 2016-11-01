import {Envs} from '../envs'
import {Model} from './model'

class ValidationMessages {
	constructor() {
		this.messages = {};
		this.install({
			'required': '%1 is required.',
			'minlen': 'Length of %1 should be at least %2 character(s).',
			'min': 'Value of %1 should be at least %2.',
			'minsize': 'There are at least %2 item(s) for %1.',
			'maxlen': 'Length of %1 should be at most %2 character(s).',
			'max': 'Value of %1 should be at most %2.',
			'maxsize': 'There are at most %2 item(s) for %1.',
			'before': '%1 should be before %2.',
			'after': '%1 should be after %2'
		});
	}
	install(options) {
		let locale = this.parseLocale(options.locale, 'en');
		let msgsOfLocale = this.messages[locale];
		if (msgsOfLocale == null) {
			msgsOfLocale = {};
			this.messages[locale] = msgsOfLocale;
		}
		Object.keys(options).filter((key) => {
			return key !== 'locale';
		}).forEach((ruleName) => {
			let oldMsg = msgsOfLocale[ruleName];
			msgsOfLocale[ruleName] = options[ruleName];
			if (oldMsg) {
				console.info(`Message "${oldMsg}" of rule "${ruleName}" is replaced by ${options[ruleName]} on locale "${locale}".`);
			}
		});
	}
	get(ruleName, locale) {
		locale = this.parseLocale(locale, this.getLocale());
		let msgsOfLocale = this.messages[locale];
		let message = null;
		if (msgsOfLocale) {
			message = msgsOfLocale[ruleName];
		}
		if (message) {
			return message;
		} else {
			let parentLocale = this.parentOfLocale(locale);
			if (parentLocale === locale) {
				throw `Message of "${ruleName}" not found in locale "${locale}" and its parents.`;
			} else {
				return this.get(ruleName, parentLocale);
			}
		}
	}
	parseLocale(locale, defaultLocale) {
		return locale ? locale.replace('-', '_').toLowerCase() : defaultLocale;
	}
	parentOfLocale(locale) {
		let segments = locale.split('_');
		if (segments.length === 1) {
			return 'en';
		} else {
			segments.splice(segments.length - 1, 1);
			return segments.join('_');
		}
	}
	getLocale() {
		if (this.locale) {
		} else if (typeof navigator === 'undefined') {
			this.locale = 'en';
		} else {
			this.locale = navigator.language || navigator.userLanguage;
		}
		return this.locale;
	}
	setLocale(locale) {
		if (locale) {
			this.locale = this.parseLocale(locale);
		} else {
			this.locale = 'en';
		}
	}
	convert(ruleName, param, label) {
		let message = this.get(ruleName);
		if (label) {
			message = message.replace('%1', label);
		}
		if (param) {
			message = message.replace('%2', param);
		}
		return message;
	}
}
let messages = new ValidationMessages();

const isEmpty = function(value) {
	return value == null || (value + '').length === 0;
}
const GlobalValidationRules = {
	required(model, value, params, label) {
		return isEmpty(value) ? messages.convert('required', params, label) : true;
	},
	minlen(model, value, params, label) {
		return isEmpty(value) ? true : (((value + '').length < params) ? messages.convert('minlen', params, label) : true);
	},
	maxlen(model, value, params, label) {
		return isEmpty(value) ? true : (((value + '').length > params) ? messages.convert('maxlen', params, label) : true);
	},
	min(model, value, params, label) {
		return isEmpty(value) ? true : ((value * 1 < params) ? messages.convert('min', params, label) : true);
	},
	max(model, value, params, label) {
		return isEmpty(value) ? true : ((value * 1 > params) ? messages.convert('max', params, label) : true);
	},
	minsize(model, value, params, label) {
		return (value == null || value.length === 0) ? true : ((value.length < params) ? messages.convert('minsize', params, label) : true);
	},
	maxsize(model, value, params, label) {
		return (value == null || value.length === 0) ? true : ((value.length > params) ? messages.convert('maxsize', params, label) : true);
	},
	before(model, value, params, label) {
		if (isEmpty(value)) {
			return true;
		}
		return (value > params) ? messages.convert('before', params, label) : true;
	},
	after(model, value, params, label) {
		if (isEmpty(value)) {
			return true;
		}
		return (value < params) ? messages.convert('after', params, label) : true;
	},
	child(model, value, params, label, ruleRepository) {
		if (value == null || value.length == 0) {
			return true;
		}
		let itemValidator = new Validator(params, null, ruleRepository);
		let results = value.map((item) => {
			let itemModel = new Model(item, true);
			let result = itemValidator.validate(itemModel);
			return {
				item: item,
				result: result
			};
		}).filter((itemResult) => {
			return Object.keys(itemResult.result).length > 0;
		});
		return results.length === 0 ? true : results;
	}
};
class Validator {
	static ALL = '--all'
	static LEVEL_ERROR = 1
	static LEVEL_WARN = 2
	static LEVEL_INFO = 3
	constructor(rules, perspective, ruleRepo) {
		if (perspective) {
			this.rules = rules ? {} : this.rules;
		} else {
			this.rules = {};
			this.rules[`${Validator.ALL}`] = rules;
		}
		// remove null properties
		Object.keys(this.rules).forEach((key) => {
			if (this.rules[key] === null) {
				delete this.rules[key];
			}
		});

		this.ruleRepo = ruleRepo;
	}
	validate(model, property, perspective) {
		let rules = this.getRules(perspective);
		if (property) {
			let propertyRule = {};
			if (rules[property] != null) {
				propertyRule[property] = rules[property];
			}
			rules = propertyRule;
		}
		return Object.keys(rules).map((propertyName) => {
			let value = model.get(propertyName);
			let rulesOnProperty = rules[propertyName];
			let label = rulesOnProperty.label;
			// result is an array
			let resultsOnProperty = Object.keys(rulesOnProperty).filter((ruleName) => {
				return ruleName !== 'label';
			}).map((ruleName) => {
				let params = rulesOnProperty[ruleName];
				let rule = this.unwrapRuleParams(ruleName, params);
				return {
					rule: ruleName,
					message: rule.checker.call(this, model, value, rule.params, label, this.ruleRepo),
					level: rule.level
				};
			}).filter((ruleResult) => {
				// filter the passed rule results
				return ruleResult.message != null && ruleResult.message !== true;
			});
			return {
				name: propertyName,
				result: resultsOnProperty
			};
		}).filter((propResult) => {
			// filter which has no failed result
			return propResult.result.length != 0;
		}).reduce((prev, next) => {
			prev[next.name] = next.result;
			return prev;
		}, {});
	}
	unwrapRuleParams(name, params) {
		let type = typeof params;
		if (type === 'function') {
			return {
				checker: params,
				level: params.level ? params.level : Validator.LEVEL_ERROR,
				params: params.params ? params.params : null
			};
		} else if (type === 'object') {
			return {
				checker: this.findRuleFromRepo(name),
				level: params.level ? params.level : Validator.LEVEL_ERROR,
				params: params.params ? params.params : params
			};
		} else {
			return {
				checker: this.findRuleFromRepo(name),
				level: Validator.LEVEL_ERROR,
				params: params
			};
		}
	}
	getRules(perspective) {
		if (perspective) {
			let ruleSet = this.rules[perspective];
			return ruleSet == null ? {} : ruleSet;
		} else {
			let ruleSet = Object.keys(this.rules).map((key) => {
				return this.rules[key];
			});
			if (ruleSet.length === 0) {
				return {};
			} else {
				return Envs.deepMergeTo.apply(Envs, [{}].concat(ruleSet));
			}
		}
	}
	findRuleFromRepo(ruleName) {
		let rule = null;
		if (this.ruleRepo) {
			rule = this.ruleRepo[ruleName];
		}
		if (rule == null) {
			rule = GlobalValidationRules[ruleName];
		}
		if (rule == null) {
			throw `Rule ${ruleName} not found, please define it when construct validator \
					or into global validation rules repository`;
		}
		return rule;
	}
	setPerspective(perspective) {
		this.perspective = perspective;
	}
	getPerspective() {
		return this.perspective;
	}
}

export {Validator, GlobalValidationRules, messages as ValidationMessages}