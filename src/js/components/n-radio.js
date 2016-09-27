import {React, ReactDOM, $, classnames, Envs, Model, NComponent, NCodeTableComponent} from './n-component'

class NRadio extends NCodeTableComponent {
	renderText(item) {
		return (<span className='n-radio-text n-control'>
			{item.text}
		</span>)
	}
	renderTextOnLeft(options) {
		if (options.left) {
			return this.renderText(options.item);
		}
	}
	renderTextOnRight(options) {
		if (!options.left) {
			return this.renderText(options.item);
		}
	}
	renderRadioButton() {
		return (<span className='n-radio-box n-control'>
			<span className='n-radio-box-rect' />
		</span>);
	}
	renderCodeItem(item, itemIndex) {
		let textOnLeft = this.isTextOnLeft();
		let className = classnames('n-radio', {
			'n-checked': this.isChecked(item),
			'n-radio-text-left': textOnLeft,
			'n-radio-text-right': !textOnLeft
		});
		return (<div className={className}
					 onClick={this.onComponentClicked.bind(this, item)}
					 onKeyPress={this.onComponentKeyPressed.bind(this, item)}
					 tabIndex={this.getTabIndex()}
					 key={itemIndex}>
			{this.renderTextOnLeft({left: textOnLeft, item: item})}
			{this.renderRadioButton()}
			{this.renderTextOnRight({left: textOnLeft, item: item})}
		</div>);
	}
	render() {
		let className = classnames(this.getComponentStyle(), {
			'n-radio-vertical': this.isOnVertical()
		});
		return (<div className={className}
					 ref='me'>
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderCodeItem(item, itemIndex);
			})}
		</div>);
	}

	getComponentClassName() {
		return 'n-radio-group';
	}
	isTextOnLeft() {
		return this.getLayoutOptionValue('textOnLeft', false);
	}
	isOnVertical() {
		return this.getLayoutOptionValue('vertical', false);
	}

	onComponentClicked(item, evt) {
		this.setValueToModel(item.id);
		this.fireEventToMonitor(evt, 'click');
		let target = $(ReactDOM.findDOMNode(evt.target));
		if (target.hasClass('n-radio')) {
			target.focus();
		} else {
			target.closest('.n-radio').focus();
		}
	}
	onComponentKeyPressed(item, evt) {
		if (evt.charCode === 32) {
			// space bar
			this.setValueToModel(item.id);
			this.fireEventToMonitor(evt, 'keypress');
		}
	}

	isChecked(item) {
		return this.getValueFromModel() == item.id;
	}
}

Envs.COMPONENT_TYPES.RADIO = {type: 'n-radio'};
Envs.setRenderer(Envs.COMPONENT_TYPES.RADIO.type, function (options) {
	return <NRadio {...options} />;
});

export {NRadio}
export * from './n-component'