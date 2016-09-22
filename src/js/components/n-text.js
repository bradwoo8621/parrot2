import {React, ReactDOM, $, classnames, Envs, NComponent, Layout} from './n-component'
import {NIcon, NStackIcon} from './n-icon'

class NText extends NComponent {
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

	// renderer
	renderAddon(addon, addonIndex) {
		// must and only have one key
		let id = Object.keys(addon)[0];
		let layout = new Layout(id, addon[id]);
		return Envs.render(layout.getTypeAsString(), {
			// primary model pass to addon
			model: this.getPrimaryModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: this.isViewMode(),
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
	renderLeftAddons() {
		return this.renderAddons(this.getLeftAddons());
	}
	renderRightAddons() {
		return this.renderAddons(this.getRightAddons());
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
		               {...this.wrapMonitorsToDOM(this.getEventMonitorsBut('keyPress', 'change', 'focus', 'blur'))}

		               ref='txt'/>);
	}
	render() {
		if (this.isViewMode()) {
			return this.renderInViewMode();
		}

		return (<div className={classnames(this.getComponentStyle(), {'has-addon': this.hasAddon()})}>
			{this.renderLeftAddons()}
			{this.renderText()}
			{this.renderRightAddons()}
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
	getLeftAddons() {
		return this.getLayoutOptionValue('leftAddons');
	}
	getRightAddons() {
		return this.getLayoutOptionValue('rightAddons');
	}
	hasAddon() {
		return this.getLeftAddons() || this.getRightAddons();
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
		this.fireEventMonitor(evt, 'blur');
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

Envs.setRenderer(Envs.COMPONENT_TYPES.TEXT.type, function (options) {
	return <NText {...options} />;
});

export {NText, NIcon, NStackIcon}
export * from './n-component'