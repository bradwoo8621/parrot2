import * as CDK from './base-component'
import classnames from 'classnames'

// rich layout
// attch id, dataId, label, position, style
// #getLayoutOptionValue for get other layout option values
class RichLayoutComponent extends CDK.BaseComponent {
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

export * from './base-component'
export {RichLayoutComponent}
export {classnames}
