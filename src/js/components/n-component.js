import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
import lodash from 'lodash'
let $ = jQuery;

import {Envs} from '../envs'
import {Model} from '../model/model'
import {Validator} from '../model/validation'
import {Layout} from '../layout/layout'


class NWidget extends React.Component {
	me() {
		return ReactDOM.findDOMNode(this.refs.me);
	}
	$me() {
		return $(this.me());
	}
	cell() {
		return this.refs.cell ? ReactDOM.findDOMNode(this.refs.cell) : this.me();
	}
	$cell() {
		return $(this.cell());
	}
}
class NComponent extends NWidget {
	state = {}

	constructor(props) {
		super(props);
		this.buildLayout(props);
	}

	buildLayout(props) {
		if (!props.layout) {
			// collect all n- attributes
			this.layoutFromDOM = Layout.buildLayoutByProps(props);
		} else {
			props.layout.mergeLayoutFromProps(props);
		}
		// calculate enabled and visible on willMount and willUpdate
		this.state.enabled = this.invokeMonitorRule('enabled', true);
		this.state.visible = this.invokeMonitorRule('visible', true);
	}

	// returns additional model only if additional model designated and @isUsingPrimaryModel is false
	getModel() {
		return this.isUsingPrimaryModel() ? this.getPrimaryModel() : this.getAdditionalModel();
	}
	// additional model from layout
	getAdditionalModel() {
		let model = this.getLayout().getAdditionalModel();
		return model ? model : this.getPrimaryModel();
	}
	// primary model from props
	getPrimaryModel() {
		return this.props.model;
	}
	// default not use primary model
	// when additional model is not designated in layout
	// @getAdditionalModel will returns primary model instead
	isUsingPrimaryModel() {
		return this.getLayoutOptionValue('usePrimaryModel', true);
	}
	getLayout() {
		return this.props.layout || this.layoutFromDOM;
	}
	getOrientation() {
		return this.props.orientation;
	}
	isViewMode() {
		return this.props.viewMode ? true : false;
	}

	// lifecycle
	componentWillUpdate(nextProps, nextState) {
		this.buildLayout(nextProps);
		this.uninstallUnderlyingMonitors({
			pre: this.preWillUpdate,
			post: this.postWillUpdate
		}, nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		this.installUnderlyingMonitors({
			pre: this.preDidUpdate,
			post: this.postDidUpdate
		}, prevProps, prevState);
	}
	componentWillUnmount() {
		this.uninstallUnderlyingMonitors({
			pre: this.preWillUnmount,
			post: this.postWillUnmount
		});
		delete this.state.boundFuncList;
	}
	componentDidMount() {
		this.installUnderlyingMonitors({
			pre: this.preDidMount,
			post: this.postDidMount
		});
	}

	// first parameter is a json of pointcut methods
	installUnderlyingMonitors() {
		return this.pointcutPreExecutor.apply(this, arguments)
				   .internalInstallLifecycleMonitors()
				   .internalInstallDOMListeners()
				   .pointcutPostExecutor.apply(this, arguments)
				   .doAfterRender();
	}
	doAfterRender() {
		return this;
	}
	internalInstallDOMListeners() {
		let listeners = this.getDOMEventMonitors();
		let me = this.$cell();
		Object.keys(listeners).forEach((key) => {
			let listener = listeners[key];
			if (typeof listener === 'function') {
				me.on(key, this.bindToThis(listener));
			} else {
				if (listener.once) {
					me.one(key, listener.selector, listener.data, this.bindToThis(listener.handler));
				} else {
					me.on(key, listener.selector, listener.data, this.bindToThis(listener.handler));
				}
			}
		});
		return this;
	}
	internalInstallLifecycleMonitors() {
		return this.addPostChangeListener(this.bindToThis(this.onModelChanged))
				   .addPostValidateListener(this.bindToThis(this.onModelValidated))
				   .detectMonitors(['enabled', 'visible'], this.onMonitorChangeDetected)
				   .detectMonitors(['watch'])
				   .detectMonitors(['validate'], this.onValidateDetected);
	}
	uninstallUnderlyingMonitors() {
		return this.pointcutPreExecutor.apply(this, arguments)
				   .internalUninstallLifecycleMonitors()
				   .internalUninstallDOMListeners()
				   .pointcutPostExecutor.apply(this, arguments);
	}
	internalUninstallDOMListeners() {
		let listeners = this.getDOMEventMonitors();
		let me = this.$cell();
		Object.keys(listeners).forEach((key) => {
			let listener = listeners[key];
			if (typeof listener === 'function') {
				me.off(key, this.bindToThis(listener));
			} else {
				me.off(key, listener.selector, listener.data, this.bindToThis(listener.handler));
			}
		});
		return this;
	}
	internalUninstallLifecycleMonitors() {
		return this.removePostChangeListener(this.bindToThis(this.onModelChanged))
				   .removePostValidateListener(this.bindToThis(this.onModelValidated))
				   .undetectMonitors(['enabled', 'visible'], this.onMonitorChangeDetected)
				   .undetectMonitors(['watch'])
				   .undetectMonitors(['validate'], this.onValidateDetected);
	}
	// life cycle pointcut executor
	pointcutPreExecutor(pointcut) {
		if (pointcut && pointcut.pre) {
			pointcut.pre.apply(this, Array.prototype.slice.call(arguments, 1));
		}
		return this;
	}
	pointcutPostExecutor(pointcut) {
		if (pointcut && pointcut.post) {
			pointcut.post.apply(this, Array.prototype.slice.call(arguments, 1));
		}
		return this;
	}

	// model listeners
	addPostChangeListener(listener) {
		return this.addModelListener(listener, this.getModel().addPostChangeListener);
	}
	removePostChangeListener(listener) {
		return this.addModelListener(listener, this.getModel().removePostChangeListener);
	}
	addPostAddListener(listener) {
		return this.addModelListener(listener, this.getModel().addPostAddListener);
	}
	removePostAddListener(listener) {
		return this.addModelListener(listener, this.getModel().removePostAddListener);
	}
	addPostRemoveListener(listener) {
		return this.addModelListener(listener, this.getModel().addPostRemoveListener);
	}
	removePostRemoveListener(listener) {
		return this.addModelListener(listener, this.getModel().removePostRemoveListener);
	}
	addPostValidateListener(listener) {
		return this.addModelListener(listener, this.getModel().addPostValidateListener);
	}
	removePostValidateListener(listener) {
		return this.addModelListener(listener, this.getModel().removePostValidateListener);
	}

	// func is the add/remove method for listener on model object
	addModelListener(listener, funcOnModel) {
		if (listener) {
			funcOnModel.call(this.getModel(), this.getDataId(), listener);
		}
		return this;
	}
	onModelChanged(evt) {
		if (this.getModel().getValidator() && this.isValidateImmediately()) {
			this.getModel().validate(this.getDataId());
		} else {
			this.forceUpdate();
		}
	}
	onModelValidated(evt) {
		this.forceUpdate();
	}
	onMonitorChangeDetected(evt) {
		this.forceUpdate();
	}
	onValidateDetected(evt) {
		this.getModel().validate(this.getDataId());
	}
	isValidateImmediately() {
		return this.getLayoutOptionValue('validateImmediately', true);
	}
	getValidationResult() {
		return this.getModel().getValidationResults(this.getDataId());
	}

	// option designated monitors
	// can be defined as 
	// 1. function, then no dependency
	// 2. json with depends, rule
	// 	  depends and rule are both optional; 
	//	  no rule, monitor the dependencies, return true when run rule.
	//	  no depends, monitor nothing, call rule function when run rule. rule must be a function if defined.
	// 3. return monitor itself
	addDependencyMonitor(dependency, handler) {
		this.manageDependencyMonitor(dependency, handler, Model.prototype.addPostChangeListener);
	}
	removeDependencyMonitor(dependency, handler) {
		this.manageDependencyMonitor(dependency, handler, Model.prototype.removePostChangeListener);
	}
	manageDependencyMonitor(dependency, handler, manageFunction) {
		let model;
		if (typeof dependency === 'string') {
			// monitor property on current model
			model = this.getModel();
			manageFunction.call(model, dependency, handler);
		} else {
			let {on, id} = dependency;
			if (on === 'p') {
				model = this.getPrimaryModel();
			} else if (on === 'a') {
				model = this.getAdditionalModel();
			}
			manageFunction.call(model, id, handler);
		}
		return this;
	}
	detectMonitor(key, handler) {
		return this.manageMonitor(key, handler, this.addDependencyMonitor);
	}
	undetectMonitor(key, handler) {
		return this.manageMonitor(key, handler, this.removeDependencyMonitor);
	}
	manageMonitor(key, handler, manageFunction) {
		this.wrapToArray(this.getLayoutOptionValue(key)).forEach((def) => {
			if (def && def.depends) {
				let depends = def.depends;
				depends = this.wrapToArray(depends);
				depends.forEach(depend => {
					if (handler) {
						manageFunction.call(this, depend, this.bindToThis(handler));
					} else {
						manageFunction.call(this, depend, this.bindToThis(def.rule ? def.rule : this.onMonitorChangeDetected));
					}
				});
			}
		});
		return this;
	}
	detectMonitors(optionKeys, handler) {
		return this.manageMonitors(optionKeys, handler, this.detectMonitor);
	}
	undetectMonitors(optionKeys, handler) {
		return this.manageMonitors(optionKeys, handler, this.undetectMonitor);
	}
	manageMonitors(optionsKeys, handler, manageFunction) {
		optionsKeys.forEach(key => {
			// monitor must be bindToThis
			manageFunction.call(this, key, handler);
		});
		return this;
	}
	// bind given function to this, and cache.
	// retrieve from cache or create it.
	bindToThis(func) {
		if (this.state.boundFuncList == null) {
			this.state.boundFuncList = [];
		}
		let list = this.state.boundFuncList;
		let index = list.indexOf(func);
		if (index === -1) {
			list.push(func);
			list.push(func.bind(this));
			return list[list.length - 1];
		} else {
			return list[index + 1];
		}
	}
	invokeMonitorRule(key, defaultValue) {
		let def = this.getLayoutOptionValue(key);
		if (this.isNoValueAssigned(def)) {
			return defaultValue;
		}
		if (def.rule) {
			return def.rule.call(this);
		} else if (def.depends) {
			return defaultValue;
		} else if (typeof def === 'function') {
			return def.call(this);
		} else {
			return def;
		}
	}

	// values
	getValueFromModel() {
		return this.getModel().get(this.getDataId());
	}
	setValueToModel(value) {
		if (this.isValueChanged(value)) {
			this.getModel().set(this.getDataId(), value);
		}
	}
	isValueChanged(value) {
		let old = this.getModel().get(this.getDataId());
		return !((typeof old === typeof value) && old == value);
	}

	// id must be a string
	getId() {
		return this.getLayout().getId();
	}
	// data id can be string or function
	getDataId() {
		let dataId = this.getLayout().getDataId();
		// use id as data id if not designated
		dataId = this.isNoValueAssigned(dataId) ? this.getId() : dataId;
		return this.wrapOptionValue(dataId);
	}
	// label can be string or function
	getLabel() {
		return this.wrapOptionValue(this.getLayout().getLabel());
	}
	isLabelShown() {
		return this.getLayout().isLabelShown();
	}
	isErrorShown() {
		return this.getLayout().isErrorShown();
	}
	// position can be string or function
	getWidth() {
		return this.wrapOptionValue(this.getLayout().getWidth());
	}
	getLabelWidth() {
		return this.getLayoutOptionValue('labelWidth', Envs.LABEL_WIDTH);
	}
	getComponentInternalWidth(labelWidth) {
		let compWidth = this.getLayoutOptionValue('compWidth');
		if (compWidth) {
			return compWidth;
		} else {
			labelWidth = labelWidth ? labelWidth : Envs.LABEL_WIDTH;
			if (typeof labelWidth === 'number' || typeof labelWidth === 'string') {
				compWidth = Envs.CELL_COLUMNS - labelWidth;
			} else {
				let cellColumns = this.getLayoutOptionValue('cellColumns', Envs.CELL_COLUMNS);
				compWidth = Object.keys(labelWidth).reduce((prev, next) => {
					let width = labelWidth[next];
					if (typeof width === 'number' || typeof width === 'string') {
						prev[next] = cellColumns - width;
					}
					return prev;
				}, {});
			}
			let correct = true;
			if (typeof compWidth === 'number') {
				correct = !isNaN(compWidth);
			} else {
				correct = Object.keys(compWidth).some((key) => {
					if (isNaN(compWidth[key])) {
						return true;
					}
				});
			}
			if (!correct) {
				throw {
					message: 'Cannot compute component internal width on label width',
					labelWidth: labelWidth
				};
			} else {
				return compWidth;
			}
		}
	}
	getLabelPosition() {
		let pos = this.getLayoutOptionValue('labelPosition', Envs.LABEL_POSITION);
		if (typeof pos === 'string') {
			return `n-comp-label-${pos}`;
		} else {
			return classnames(Object.keys(pos).reduce((prev, next) => {
				prev[`n-comp-label-${next}`] = pos[next];
				return prev;
			}, {}));
		}
	}
	getWidthClassName(width, clear) {
		if (arguments.length === 0) {
			throw 'At least one parameter be passed';
		}
		let widthClassName = '';
		if (width != null) {
			let type = typeof width;
			if (type === 'number') {
				// only returns sm, for width over sm definition
				widthClassName = `n-col-sm-${width}`;
			} else if (type === 'string') {
				let segments = width.split(',');
				if (segments.length == 1) {
					widthClassName = `n-col-sm-${width}`;
				} else {
					widthClassName = classnames(segments.map((segment) => {
						return `n-col-${segment}`;
					}));
				}
			} else {
				widthClassName = classnames(Object.keys(width).map((key) => {
					return `n-col-${key}-${width[key]}`;
				}));
			}
		}
		let clearClassName = '';
		if (clear != null) {
			if (clear === true) {
				// only returns sm, for width over sm definition
				clearClassName = 'n-clear-both-sm';
			} else if (clear === false) {
				// do nothing
			} else if (typeof clear === 'string') {
				clearClassName = classnames(clear.split(',').map((segment) => {
					let parts = segment.split(':');
					if (parts.length === 1) {
						return `n-clear-${segment}-sm`;
					} else {
						return classnames(parts[1].split(' ').map((size) => {
							return `n-clear-${parts[0]}-${size}`;
						}));
					}
				}));
			} else {
				clearClassName = classnames(Object.keys(clear).map((key) => {
					let value = clear[key];
					if (value === true) {
						return `n-clear-both-${key}`;
					} else if (value === false) {
						return `n-clear-none-${key}`;
					} else if (typeof value === 'string') {
						return `n-clear-${value}-${key}`;
					} else {
						throw `Unsupported clear type "${value}" for size "${key}"`;
					}
				}));
			}
		}
		return classnames(widthClassName, clearClassName);
	}
	getColumnIndex() {
		return this.wrapOptionValue(this.getLayout().getColumnIndex());
	}
	getRowIndex() {
		return this.wrapOptionValue(this.getLayout().getRowIndex());
	}
	getPosition() {
		return this.getLayout().getPosition();
	}
	// styles
	getComponentClassName() {
		return null;
	}
	getComponentStyle() {
		return classnames(this.getStyle('comp'), 
						this.getComponentClassName(), {
						'n-disabled': !this.isEnabled(),
						'n-view-mode': this.isViewMode()
					});
	}
	getCellStyle() {
		return this.getStyle('cell');
	}
	getStyle(key) {
		return classnames(this.wrapOptionValue(this.getLayout().getStyle(key)));
	}

	// get value by given key from layout
	// or to be defaultValue if not designated in layout
	// or to be defaultOptions from props if not designated from above
	getLayoutOptionValue(key, defaultValue, noWrap) {
		let value = this.getLayout().getOptionValue(key);
		if (this.isNoValueAssigned(value)) {
			// not designated in layout
			if (this.isNoValueAssigned(defaultValue)) {
				// default value not designated
				if (!this.isNoValueAssigned(this.props.defaultOptions)) {
					// default option object designated
					// get value from default option object
					// value still might be null or undefined
					value = this.props.defaultOptions[key];
				}
			} else {
				// default value designated
				value = defaultValue;
			}
		}
		// wrap value
		return (noWrap !== true) ? this.wrapOptionValue(value) : value;
	}

	wrapOptionValue(value) {
		if (typeof value === 'function') {
			// let context to be component itself
			return value.call(this);
		} else {
			// returns value directly
			return value;
		}
	}
	wrapToArray(value) {
		if (this.isNoValueAssigned(value)) {
			return [];
		}
		return Array.isArray(value) ? value : [value];
	}
	isNoValueAssigned(value) {
		return (typeof value === 'undefined') || value == null;
	}
	isVisible() {
		if (this.state.visible == null) {
			this.state.visible = this.invokeMonitorRule('visible', true);
		}
		return this.state.visible;
	}
	isEnabled() {
		if (this.state.enabled == null) {
			this.state.enabled = this.invokeMonitorRule('enabled', true);
		}
		return this.state.enabled;
	}
	getTabIndex() {
		return (this.isEnabled() && !this.isViewMode()) ? 0 : null;
	}
	isClickable() {
		return this.isEnabled() && this.isHasClickHanlder();
	}
	isHasClickHanlder() {
		return this.getEventMonitor('click');
	}
	renderNormalLine() {
		return <hr className={classnames('n-normal-line', this.getStyle('normal-line'))} 
				   ref='normalLine'/>;
	}
	renderFocusLine() {
		return <hr className={classnames('n-focus-line', this.getStyle('focus-line'))}
				   ref='focusLine'/>;
	}
	// only handle gain or lost
	onComponentFocusChanged() {
		$(ReactDOM.findDOMNode(this.refs.normalLine)).toggleClass('focus');
		$(ReactDOM.findDOMNode(this.refs.focusLine)).toggleClass('focus');
	}

	// event 
	getEventMonitors() {
		return this.getLayout().getEventMonitors();
	}
	getEventMonitor(key) {
		return this.getLayout().getEventMonitor(key);
	}
	// event monitors which starts with 'jq.'
	// these monitors are added via jquery at didMount and didUpdate,
	// removed at willUnmount and willUpdate
	// value of event key can be function or a json contains once, selector, data, handler.
	// eg.
	// 'jq.click': function(evt) {}
	// or
	// 'jq.click': {
	//		once: true,
	//		selector: 'input',
	//		data: {data: 'some data'},
	//		handler: function(evt) {}
	// }
	// only handler is required, other 3 attributes are optional
	getDOMEventMonitors() {
		let monitors = this.getEventMonitors();
		return Object.keys(monitors).reduce((set, key) => {
			if (key.startsWith('jq.')) {
				let monitor = monitors[key];
				if (monitor) {
					set[key.substr(3)] = monitors[key];
				}
			}
			return set;
		}, {});
	}
	// monitors will bind to this and prepared for add to dom node
	wrapMonitorsToDOM(monitors) {
		return Object.keys(monitors).reduce((set, key) => {
			let newKey = key.charAt(0).toUpperCase() + key.slice(1);
			// bindToThis is important
			// after this, the function context always be react component itself
			set[`on${newKey}`] = this.bindToThis(monitors[key]);
			return set;
		}, {});
	}
	fireEventToMonitor(evt, key) {
		key = key ? key : evt.type;
		let monitor = this.getEventMonitor(key);
		if (monitor) {
			return monitor.call(this, evt);
		}
	}
	handleEventResult(returnValue, options) {
		if (returnValue != null && typeof returnValue.done === 'function') {
			console.log(returnValue);
			returnValue.done(() => {
				options.handler.call(Array.prototype.slice.call(arguments, 0));
			}).fail(() => {
				if (options.fail) {
					options.fail.call(Array.prototype.slice.call(arguments, 0));
				}
			});
		} else {
			let handler = null;
			if (typeof returnValue === 'undefined') {
				handler = options.undefined || options.null;
			} else if (returnValue == null) {
				handler = options.null;
			} else {
				handler = options[returnValue];
			}
			if (handler == null) {
				handler = options.handler;
			}
			handler.call(this, returnValue);
		}
	}

	getTextInViewMode() {
		return this.getValueFromModel();
	}
	render() {
		if (!this.isVisible()) {
			return null;
		}
		let validationResults = this.isErrorShown() ? this.getValidationResult() : null;

		let label = this.getLabel();
		let labelShown = this.isLabelShown();
		let cellClassName = classnames(this.getCellStyle(),
									this.getWidthClassName(this.getWidth(), 
									this.wrapOptionValue(this.getLayout().getClear())));
		if (labelShown && label) {
			let labelWidth = this.getLabelWidth();
			let compWidth = this.getComponentInternalWidth(labelWidth);
			return (<div className={classnames(this.getLabelPosition(), cellClassName)}
						 ref='cell'>
				<div className='n-row'>
					<div className={classnames('n-comp-label', this.getWidthClassName(labelWidth))}>
						{label}
					</div>
					<div className={classnames('n-comp', this.getWidthClassName(compWidth))}>
						{this.renderComponent()}
					</div>
					{this.renderValidationResults(validationResults)}
				</div>
			</div>);
		} else if (cellClassName) {
			return (<div className={cellClassName}
						 ref='cell'>
				{this.renderComponent()}
				{this.renderValidationResults(validationResults)}
			</div>);
		} else if (validationResults) {
			return (<div ref='cell'>
				{this.renderComponent()}
				{this.renderValidationResults(validationResults)}
			</div>);
		} else {
			return this.renderComponent();
		}
	}
	renderValidationResultItems(items) {
		return 	items.map((item, itemIndex) => {
			let className = classnames('n-validation-result', {
				'n-validation-result-info': item.level === Validator.LEVEL_INFO,
				'n-validation-result-warning': item.level === Validator.LEVEL_WARN,
				'n-validation-result-error': item.level === Validator.LEVEL_ERROR
			});
			return (<span className={className}
						  key={itemIndex}>
				{item.message.replace('%1', this.getLabel())}
			</span>);
		});
	}
	renderValidationResultIcon(items) {
		let className = classnames('n-validation-result-icon',
			'fa fa-fw fa-exclamation-circle', {
			'n-validation-result-info': items[0].level === Validator.LEVEL_INFO,
			'n-validation-result-warning': items[0].level === Validator.LEVEL_WARN,
			'n-validation-result-error': items[0].level === Validator.LEVEL_ERROR
		});
		return <i className={className} />;
	}
	renderValidationResults(results) {
		if (results) {
			let items = results.filter((result) => {
				return result.rule !== Validator.CHILD;
			}).slice(0).sort((a, b) => {
				let levelA = a.level ? a.level : Validator.LEVEL_ERROR;
				let levelB = b.level ? b.level : Validator.LEVEL_ERROR;
				return levelA - levelB;
			});
			if (items.length > 0) {
				return (<div className='n-validation'>
					{this.renderValidationResultIcon(items)}
					{this.renderValidationResultItems(items)}
				</div>);
			}
		}
	}
	renderComponent() {
		if (this.isViewMode()) {
			return this.renderInViewMode();
		} else {
			return this.renderInNormal();
		}
	}
	isViewModeSameAsNormal() {
		return true;
	}
	renderInViewMode() {
		var renderer = Envs.getViewModeRenderer(this.getLayout().getTypeAsString());
		if (renderer) {
			return Envs.render(renderer, {
				model: this.getModel(),
				layout: this.getLayout(),
				orientation: this.getOrientation(),
				viewMode: true,
				ref: 'view-comp'
			});
		}

		if (this.isViewModeSameAsNormal()) {
			return this.renderInNormal();
		}

		var label = this.getTextInViewMode();
		var layout = new Layout(this.getId(), $.extend(true, {}, {
			comp: this.getLayout().getOptions(),
			// view css
			css: this.getStyle('view')
		}, {
			label: label,
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.LABEL,
				textFromModel: false
			}
		}));

		return Envs.render(renderer, {
			model: this.getModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: true,
			ref: 'view-comp'
		});
	}
	renderInternalComponent(layoutJSON) {
		let layout = new Layout(this.getDataId(), layoutJSON);
		let props = {
			model: this.getModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: this.isViewMode(),
			container: this
		};
		if (arguments.length > 1) {
			Envs.deepMergeTo.apply(Envs, 
				[props].concat(Array.prototype.slice.call(arguments, 1)));
		}
		return Envs.render(layout.getTypeAsString(), props);
	}
	getContainer() {
		return this.props.container;
	}
}

class NAddonComponent extends NComponent {
	// renderer
	renderAddon(addon, addonIndex) {
		return this.renderInternalComponent(addon, {
			key: addonIndex
		});
	}
	renderAddons(addons) {
		if (!addons) {
			return null;
		}

		return (<div className='n-input-addon'>
			{this.wrapToArray(addons).map((addon, addonIndex) => {
				return this.renderAddon(addon, addonIndex);
			})}
		</div>);
	}
	renderLead() {
		return this.renderAddons(this.getLead());
	}
	renderTail() {
		return this.renderAddons(this.getTail());
	}
	getLead() {
		return this.getLayoutOptionValue('lead');
	}
	getTail() {
		return this.getLayoutOptionValue('tail');
	}
	hasAddon() {
		return this.getLead() || this.getTail();
	}
}

const NDropdownComponent = (ParentClass) => class extends ParentClass {
	onDocumentMouseDown(evt) {
		if (evt.isDefaultPrevented()) {
			return;
		}
		if ($(evt.target).closest(this.$me()).length == 0) {
			this.hideDropdown();
		}
	}
	onDocumentKeyUp(evt) {
		if (evt.isDefaultPrevented()) {
			return;
		}
		if (evt.keyCode === 27) {
			// escape
			this.hideDropdown();
		}
	}

	isDropdownShown() {
		return this.$me().hasClass('n-dropdown-open');
	}
	showDropdown() {
		let me = this.$me();
		if (!me.hasClass('n-dropdown-open')) {
			$(document).on('mousedown', this.bindToThis(this.onDocumentMouseDown))
					   .on('keyup', this.bindToThis(this.onDocumentKeyUp));
			// TODO close other dropdowns, but no event fired
			$('.n-dropdown-open').removeClass('n-dropdown-open');
			me.addClass('n-dropdown-open');
			this.recalcDropdownPosition(this.getDropdown(), me);
			this.fireEventToMonitor($.Event('dropdownOpen', {target: me[0]}));
		}
	}
	hideDropdown() {
		let me = this.$me();
		if (me.hasClass('n-dropdown-open')) {
			$(document).off('mousedown', this.bindToThis(this.onDocumentMouseDown))
					   .off('keyup', this.bindToThis(this.onDocumentKeyUp));
			me.removeClass('n-dropdown-open');
			this.fireEventToMonitor($.Event('dropdownClose', {target: me[0]}));
		}
	}
	toggleDropdown() {
		let me = this.$me();
		if (!me.hasClass('n-dropdown-open')) {
			this.showDropdown();
		} else {
			this.hideDropdown();
		}
	}
	getDropdown() {
		return $(ReactDOM.findDOMNode(this.refs.dropdown));
	}
	recalcDropdownPosition(dropdown, container) {
		var styles = {};
		styles.width = container.outerWidth();
		var offset = container.offset();
		// 1px offset
		// set the real top, assumpt it is on bottom
		styles.top = offset.top + container.outerHeight() + 1;
		styles.left = offset.left;

		var onTop = false;
		var rightToLeft = false;
		var realHeight = dropdown.outerHeight();
		var realWidth = dropdown.outerWidth();
		// check dropdown in top or bottom
		// TODO why outerHeight() here? according to jQuery's document, height() is the correct choice.
		// TODO but in Chrome 53.0.2785.116 m, height() returns same as $(document).height().
		// TODO and in Firefox 46.0.1, also same as Chrome.
		// TODO in IE11 or down to 10/9, exactly returns the value which described on jQuery doc.
		// TODO it really sucks
		if ((styles.top + realHeight) > ($(window).outerHeight() + $(window).scrollTop())) {
			// cannot show in bottom and in current viewport
			// check it is enough top or not
			if ((offset.top - $(window).scrollTop()) >= realHeight) {
				// enough
				styles.top = offset.top - realHeight;
				onTop = true;
			} else if ((styles.top + realHeight) <= $(document).height()) {
				// can show in bottom and in current document
				onTop = false;
			} else if (offset.top < realHeight) {
				// cannot show in top and in current document
				onTop = false;
			} else {
				styles.top = offset.top - realHeight - 1;
				onTop = true;
			}
		} else {
			// can show in bottom and in current viewport
			onTop = false;
		}

		// check dropdown to left or right
		if (realWidth > styles.width) {
			var width = $(window).width();
			if ((styles.left + realWidth) <= width) {
				// normal from left to right, do nothing
			} else if ((styles.left + styles.width) >= realWidth) {
				// from right to left
				styles.left = styles.left + styles.width - realWidth;
				rightToLeft = true;
			} else {
				// still left to right, do nothing
			}
		}

		if (onTop) {
			container.addClass('n-dropdown-top').removeClass('n-dropdown-bottom');
		} else {
			container.removeClass('n-dropdown-top').addClass('n-dropdown-bottom');
		}
		if (rightToLeft) {
			container.addClass('n-dropdown-r2l').removeClass('n-dropdown-l2r');
		} else {
			container.addClass('n-dropdown-l2r').removeClass('n-dropdown-r2l');
		}
		// dropdown.css({top: styles.top, left: styles.left});
	}
}

const NCodeTableComponent = (ParentClass) => class extends ParentClass {
	getCodeTable() {
		return this.getLayoutOptionValue('codes');
	}
}

class NContainer extends NComponent {
	renderLeadingDOMChildren(propsFromParent) {
		return React.Children.map(this.props.children, (child) => {
			if (child.props['data-leading']) {
				return this.renderDOMChild(child, propsFromParent);
			}
		});
	}
	renderTailingDOMChildren(propsFromParent) {
		return React.Children.map(this.props.children, (child) => {
			if (!child.props['data-leading']) {
				return this.renderDOMChild(child, propsFromParent);
			}
		});
	}
	renderDOMChild(child, propsFromParent) {
		if (typeof child.type === 'string') {
			// plain dom node
			return child;
		} else {
			// react node
			// pass props to child
			return React.createElement(child.type, Envs.deepMergeTo({
						model: this.getModel(),
						orientation: this.getOrientation(),
						viewMode: this.isViewMode()
					}, 
					propsFromParent ? propsFromParent[child.type.name] : null, 
					child.props));
		}
	}
	getDOMChildOf(type) {
		let children = React.Children.map(this.props.children, function(child) {
			return (child.type === type || child.type.name === type) ? child : null;
		});
		if (children && children.length > 0) {
			// return the first not null child
			return children.find(child => {
				return child != null;
			});
		} else {
			return null;
		}
	}
	// parameter can be string or react component
	getDOMChildrenOfDOMChild(childNodeOrType) {
		if (!childNodeOrType) {
			return null;
		}

		let child = null;
		if (typeof childNodeOrType === 'string') {
			// it's a type
			child = this.getDOMChildOf(childNodeOrType);
		} else {
			// it's a react component
			child = childNodeOrType;
		}
		return child.props.children;
	}
	renderChildren(options) {
		options = options ? options : {};
		let children = options.children ? options.children : this.getChildren(),
			className = options.class,
			model = options.model,
			columnsOfGrid = options.columnsOfGrid;

		if (!children) {
			return null;
		}

		let rows = {};
		Object.keys(children).forEach((key) => {
			let child = children[key];
			let layout = new Layout(key, child);

			let rowIndex = this.wrapOptionValue(layout.getRowIndex());
			rowIndex = rowIndex == null ? Envs.DEFAULT_ROW_INDEX : rowIndex;
			let row = rows[rowIndex];
			if (row == null) {
				row = {};
				rows[rowIndex] = row;
			}

			let columnIndex = this.wrapOptionValue(layout.getColumnIndex());
			columnIndex = columnIndex == null ? Envs.DEFAULT_COLUMN_INDEX : columnIndex;
			let columnInRow = row[columnIndex];
			if (columnInRow == null) {
				columnInRow = [];
				row[columnIndex] = columnInRow;
			}
			columnInRow.push(layout);
		});
		return Object.keys(rows).sort((index1, index2) => {
			return index1 - index2;
		}).map(rowIndex => {
			return this.renderRow({
				row: rows[rowIndex], 
				rowIndex: rowIndex, 
				class: className, 
				model: model,
				columnsOfGrid: columnsOfGrid
			});
		});
	}
	renderRow(options) {
		options = options ? options : {};
		let row = options.row,
			rowIndex = options.rowIndex,
			className = options.class,
			model = options.model,
			columnsOfGrid = options.columnsOfGrid;
		if (!row) {
			return null;
		}
		let content = Object.keys(row).sort((index1, index2) => {
			return index1 - index2;
		}).map(columnIndex => {
			return this.renderCell({
				column: row[columnIndex], 
				model: model
			});
		});
		className = classnames('n-row', className, this.getColumnsOfGridClassName(columnsOfGrid));
		return (<div className={className}
					 key={rowIndex}>
			{content}
		</div>);
	}
	renderCell(options) {
		options = options ? options : {};
		let column = options.column,
			model = options.model;
		if (!column) {
			return null;
		}
		return column.map((layout, layoutIndex) => {
			let props = {
				model: model ? model : this.getModel(),
				layout: layout,
				orientation: this.getOrientation(),
				viewMode: this.isViewMode(),
				ref: layout.getId(),
				key: layoutIndex,
				container: this
			};
			return Envs.render(layout.getTypeAsString(), props);
		});
	}
	getChildren() {
		return this.getLayoutOptionValue('children');
	}
	renderLeadingChildren() {
		return this.renderChildren({
			children: this.getLeadingChildren(),
			class: 'n-leading'
		});
	}
	renderTailingChildren() {
		return this.renderChildren({
			children: this.getTailingChildren(), 
			class: 'n-tailing'
		});
	}
	getLeadingChildren() {
		return this.getLayoutOptionValue('leadChildren', {});
	}
	getTailingChildren() {
		return this.getLayoutOptionValue('tailChildren', {});
	}
	getColumnsOfGrid() {
		return this.getLayoutOptionValue('columnsOfGrid', Envs.COLUMNS_OF_GRID);
	}
	// will not use default value
	getColumnsOfGridClassName(columnsOfGrid) {
		if (!columnsOfGrid) {
			columnsOfGrid = this.getColumnsOfGrid();
		}
		if (!columnsOfGrid || columnsOfGrid == 12) {
			return '';
		} else if (typeof columnsOfGrid === 'number' || typeof columnsOfGrid === 'string') {
			return `n-row-${columnsOfGrid}c`;
		} else {
			return classnames(Object.keys(columnsOfGrid).reduce((prev, next) => {
				prev[`n-row-${next}-${columnsOfGrid[next]}c`] = true;
				return prev;
			}, {}));
		}
	}
}

class NCollapsibleContainer extends NContainer {
	isCollapsible() {
		return this.getLayoutOptionValue('collapsible', false);
	}
	isInitExpanded() {
		return this.getLayoutOptionValue('expanded', true);
	}
	isExpanded() {
		if (this.state.expanded == null) {
			this.state.expanded = this.isInitExpanded();
		}
		return this.state.expanded;
	}
	expand() {
		this.setState({expanded: true});
		this.fireEventToMonitor($.Event('expand', {
			target: this.me()
		}));	
	}
	collapse() {
		this.setState({expanded: false});
		this.fireEventToMonitor($.Event('collapse', {
			target: this.me()
		}));	
	}
}

class NHierarchyComponent extends NContainer {
	internalInstallLifecycleMonitors() {
		return super.internalInstallLifecycleMonitors()
					.addPostAddListener(this.bindToThis(this.onModelChanged))
					.addPostRemoveListener(this.bindToThis(this.onModelChanged));
	}
	internalUninstallLifecycleMonitors() {
		return super.internalUninstallLifecycleMonitors()
					.removePostAddListener(this.bindToThis(this.onModelChanged))
					.removePostRemoveListener(this.bindToThis(this.onModelChanged));
	}
	createItemModel(itemJSON, itemIndex) {
		let itemModel = new Model(itemJSON, true)
			.setParent(this.getModel())
			.addPostChangeListener(Model.ALL, (evt) => {
				this.onItemModelChanged(evt, itemIndex);
			});
		let itemValidationResult = this.findItemValidationResult(itemJSON);
		if (itemValidationResult) {
			itemModel.replaceValidationResults(itemValidationResult);
		}
		let validator = this.getModel().getValidator();
		if (validator) {
			itemModel.setValidator(validator.createChildValidator(this.getDataId()));
		}
		return itemModel;
	}
	findItemValidationResult(itemJSON) {
		let validationResults = this.getValidationResult();
		if (validationResults) {
			let results = validationResults.find((result) => {
				return result.rule === Validator.CHILD;
			});
			if (results) {
				let itemResult = results.message.find((result) => {
					return result.item === itemJSON;
				});
				if (itemResult) {
					return itemResult.result;
				}
			}
		}
		return null;
	}
	createItemLayoutOptions(itemModel, itemIndex) {
		let layoutOptions = this.getLayout().getOptions();
		let itemLayoutOptions = {};
		Object.keys(layoutOptions).forEach(key => {
			itemLayoutOptions[key] = this.getLayoutOptionValue(key, null, true);
		});
		return itemLayoutOptions;
	}
	// onModelChanged(evt) {
	// 	super.onModelChanged(evt);
	// }
	onItemModelChanged(evt, itemIndex) {
		// fire update event, ignore the property information
		evt.model.getParent().update(this.getDataId(), evt.model.getCurrentModel(), evt.model.getCurrentModel(), itemIndex);
		this.fireEventToMonitor($.Event('itemChange', {
			target: this.me(),
			ndata: {
				itemModel: evt.model,
				itemIndex: itemIndex,
				originalEvent: evt
			}
		}));
	}
}

export {
	NWidget,
	NComponent,
	NAddonComponent,
	NDropdownComponent,
	NCodeTableComponent,
	NContainer,
	NCollapsibleContainer,
	NHierarchyComponent
}