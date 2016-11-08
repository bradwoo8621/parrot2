import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
let $ = jQuery;
import {Envs} from '../envs'
import {Model} from '../model/model'
import {NComponent, NCodeTableComponent} from './n-component'

class NRadio extends NCodeTableComponent(NComponent) {
	renderText(item) {
		return (<span className='n-radio-text n-control'>
			{item.text}
		</span>);
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
	renderInNormal() {
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
		if (!this.isEnabled()) {
			return;
		}
		evt.preventDefault();
		this.setValueToModel(item.id);
		let target = $(ReactDOM.findDOMNode(evt.target));
		if (target.hasClass('n-radio')) {
			target.focus();
		} else {
			target.closest('.n-radio').focus();
		}
	}
	onComponentKeyPressed(item, evt) {
		if (!this.isEnabled()) {
			return;
		}
		if (evt.charCode === 32 && item.id != this.getValueFromModel()) {
			// space bar
			evt.preventDefault();
			this.setValueToModel(item.id);
		}
	}

	isChecked(item) {
		return this.getValueFromModel() == item.id;
	}
}

class NRadioButton extends NCodeTableComponent(NComponent) {
	renderCodeItem(item, itemIndex) {
		let checked = this.isChecked(item);
		let layout = {
			label: item.text,
			comp: {
				type: Envs.COMPONENT_TYPES.BUTTON,
				style: this.getButtonStyle(),
				enabled: this.isEnabled()
			},
			evt: {
				click: this.onItemClicked.bind(this, item, itemIndex)
			}
		};
		if (checked) {
			let checkedStyle = this.getCheckedStyle();
			if (checkedStyle) {
				layout.comp.style = checkedStyle;
			}
			layout.styles = {comp: 'n-checked'};
		}
		if (item.icon) {
			layout.comp.leftIcon = {
				comp: {
					type: Envs.COMPONENT_TYPES.ICON,
					icon: item.icon
				}
			};
		}
		return this.renderInternalComponent(layout, {
			key: itemIndex
		});
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderCodeItem(item, itemIndex);
			})}
		</div>);
	}
	getComponentClassName() {
		return 'n-radio-button-group';
	}
	getButtonStyle() {
		return this.getLayoutOptionValue('style');
	}
	getCheckedStyle() {
		return this.getLayoutOptionValue('checkedStyle');
	}
	isChecked(item) {
		return this.getValueFromModel() == item.id;
	}
	onItemClicked(item, itemIndex, evt) {
		if (item.id != this.getValueFromModel()) {
			evt.preventDefault();
			this.setValueToModel(item.id);
		}
	}
}

Envs.COMPONENT_TYPES.RADIO = {type: 'n-radio', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.RADIO.type, function (options) {
	return <NRadio {...options} />;
});
Envs.COMPONENT_TYPES.RADIO_BUTTON = {type: 'n-radio-button', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.RADIO_BUTTON.type, function (options) {
	return <NRadioButton {...options} />;
});

export {NRadio, NRadioButton}
