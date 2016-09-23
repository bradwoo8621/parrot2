import {React, ReactDOM, $, classnames, Envs, NComponent, NAddonComponent} from './n-component'

class NLabel extends NAddonComponent {
	renderText() {
		return (<span className={classnames('n-label-text', {clickable: this.isClickable()})}
					  {...this.wrapMonitorsToDOM(this.getEventMonitorsOf('click'))}>
			{this.getDisplayText()}
		</span>);
	}
	render() {
		return (<div className={classnames(this.getComponentStyle(), {'has-addon': this.hasAddon()})}
					 tabIndex='-1'
					 onFocus={this.onComponentFocused}
					 onBlur={this.onComponentBlurred}
					 key='me'>
			{this.renderLeftAddons()}
			{this.renderText()}
			{this.renderRightAddons()}
			{this.renderNormalLine()}
			{this.renderFocusLine()}
		</div>);
	}

	getComponentClassName() {
		return 'n-label';
	}
	isTextFromModel() {
		return this.getLayoutOptionValue('textFromModel', true);
	}
	getTextFormatter() {
		return this.getLayoutOptionValue('formatter');
	}
	getTextTransformer() {
		return this.getLayoutOptionValue('transformer');
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
	getDisplayText() {
		return this.isTextFromModel() ? this.formatValue(this.getValueFromModel()) : this.getLabel();
	}

	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
	}
	formatValue(value) {
		let formatter = this.getTextFormatter();
		if (formatter && formatter.display) {
			return formatter.display.call(this, value);
		} else {
			return value;
		}
	}
}


Envs.COMPONENT_TYPES.LABEL = {type: 'n-plain-label'};
Envs.setRenderer(Envs.COMPONENT_TYPES.LABEL.type, function (options) {
	return <NLabel {...options} />;
});


export {NLabel}
export * from './n-component'