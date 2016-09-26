import {React, ReactDOM, $, classnames, Envs, NComponent} from './n-component'

class NTextArea extends NComponent {
	// lifecycle
	postWillUpdate() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	postDidUpdate() {
		if (this.getComponentText() != this.getValueFromModel()) {
			this.getComponent().val(value);
		}
		this.getComponent().on('change', this.onComponentChanged);
	}
	postDidMount() {
		this.getComponent().val(this.getValueFromModel());
		this.getComponent().on('change', this.onComponentChanged);
	}
	postWillUnmount() {
		this.getComponent().off('change', this.onComponentChanged);
	}

	renderText() {
		return (<textarea className={classnames('n-control', this.getTextRowsClassName())}
		               disabled={!this.isEnabled()}
		               placeholder={this.getPlaceholder()}
		               rows={this.getTextRows()}

		               onKeyPress={this.onComponentKeyPressed}
		               onChange={this.onComponentChanged}
		               onFocus={this.onComponentFocused}
		               onBlur={this.onComponentBlurred}
		               {...this.getDOMMonitors()}

		               ref='txt'/>);
	}
	render() {
		if (this.isViewMode()) {
			return this.renderInViewMode();
		}

		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderText()}
			{this.renderNormalLine()}
			{this.renderFocusLine()}
		</div>);
	}

	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
	}
	// style
	getComponentClassName() {
		return 'n-text-area';
	}
	getTextRowsClassName() {
		return 'n-rows-' + this.getTextRows();
	}
	// option value
	getPlaceholder() {
		return this.getLayoutOptionValue('placeholder');
	}
	getTextRows() {
		return this.getLayoutOptionValue('rows', 2);
	}
	isAutoTrim() {
		return this.getLayoutOptionValue('trim', false);
	}
	getComponentText() {
		let value = this.getComponent().val();
		return this.isAutoTrim() ? value.trim() : value;
	}
	getDOMMonitors() {
		return this.wrapMonitorsToDOM(this.getEventMonitorsBut('keypress', 'change', 'focus', 'blur'));
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
		this.fireEventMonitor(evt, 'keypress');
	}
	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
		this.fireEventMonitor(evt, 'focus');
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
		this.fireEventMonitor(evt, 'blur');
	}

	// others
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

Envs.COMPONENT_TYPES.TEXTAREA = {type: 'n-text-area'};
Envs.setRenderer(Envs.COMPONENT_TYPES.TEXTAREA.type, function (options) {
	return <NTextArea {...options} />;
});

export {NTextArea}
export * from './n-component'