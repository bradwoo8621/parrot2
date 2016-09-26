import {React, ReactDOM, $, classnames, Envs, Model, NComponent, NCodeTableComponent} from './n-component'

class NCheck extends NComponent {
	renderText(location) {
		return (<span className='n-check-text n-control'>
			{this.getLabel()}
		</span>)
	}
	renderTextOnLeft() {
		if (this.isTextOnLeft()) {
			return this.renderText();
		}
	}
	renderTextOnRight() {
		if (!this.isTextOnLeft()) {
			return this.renderText();
		}
	}
	renderCheck() {
		return (<span className='n-check-box n-control'>
			<span className='n-check-box-rect' />
		</span>);
	}
	render() {
		let textOnLeft = this.isTextOnLeft();
		let className = classnames(this.getComponentStyle(), {
			'n-checked': this.isChecked(),
			'n-check-text-left': textOnLeft,
			'n-check-text-right': !textOnLeft
		});
		return (<div className={className}
					 onClick={this.onComponentClicked}
					 tabIndex={this.getTabIndex()}
					 {...this.getDOMMonitors()}
					 ref='me'>
			{this.renderTextOnLeft()}
			{this.renderCheck()}
			{this.renderTextOnRight()}
		</div>);
	}
	getComponentClassName() {
		return 'n-check';
	}

	isTextOnLeft() {
		return this.getLayoutOptionValue('textOnLeft', false);
	}
	isChecked() {
		return this.getValueFromModel();
	}
	getDOMMonitors() {
		return this.wrapMonitorsToDOM(this.getEventMonitorsBut('click'));
	}

	onComponentClicked = (evt) => {
		let value = this.getValueFromModel();
		this.setValueToModel(!value);
		this.fireEventMonitor(evt, 'click');

		$(ReactDOM.findDOMNode(this.refs.me)).focus();
	}
}

class NArrayCheck extends NCodeTableComponent {
	renderCodeItem(item, itemIndex) {
		let layout = {
			label: item.text,
			comp: {
				type: Envs.COMPONENT_TYPES.CHECK,
				textOnLeft: this.isTextOnLeft()
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
	render() {
		let className = classnames(this.getComponentStyle(), {
			'n-array-check-vertical': this.isOnVertical()
		});
		return (<div className={className}
					 {...this.getDOMMonitors()}
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
	getDOMMonitors() {
		return this.wrapMonitorsToDOM(this.getEventMonitors());
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