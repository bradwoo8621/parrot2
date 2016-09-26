import {React, ReactDOM, $, classnames, Envs, Model, NComponent, NCodeTableComponent} from './n-component'

class NCheck extends NComponent {
	renderText(location) {
		return (<span className={classnames('n-check-text n-control', location)}>
			{this.getLabel()}
		</span>)
	}
	renderTextOnLeft() {
		if (this.isTextOnLeft()) {
			return this.renderText('n-check-text-left');
		}
	}
	renderTextOnRight() {
		if (!this.isTextOnLeft()) {
			return this.renderText('n-check-text-right');
		}
	}
	renderCheck() {
		return (<span className='n-check-box n-control'>
			<span className='n-check-box-rect' />
		</span>);
	}
	render() {
		let className = classnames(this.getComponentStyle(),
								   {'n-checked': this.isChecked()});
		return (<div className={className}
					 onClick={this.onComponentClicked}
					 key='me'>
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

	onComponentClicked = (evt) => {
		let value = this.getValueFromModel();
		this.setValueToModel(!value);
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
		return (<div className={this.getComponentStyle()}>
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
			let index = index;
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