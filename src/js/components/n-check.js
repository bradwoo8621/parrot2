import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
import lodash from 'lodash'
let $ = jQuery;
import {Envs} from '../envs'
import {Model} from '../model/model'
import {NComponent, NCodeTableComponent} from './n-component'

class NCheck extends NComponent {
	renderText(label) {
		return (<span className='n-check-text n-control'>
			{label ? label : this.getLabel()}
		</span>)
	}
	renderTextOnLeft(options) {
		if (options.show && options.left) {
			return this.renderText();
		}
	}
	renderTextOnRight(options) {
		if (options.show && !options.left) {
			return this.renderText();
		} else if (!options.show) {
			return this.renderText('\u00a0');
		}
	}
	renderCheck() {
		return (<span className='n-check-box n-control'>
			<span className='n-check-box-rect' />
		</span>);
	}
	renderInNormal() {
		let labelDisplay = this.isLabelDisplay();
		let textOnLeft = this.isTextOnLeft();
		let className = classnames(this.getComponentStyle(), {
			'n-checked': this.isChecked(),
			'n-check-text-left': textOnLeft,
			'n-check-text-right': !textOnLeft,
			'n-check-no-text': !labelDisplay
		});
		return (<div className={className}
					 onClick={this.onComponentClicked}
					 onKeyPress={this.onComponentKeyPressed}
					 tabIndex={this.getTabIndex()}
					 ref='me'>
			{this.renderTextOnLeft({left: textOnLeft, show: labelDisplay})}
			{this.renderCheck()}
			{this.renderTextOnRight({left: textOnLeft, show: labelDisplay})}
		</div>);
	}
	getComponentClassName() {
		return 'n-check';
	}

	isLabelDisplay() {
		return this.getLayoutOptionValue('labelDisplay', false);
	}
	isTextOnLeft() {
		return this.getLayoutOptionValue('textOnLeft', false);
	}
	isChecked() {
		return this.getValueFromModel();
	}

	onComponentClicked = (evt) => {
		if (!this.isEnabled()) {
			return;
		}
		evt.preventDefault();
		let value = this.getValueFromModel();
		this.setValueToModel(!value);

		this.$me().focus();
	}
	onComponentKeyPressed = (evt) => {
		if (!this.isEnabled()) {
			return;
		}
		if (evt.charCode === 32) {
			evt.preventDefault();
			let value = this.getValueFromModel();
			this.setValueToModel(!value);
		}
	}
}

class NArrayCheck extends NCodeTableComponent(NComponent) {
	renderCodeItem(item, itemIndex) {
		let layout = {
			label: item.text,
			comp: {
				type: Envs.COMPONENT_TYPES.CHECK_NL,
				textOnLeft: this.isTextOnLeft(),
				labelDisplay: true,
				enabled: this.isEnabled()
			}
		};
		let values = this.getValueFromModel();
		let id = this.getDataId();
		let data = {};
		data[id] = values.indexOf(item.id) != -1;
		let model = new Model(data);
		model.addPostChangeListener(id, this.onItemCheckChanged.bind(this, item));
		return this.renderInternalComponent(layout, {
			key: itemIndex,
			model: model
		});
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle(), {
			'n-array-check-vertical': this.isOnVertical()
		});
		return (<div className={className}
					 ref='me'>
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderCodeItem(item, itemIndex);
			})}
		</div>);
	}

	getComponentClassName() {
		return 'n-array-check';
	}
	isTextOnLeft() {
		return this.getLayoutOptionValue('textOnLeft', false);
	}
	isOnVertical() {
		return this.getLayoutOptionValue('vertical', false);
	}

	onItemCheckChanged(item, evt) {
		let id = item.id;
		let oldValues = this.getValueFromModel();
		let newValues = oldValues.slice(0);
		if (evt.new) {
			if (oldValues.indexOf(id) == -1)  {
				newValues.push(id);
			}
			this.setValueToModel(newValues);
		} else {
			let index = oldValues.indexOf(id);
			if (index != -1) {
				newValues.splice(index, 1);
			}
			this.setValueToModel(newValues);
		}
	}

	getValueFromModel() {
		let value = super.getValueFromModel();
		return value ? value : [];
	}
}

class NToggle extends NComponent {
	renderInNormal() {
		return (<div className={classnames('n-control', this.getComponentStyle())}
					 onClick={this.onComponentClicked}
					 onKeyUp={this.onComponentKeyUp}
					 tabIndex={this.getTabIndex()}
					 ref='me'>
			<span className={classnames('n-toggle-button', 
										this.getToggleStyle(), 
										{'n-checked': this.isChecked()})} />
			<span className='n-toggle-text n-control'>{'\u00a0'}</span>
		</div>);
	}
	getComponentClassName() {
		return 'n-toggle';
	}
	isChecked() {
		return this.getValueFromModel();
	}
	getToggleStyle() {
		return 'n-toggle-' + this.getLayoutOptionValue('style', 'primary');
	}
	onComponentClicked = (evt) => {
		if (this.isEnabled()) {
			evt.preventDefault();
			let value = this.getValueFromModel();
			this.setValueToModel(!value);
		}

		this.$me().focus();
	}
	onComponentKeyUp = (evt) => {
		if (!this.isEnabled()) {
			return;
		}
		let keycode = evt.keyCode;
		let value = this.getValueFromModel();
		if (keycode === 37) {
			// left
			if (!value) {
				evt.preventDefault();
				this.setValueToModel(true);
			}
		} else if (keycode === 39) {
			// right
			if (value) {
				evt.preventDefault();
				this.setValueToModel(false);
			}
		}
	}
}

Envs.COMPONENT_TYPES.CHECK = {type: 'n-check', label: true, error: true};
Envs.COMPONENT_TYPES.CHECK_NL = {type: 'n-check', label: false, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.CHECK.type, function (options) {
	return <NCheck {...options} />;
});
Envs.COMPONENT_TYPES.ARRAY_CHECK = {type: 'n-array-check', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.ARRAY_CHECK.type, function (options) {
	return <NArrayCheck {...options} />;
});
Envs.COMPONENT_TYPES.TOGGLE = {type: 'n-toggle', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.TOGGLE.type, function (options) {
	return <NToggle {...options} />;
});

export {NCheck, NArrayCheck, NToggle}
