import {React, ReactDOM, $, classnames, Envs, NComponent} from './n-component'

class NTextArea extends NComponent {
	// lifecycle
	postDidUpdate() {
		if (this.getComponentText() != this.getValueFromModel()) {
			this.getComponent().val(value);
		}
	}
	postDidMount() {
		this.getComponent().val(this.getValueFromModel());
	}

	renderText() {
		return (<textarea className={classnames('n-control', this.getTextRowsClassName())}
		               disabled={!this.isEnabled()}
		               placeholder={this.getPlaceholder()}
		               rows={this.getTextRows()}

		               onChange={this.onComponentChanged}
		               onFocus={this.onComponentFocused}
		               onBlur={this.onComponentBlurred}

		               ref='txt'/>);
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderText()}
			{this.renderNormalLine()}
			{this.renderFocusLine()}
		</div>);
	}
	isViewModeSameAsNormal() {
		return false;
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

	// data event
	onComponentChanged = (evt) => {
		// compare the formatted text
		let newValue = this.getComponentText();
		let oldValue = this.getValueFromModel();
		if (!this.textEquals(newValue, oldValue)) {
			// evt.preventDefault();
			if (this.state.valueChangeTimeoutId) {
				clearTimeout(this.state.valueChangeTimeoutId);
			}
			this.state.valueChangeTimeoutId = setTimeout(() => {
				delete this.state.valueChangeTimeoutId;
				this.setValueToModel(newValue);
			}, Envs.TEXT_CHANGE_DELAY);
		}
	}

	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
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

Envs.COMPONENT_TYPES.TEXTAREA = {type: 'n-text-area', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.TEXTAREA.type, function (options) {
	return <NTextArea {...options} />;
});

export {NTextArea}
export * from './n-component'