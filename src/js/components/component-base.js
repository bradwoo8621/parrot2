import React from 'react'
import classnames from 'classnames'

// base component, which has model, layout, orientation and viewMode
class BaseComponent extends React.Component {
	state = {}

	getModel() {
		return this.props.model;
	}
	getLayout() {
		return this.props.layout;
	}
	getOrientation() {
		return this.props.orientation;
	}
	isViewMode() {
		return this.props.viewMode;
	}
}

// rich layout
// attch id, dataId, label, position, style
// #getLayoutOptionValue for get other layout option values
class RichLayoutComponent extends BaseComponent {
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
	getComponentStyle() {
		let style = this.wrapOptionValue(this.getStyle('comp'));
		if (this.isNoValueAssigned(style)) {
			return style;
		} else {
			return classnames(style);
		}
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
		if (this.isNoValueAssigned(value)) {
			// disable the undefined value
			return null;
		} else if (typeof value === 'function') {
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
}

// component which contains two model
// additional model is designated by layout
class TwinModelComponent extends RichLayoutComponent {
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
		return super.getModel();
	}
	// default not use primary model
	// when additional model is not designated in layout
	// @getAdditionalModel will returns primary model instead
	isUsingPrimaryModel() {
		return this.getLayoutOptionValue('usePrimaryModel', false);
	}
}

// methods for observer model
class ModelObservedComponent extends TwinModelComponent {
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
}

// methods for react component lifecycle and their pointcuts
class LifecycleComponent extends ModelObservedComponent {
	// initialize state
	state = {}

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

	// monitors
	// first parameter is a json of pointcut methods
	installUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.addPostChangeListener(this.onModelChanged);
		this.pointcutPostExecutor.apply(this, arguments);
	}
	uninstallUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.removePostChangeListener(this.onModelChanged)
		this.pointcutPostExecutor.apply(this, arguments);
	}

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
}

class ComponentBase extends LifecycleComponent {
}

export {
	BaseComponent,
	RichLayoutComponent,
	TwinModelComponent,
	ModelObservedComponent,
	LifecycleComponent,
	ComponentBase,

	React,
	classnames
}