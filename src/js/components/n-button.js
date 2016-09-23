import {React, ReactDOM, $, classnames, Envs, NComponent, Layout} from './n-component'

class NButton extends NComponent {
	renderIcon(icon) {
		let layout = new Layout(this.getDataId(), icon);
		return Envs.render(layout.getTypeAsString(), {
			model: this.getPrimaryModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: this.isViewMode()
		});
	}
	renderLeftIcon() {
		let icon = this.getLeftIcon();
		if (icon) {
			return this.renderIcon(icon);
		}
	}
	renderRightIcon() {
		let icon = this.getRightIcon();
		if (icon) {
			return this.renderIcon(icon);
		}
	}
	renderText() {
		return (<button className='n-control n-button-text clickable'
					  onClick={this.onComponentClicked}>
			{this.renderLeftIcon()}
			{this.getDisplayText()}
			{this.renderRightIcon()}
		</button>);
	}
	render() {
		let className = classnames(this.getComponentStyle(),
								   this.getButtonStyle(),
								   {'n-button-inline': this.isInline()});
		return (<div className={className}>
			{this.renderText()}
		</div>);
	}

	getComponentClassName() {
		return 'n-button';
	}
	getDisplayText() {
		return this.isTextFromModel() ? this.getValueFromModel() : this.getLabel();
	}

	isTextFromModel() {
		return this.getLayoutOptionValue('textFromModel', false);
	}
	getButtonStyle() {
		return 'n-button-' + this.getLayoutOptionValue('style', 'default');
	}
	isInline() {
		return this.getLayoutOptionValue('inline', false);
	}
	getLeftIcon() {
		return this.getLayoutOptionValue('leftIcon');
	}
	getRightIcon() {
		return this.getLayoutOptionValue('rightIcon');
	}

	onComponentClicked = (evt) => {
		this.fireEventMonitor(evt, 'click');
	}
}

Envs.COMPONENT_TYPES.BUTTON = {type: 'n-button'};
Envs.setRenderer(Envs.COMPONENT_TYPES.BUTTON.type, function (options) {
	return <NButton {...options} />;
});

export {NButton}
export * from './n-component'