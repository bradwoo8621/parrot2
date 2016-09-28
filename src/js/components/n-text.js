import {React, ReactDOM, $, classnames, Envs, NComponent, NAddonComponent} from './n-component'

class NText extends NAddonComponent {
	// lifecycle
	postWillUpdate() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	postDidUpdate() {
		let value = this.getValueFromModel();
		if (!$(ReactDOM.findDOMNode(this.refs.focusLine)).hasClass('focus')) {
			value = this.formatValue(value);
		}
		if (this.getComponentText() != value) {
			this.getComponent().val(value);
		}
		this.getComponent().on('change', this.onComponentChanged);
	}
	postDidMount() {
		this.getComponent().val(this.formatValue(this.getValueFromModel()));
		this.getComponent().on('change', this.onComponentChanged);
	}
	postWillUnmount() {
		this.getComponent().off('change', this.onComponentChanged);
	}

	renderText() {
		return (<input type={this.getInputKind()}
		               className='n-control'
		               disabled={!this.isEnabled()}
		               placeholder={this.getPlaceholder()}

		               onKeyPress={this.onComponentKeyPressed}
		               onChange={this.onComponentChanged}
		               onFocus={this.onComponentFocused}
		               onBlur={this.onComponentBlurred}

		               ref='txt'/>);
	}
	render() {
		if (this.isViewMode()) {
			return this.renderInViewMode();
		}

		let className = classnames(this.getComponentStyle(), {
			'has-addon': this.hasAddon()
		});
		return (<div className={className}
					 ref='me'>
			{this.renderLead()}
			{this.renderText()}
			{this.renderTail()}
			{this.renderNormalLine()}
			{this.renderFocusLine()}
		</div>);
	}

	getValueFromModel() {
		var value = super.getValueFromModel();
		var transformer = this.getTextTransformer();
		if (transformer && transformer.display) {
			return transformer.display.call(this, value);
		} else {
			return value;
		}
	}
	setValueToModel(value) {
		var transformer = this.getTextTransformer();
		if (transformer && transformer.model) {
			super.setValueToModel(transformer.model.call(this, value));
		} else {
			super.setValueToModel(value);
		}
	}

	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
	}
	// style
	getComponentClassName() {
		return 'n-text';
	}
	// option value
	getInputKind() {
		return this.getLayoutOptionValue('kind', 'text');
	}
	getPlaceholder() {
		return this.getLayoutOptionValue('placeholder');
	}
	getTextFormatter() {
		return this.getLayoutOptionValue('formatter');
	}
	getTextTransformer() {
		return this.getLayoutOptionValue('transformer');
	}
	isAutoTrim() {
		return this.getLayoutOptionValue('trim', false);
	}
	getComponentText() {
		let value = this.getComponent().val();
		return this.isAutoTrim() ? value.trim() : value;
	}

	// data event
	onComponentChanged = (evt) => {
		// compare the formatted text
		let newValue = this.getComponentText();
		let oldValue = this.getValueFromModel();
		if (!this.textEquals(newValue, oldValue)) {
			this.setValueToModel(newValue);
		}
	}

	// dom event
	onComponentKeyPressed = (evt) => {
		this.onComponentChanged(evt);
		this.fireEventToMonitor(evt, 'keypress');
	}
	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();

		// when focus, show the unformatted value
		let value = this.getValueFromModel();
		if (value != this.getComponent().val()) {
			// might be formatted or something else, however not same
			this.getComponent().val(value);
		}

		this.fireEventToMonitor(evt, 'focus');
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();

		let text = this.formatValue(this.getComponentText());
		if (text) {
			let value = this.formatValue(this.getValueFromModel());
			if (text != value) {
				// this moment, value of component is not formatted
				this.setValueToModel(text);
			}
			this.getComponent().val(this.formatValue(text));
		} else {
			this.setValueToModel(null);
		}
		this.fireEventToMonitor(evt, 'blur');
	}

	// others
	formatValue(value) {
		let formatter = this.getTextFormatter();
		if (formatter && formatter.display) {
			return formatter.display.call(this, value);
		} else {
			return value;
		}
	}
	parseText(text) {
		let formatter = this.getTextFormatter();
		if (formatter && formatter.model) {
			return formatter.model.call(this, text);
		} else {
			return text;
		}
	}
	textEquals(v1, v2) {
		let hasText1 = !this.isNoValueAssigned(v1);
		let hasText2 = !this.isNoValueAssigned(v2);
		if (hasText1) {
			let strV1 = v1 + '';
			let strV2 = v2 + '';
			return strV1 === strV2;
		} else {
			return !hasText2
		}
	}
}

Envs.COMPONENT_TYPES.TEXT = {type: 'n-text'};
Envs.setRenderer(Envs.COMPONENT_TYPES.TEXT.type, function (options) {
	return <NText {...options} />;
});

export {NText}
export * from './n-component'