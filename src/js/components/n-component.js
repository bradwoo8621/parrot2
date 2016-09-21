import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'

import {Envs} from '../envs'
import {Model} from '../model/model'

let $ = jQuery;

class NComponent extends React.Component {
	getInitialState() {
		return {};
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
		return this.getLayoutOptionValue('usePrimaryModel', false);
	}
	getLayout() {
		return this.props.layout;
	}
	getOrientation() {
		return this.props.orientation;
	}
	isViewMode() {
		return this.props.viewMode ? true : false;
	}

	// lifecycle
	componentWillUpdate(nextProps, nextState) {
		this.uninstallUnderlyingMonitors({
			pre: this.preComponentWillUpdate,
			post: this.postComponentWillUpdate
		}, nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		this.installUnderlyingMonitors({
			pre: this.preComponentDidUpdate,
			post: this.postComponentDidUpdate
		}, prevProps, prevState);
	}
	componentWillUnmount() {
		this.uninstallUnderlyingMonitors({
			pre: this.preComponentWillUnmount,
			post: this.postComponentWillUnmount
		});
	}
	componentDidMount() {
		this.installUnderlyingMonitors({
			pre: this.preComponentDidMount,
			post: this.postComponentDidMmount
		});
	}

	// first parameter is a json of pointcut methods
	installUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.addPostChangeListener(this.onModelChanged);
		this.pointcutPostExecutor.apply(this, arguments);
	}
	uninstallUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.removePostChangeListener(this.onModelChanged);
		this.pointcutPostExecutor.apply(this, arguments);
	}
	// life cycle pointcut executor
	pointcutPreExecutor(pointcut) {
		if (pointcut && pointcut.pre) {
			pointcut.pre.apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}
	pointcutPostExecutor(pointcut) {
		if (pointcut && pointcut.post) {
			pointcut.post.apply(this, Array.prototype.slice.call(arguments, 1));
		}
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
	addModelListener(listener, func) {
		if (listener) {
			func.call(this.getModel(), this.getDataId(), listener);
		}
		return this;
	}
	onModelChanged(evt) {
		this.forceUpdate();
	}
	onModelValidated(evt) {
		this.forceUpdate();
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
		let def = this.getLayoutOptionValue(key);
		if (def && def.depends) {
			let depends = def.depends;
			depends = Array.isArray(depends) ? depends : [depends];
			depends.forEach(depend => {
				manageFunction.call(this, depend, handler);
			});
		}
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
			manageFunction.call(this, key, this.bindToThis(handler));
		});
		return this;
	}
	// bind given function to this, and cache.
	// retrieve from cache or create it.
	bindToThis(func) {
		let list = this.functionList;
		if (!list) {
			this.functionList = list = [];
		}
		let index = list.findIndex(f => {
			return f === func;
		});
		if (index === -1) {
			list.push(func);
			list.push(func.bind(this));
			return list[list.length - 1];
		} else {
			return list[index + 1];
		}
	}
	invokeMonitorRule(optionKey) {
		let def = this.getLayoutOptionValue(key);
		if (def.rule) {
			return def.rule.call(this);
		} else if (def.depends) {
			return true;
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
	// position can be string or function
	getPosition() {
		return this.getLayout().getPosition();
	}
	// styles
	getComponentClassName() {
		return null;
	}
	getComponentStyle() {
		return classnames(this.getStyle('comp'), this.getComponentClassName(), {
			'n-disabled': !this.isEnabled()
		});
	}
	getCellStyle() {
		return classnames(this.getStyle('cell'), this.getComponentClassName(), {
			'n-disabled': !this.isEnabled()
		});
	}
	getStyle(key) {
		return this.wrapOptionValue(this.getLayout().getStyle(key));
	}

	// get value by given key from layout
	// or to be defaultValue if not designated in layout
	// or to be defaultOptions from props if not designated from above
	getLayoutOptionValue(key, defaultValue) {
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
		return this.wrapOptionValue(value)
	}

	// internal methods
	wrapOptionValue(value) {
		if (typeof value === 'function') {
			// let context to be component itself
			return value.call(this);
		} else {
			// returns value directly
			return value;
		}
	}
	isNoValueAssigned(value) {
		return (typeof value === 'undefined') || value == null;
	}
	isVisible() {
		return this.invokeMonitorRule('visible');
	}
	isEnabled() {
		return this.invokeMonitorRule('enabled');	
	}
	renderNormalLine() {
		return <hr className={classnames('normal-line', this.getStyle('normal-line'))} 
				   ref='normalLine'/>;
	}
	/**
	 * render focus bottom border
	 * @returns {XML}
	 */
	renderFocusLine() {
		return <hr className={classnames('focus-line', this.getStyle('focus-line'))}
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
	getEventMonitorsOf() {
		let monitors = this.getEventMonitors();
		let needList = Array.prototype.slice.call(arguments, 0);
		if (needList.length == 0) {
			// nothing
			return {};
		}
		return needList.reduce((set, key) => {
			set[key] = monitors[key];
			return set;
		}, {});
	}
	getEventMonitorsBut() {
		let monitors = this.getEventMonitors();
		let subset = {};
		let filterList = Array.prototype.slice.call(arguments, 0);
		if (filterList.length == 0) {
			// all
			return this.getMonitors();
		}
		return Object.keys(monitors).reduce((set, key) => {
			if (filterList.indexOf(key) == -1) {
				set[key] = monitors[key];
			}
			return set;
		}, {});
	}
	wrapMonitorsToDOM(monitors) {
		return Object.keys(monitors).reduce((set, key) => {
			let newKey = key.charAt(0).toUpperCase() + key.slice(1);
			set[`on${newKey}`] = monitors[key];
			return set;
		}, {});
	}
	fireEventMonitor(evt, key) {
		let monitor = this.getEventMonitor(key);
		if (monitor) {
			monitor.call(this, evt);
		}
	}

	getTextInViewMode() {
		return this.getValueFromModel();
	}
	renderInViewMode() {
		var renderer = Envs.getViewModeRenderer(this.getLayout().getTypeAsString());
		if (renderer) {
			return Envs.render.call(this, renderer, {
				model: this.getModel(),
				layout: this.getLayout(),
				orientation: this.getOrientation(),
				viewMode: true,
				ref: 'view-comp'
			});
		}

		var label = this.getTextInViewMode();
		var layout = new CDK.Layout(this.getId(), CDK.$.extend(true, {}, {
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

		return Envs.render.call(this, renderer, {
			model: this.getModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: true,
				ref: 'view-comp'
		});
	}
}

export * from '../model/model'
export * from '../layout/layout'
export {
	React,
	ReactDOM,
	jQuery,
	$,
	classnames,

	Envs,

	NComponent
}