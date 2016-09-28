import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'

import {Envs, lodash} from '../envs'
import {Model} from '../model/model'
import {Layout} from '../layout/layout'

let $ = jQuery;

class NComponent extends React.Component {
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
		return this.getLayoutOptionValue('usePrimaryModel', false);
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
		delete this.functionList;
	}
	componentDidMount() {
		this.installUnderlyingMonitors({
			pre: this.preDidMount,
			post: this.postDidMount
		});
	}

	// first parameter is a json of pointcut methods
	installUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.internalInstallLifecycleMonitors();
		this.pointcutPostExecutor.apply(this, arguments);
	}
	internalInstallLifecycleMonitors() {
		this.addPostChangeListener(this.bindToThis(this.onModelChanged));
		this.addPostValidateListener(this.bindToThis(this.onModelValidated));
		this.detectMonitors(['enabled', 'visible'], this.forceUpdate);
	}
	uninstallUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.internalUninstallLifecycleMonitors();
		this.pointcutPostExecutor.apply(this, arguments);
	}
	internalUninstallLifecycleMonitors() {
		this.removePostChangeListener(this.bindToThis(this.onModelChanged));
		this.removePostValidateListener(this.bindToThis(this.onModelValidated));
		this.undetectMonitors(['enabled', 'visible'], this.forceUpdate);
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
	addModelListener(listener, funcOnModel) {
		if (listener) {
			funcOnModel.call(this.getModel(), this.getDataId(), listener);
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
			// monitor must be bindToThis
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
	// position can be string or function
	getWidth() {
		return this.wrapOptionValue(this.getPosition().width);
	}
	getColumnIndex() {
		return this.wrapOptionValue(this.getPosition().col);
	}
	getRowIndex() {
		return this.wrapOptionValue(this.getPosition().row);
	}
	getPosition() {
		return this.wrapOptionValue(this.getLayout().getPosition());
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
		return classnames(this.getStyle('cell'), 
						this.getComponentClassName(), {
						  	'n-disabled': !this.isEnabled(),
							'n-view-mode': this.isViewMode()
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
		return this.isEnabled() && this.getEventMonitor('click');
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
	getDOMEventMonitorsOf() {
		let monitors = this.getEventMonitors();
		let needList = Array.prototype.slice.call(arguments, 0);
		if (needList.length == 0) {
			// nothing
			return {};
		}
		return needList.reduce((set, key) => {
			let monitor = monitors[key];
			if (monitor) {
				set[key] = monitors[key];
			}
			return set;
		}, {});
	}
	getDOMEventMonitorsBut() {
		let monitors = this.getEventMonitors();
		let subset = {};
		let filterList = Array.prototype.slice.call(arguments, 0);
		if (filterList.length == 0) {
			// all
			return monitors;
		}
		return Object.keys(monitors).reduce((set, key) => {
			if (filterList.indexOf(key) == -1) {
			let monitor = monitors[key];
				if (monitor) {
					set[key] = monitors[key];
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
			monitor.call(this, evt);
		}
	}

	getTextInViewMode() {
		return this.getValueFromModel();
	}
	render() {
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
	renderInternalComponent(layoutJSON, additionalProps) {
		let layout = new Layout(this.getDataId(), layoutJSON);
		let props = {
			model: this.getPrimaryModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: this.isViewMode()
		};
		if (additionalProps) {
			Object.keys(additionalProps).forEach((key) => {
				props[key] = additionalProps[key];
			});
		}
		return Envs.render(layout.getTypeAsString(), props);
	}
}

class NAddonComponent extends NComponent {
	// renderer
	renderAddon(addon, addonIndex) {
		// must and only have one key
		let layout = new Layout(this.getDataId(), addon);
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

class NDropdownComponent extends NComponent {
	internalInstallLifecycleMonitors() {
		super.internalInstallLifecycleMonitors();
		$(document).on('click', this.bindToThis(this.onDocumentClicked))
				   .on('keyup', this.bindToThis(this.onDocumentKeyUp));
	}
	internalUninstallLifecycleMonitors() {
		super.internalUninstallLifecycleMonitors();
		$(document).off('click', this.bindToThis(this.onDocumentClicked))
				   .off('keyup', this.bindToThis(this.onDocumentKeyUp));
	}
	onDocumentClicked(evt) {
		if (evt.isDefaultPrevented()) {
			return;
		}
		let handler = this.getDocumentClickHandler();
		if (handler) {
			handler.call(this, evt);
		}
	}
	onDocumentKeyUp(evt) {
		if (evt.isDefaultPrevented()) {
			return;
		}
		let handler = null;
		if (evt.keyCode === 27) {
			handler = this.getDocumentEscapePressedHandler();
		}
		if (handler) {
			handler.call(this, evt);
		}
	}
	getDocumentClickHandler() {
		return null;
	}
	getDocumentEscapePressedHandler() {
		return null;
	}

	showPopover() {
		let me = $(ReactDOM.findDOMNode(this.refs.me));
		if (!me.hasClass('n-dropdown-open')) {
			me.addClass('n-dropdown-open');
			this.fireEventToMonitor($.Event('popoverOpen', {target: me[0]}));
		}
	}
	hidePopover() {
		let me = $(ReactDOM.findDOMNode(this.refs.me));
		if (me.hasClass('n-dropdown-open')) {
			me.removeClass('n-dropdown-open');
			this.fireEventToMonitor($.Event('popoverClose', {target: me[0]}));
		}
	}
	togglePopover() {
		let me = $(ReactDOM.findDOMNode(this.refs.me));
		if (!me.hasClass('n-dropdown-open')) {
			this.showPopover();
		} else {
			this.hidePopover();
		}
	}
}

class NCodeTableComponent extends NComponent {
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
			return React.createElement(child.type, lodash.mergeWith({}, {
						model: this.getPrimaryModel(),
						orientation: this.getOrientation(),
						viewMode: this.isViewMode()
					}, 
					propsFromParent ? propsFromParent[child.type.name] : null, 
					child.props, 
					function(objValue, srcValue) {
						if (lodash.isArray(objValue)) {
							if (lodash.isArray(srcValue)) {
								return srcvalue;
							}
						}
					}));
		}
	}
	renderDOMChildren(propsFromParent) {
		return React.Children.map(this.props.children, (child) => {
			return this.renderDOMChild(child, propsFromParent);
		});
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
	mixPropsFromDOMChild(child, newProps) {
		let props = null;
		if (!child) {
			props = {};
		} else {
			props = lodash.assign({}, child.props);
		}
		Object.keys(newProps).forEach(key => {
			if (typeof props[key] === 'undefined') {
				props[key] = newProps[key];
			}
		});
		let standardProps = {
			model: this.getPrimaryModel(),
			orientation: this.getOrientation(),
			viewMode: this.isViewMode()
		};
		Object.keys(standardProps).forEach(key => {
			if (typeof props[key] === 'undefined') {
				props[key] = standardProps[key];
			}
		});
		// console.log(props);
		return props;
	}
	renderChildren() {
		let children = this.getChildren();
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
			return this.renderRow(rows[rowIndex], rowIndex);
		});
	}
	renderRow(row, rowIndex) {
		if (!row) {
			return null;
		}
		let content = Object.keys(row).sort((index1, index2) => {
			return index1 - index2;
		}).map(columnIndex => {
			return this.renderColumn(row[columnIndex]);
		});
		return (<div className='n-row'
					 key={rowIndex}>
			{content}
		</div>);
	}
	renderColumn(column) {
		if (!column) {
			return null;
		}
		return column.map((layout, layoutIndex) => {
			let props = {
				model: this.getPrimaryModel(),
				layout: layout,
				orientation: this.getOrientation(),
				viewMode: this.isViewMode(),
				ref: layout.getId(),
				key: layoutIndex
			};
			// TODO need to wrap into cell
			return Envs.render(layout.getTypeAsString(), props);
		});
	}
	getChildren() {
		return this.getLayoutOptionValue('children');
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
		this.fireEventToMonitor($.Event('expand', ReactDOM.findDOMNode(this.refs.me)));	
	}
	collapse() {
		this.setState({expanded: false});
		this.fireEventToMonitor($.Event('collapse', ReactDOM.findDOMNode(this.refs.me)));	
	}
}

export * from '../model/model'
export * from '../layout/layout'
export * from '../envs'
export {
	React,
	ReactDOM,
	jQuery,
	$,
	classnames,

	NComponent,
	NAddonComponent,
	NDropdownComponent,
	NCodeTableComponent,
	NContainer,
	NCollapsibleContainer
}