import {React, ReactDOM, $, classnames, Envs, NComponent, NAddonComponent} from './n-component'

class NLabel extends NAddonComponent {
	renderText() {
		let className = classnames('n-label-text', {
			clickable: this.isClickable()
		});
		return (<span className={className}
					  ref='lbl'>
			{this.getDisplayText()}
		</span>);
	}
	render() {
		let className = classnames(this.getComponentStyle(), {
			'has-addon': this.hasAddon()
		});
		return (<div className={className}
					 tabIndex={this.getTabIndex()}
					 ref='me'>
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
	getTabIndex() {
		return (this.isClickable() && this.isEnabled()) ? 0 : null;
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


Envs.COMPONENT_TYPES.LABEL = {type: 'n-label'};
Envs.setRenderer(Envs.COMPONENT_TYPES.LABEL.type, function (options) {
	return <NLabel {...options} />;
});


export {NLabel}
export * from './n-component'