import {React, ReactDOM, $, classnames, Envs, Model, NComponent, NCodeTableComponent} from './n-component'

class NCheck extends NComponent {
	renderText() {
		return (<span className='n-check-text n-control'>
			{this.getLabel()}
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
		let value = this.getValueFromModel();
		this.setValueToModel(!value);
		this.fireEventToMonitor(evt, 'click');

		$(ReactDOM.findDOMNode(this.refs.me)).focus();
	}
	onComponentKeyPressed = (evt) => {
		if (evt.charCode === 32) {
			let value = this.getValueFromModel();
			this.setValueToModel(!value);
		}
		this.fireEventToMonitor(evt, 'keypress');
	}
}

class NArrayCheck extends NCodeTableComponent(NComponent) {
	renderCodeItem(item, itemIndex) {
		let layout = {
			label: item.text,
			comp: {
				type: Envs.COMPONENT_TYPES.CHECK,
				textOnLeft: this.isTextOnLeft(),
				labelDisplay: true
			}
		};
		let values = this.getValueFromModel();
		let id = this.getDataId();
		let data = {};
		data[id] = values.indexOf(item.id) != -1;
		let model = new Model(data);
		model.addPostChangeListener(id, this.onItemClicked.bind(this, item));
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

	onItemClicked(item, evt) {
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
		let value = this.getValueFromModel();
		this.setValueToModel(!value);
		this.fireEventToMonitor(evt, 'click');

		$(ReactDOM.findDOMNode(this.refs.me)).focus();
	}
	onComponentKeyUp = (evt) => {
		let keycode = evt.keyCode;
		let value = this.getValueFromModel();
		if (keycode === 37) {
			// left
			if (!value) {
				this.setValueToModel(true);
				evt.preventDefault();
			}
		} else if (keycode === 39) {
			// right
			if (value) {
				this.setValueToModel(false);
				evt.preventDefault();
			}
		}
		this.fireEventToMonitor(evt);
	}
}

Envs.COMPONENT_TYPES.CHECK = {type: 'n-check'};
Envs.setRenderer(Envs.COMPONENT_TYPES.CHECK.type, function (options) {
	return <NCheck {...options} />;
});
Envs.COMPONENT_TYPES.ARRAY_CHECK = {type: 'n-array-check'};
Envs.setRenderer(Envs.COMPONENT_TYPES.ARRAY_CHECK.type, function (options) {
	return <NArrayCheck {...options} />;
});
Envs.COMPONENT_TYPES.TOGGLE = {type: 'n-toggle'};
Envs.setRenderer(Envs.COMPONENT_TYPES.TOGGLE.type, function (options) {
	return <NToggle {...options} />;
});

export {NCheck, NArrayCheck, NToggle}
export * from './n-component'