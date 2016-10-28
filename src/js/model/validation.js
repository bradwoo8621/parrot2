import {Envs} from '../envs'

// TODO rules
const GlobalValidationRules = {
	required: null,
	min: null,
	max: null,
	before: null,
	after: null,
	child: null
};
class Validator {
	static ALL = '--all'
	constructor(rules, staged, ruleRepo) {
		if (staged) {
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

	validate(model, stage) {
		let rules = this.getRules(stage);
		return Object.keys(rules).map((key) => {
			let value = model.get(key);
			let propRules = rules[key];
			let result = Object.keys(propRules).map((ruleName) => {
				let ruleBody = propRules[ruleName];
				if (typeof ruleBody === 'function') {
					return ruleBody.call(this, model, value);
				} else {
					let rule = this.findRuleFromRepo(ruleName);
					return rule.call(this, model, value, ruleBody);
				}
			}).filter((ruleResult) => {
				// filter the passed rule results
				return ruleResult != null && ruleResult !== true;
			});
			return {
				name: key,
				result: result
			};
		}).filter((propResult) => {
			// filter the 
			return propResult.result.length != 0;
		}).reduce((prev, next) => {
			prev[next.name] = next.result;
			return prev;
		}, {});
	}

	getRules(stage) {
		if (stage) {
			let ruleSet = this.rules[stage];
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
}

export {Validator, GlobalValidationRules}