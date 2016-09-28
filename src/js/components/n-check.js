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

class NArrayCheck extends NCodeTableComponent {
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

Envs.COMPONENT_TYPES.CHECK = {type: 'n-check'};
Envs.setRenderer(Envs.COMPONENT_TYPES.CHECK.type, function (options) {
	return <NCheck {...options} />;
});
Envs.COMPONENT_TYPES.ARRAY_CHECK = {type: 'n-array-check'};
Envs.setRenderer(Envs.COMPONENT_TYPES.ARRAY_CHECK.type, function (options) {
	return <NArrayCheck {...options} />;
});



export {NCheck, NArrayCheck}
export * from './n-component'