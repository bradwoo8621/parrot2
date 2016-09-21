import * as CDK from './n-component'

let {React, ReactDOM, $, classnames, Envs} = CDK;

class NText extends CDK.NComponent {
	// renderer
	renderText() {
		return (<input type={this.getInputKind()}
		               className='form-control'
		               disabled={!this.isEnabled()}
		               placeholder={this.getPlaceholder()}

		               onKeyPress={this.onComponentKeyPressed}
		               onChange={this.onComponentChanged}
		               onFocus={this.onComponentFocused}
		               onBlur={this.onComponentBlurred}
		               {...this.wrapMonitorsToDOM(this.getEventMonitorsBut('keyPress', 'change', 'focus', 'blur'))}

		               ref='txt'/>);
	}
	render() {
		if (this.isViewMode()) {
			return this.renderInViewMode();
		}

		return (<div className={this.getComponentStyle()}>
			{this.renderText()}
		</div>);
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
		this.fireEventMonitor(evt, 'keyPress');
	}
	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();

		// when focus, show the unformatted value
		let value = this.getValueFromModel();
		if (value != this.getComponent().val()) {
			// might be formatted or something else, however not same
			this.getComponent().val(value);
		}

		this.fireEventMonitor(evt, 'focus');
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();

		let text = this.getComponentText();
		if (text) {
			let value = this.getValueFromModel();
			if (text != value) {
				this.setValueToModel(text);
				this.getComponent().val(this.formatValueFromText(text));
			}
		} else {
			this.setValueToModel(null);
		}
		this.fireEventMonitor(evt, 'blur');
	}

	// others
	formatValueFromText(value) {
		let formatter = this.getTextFormatter();
		if (formatter && formatter.display) {
			return formatter.display.call(this, value);
		} else {
			return value;
		}
	}
	parseTextToValue(text) {
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

Envs.setRenderer(Envs.COMPONENT_TYPES.TEXT.type, function (options) {
	return <NText {...options} />;
});

export {NText}
export * from './n-component'