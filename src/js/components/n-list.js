import {
	React, 
	ReactDOM, 
	$, 
	lodash,
	classnames, 
	Envs, 
	Model, 
	Layout,
	NComponent, 
	NCodeTableComponent} from './n-component'
import {NIcon} from './n-icon'
import {NCheck} from './n-check'

class NList extends NCodeTableComponent(NComponent) {
	buildLayout(props) {
		super.buildLayout(props);
		this.state.nodeCheckable = this.isItemCheckable();
	}
	renderItemIcon(item) {
		if (!this.isItemIconable()) {
			return null;
		}
		let icon = item.icon;
		if (!icon) {
			icon = this.getItemIcon();
			if (icon) {
				icon = icon.call(this, item);
			}
		}
		let layout = {
			comp: {
				type: Envs.COMPONENT_TYPES.ICON,
				icon: icon
			},
			styles: {
				comp: '!n-list-item-icon'
			}
		};
		return this.renderInternalComponent(layout);
	}
	renderItemCheck(item) {
		let model = new Model({value: this.isItemChecked(item)})
							.addPostChangeListener('value', (evt) => {
								this.onItemCheckChanged(item, evt.new);
							});
		let layout = new Layout('value', {
			comp: {
				type: Envs.COMPONENT_TYPES.CHECK
			},
			evt: {
				'jq.keydown': this.onItemKeyDown
			}
		});
		return <NCheck model={model}
					   layout={layout} />;
	}
	renderItem(item, itemIndex) {
		let checkable = this.isItemCanCheck(item);
		return (<div className='n-list-item'
					 tabIndex='0'
					 data-item-id={item.id}
					 onClick={this.onItemClicked}
					 onKeyDown={this.onItemKeyDown}
					 onMouseEnter={this.onItemMouseEntered}
					 onMouseLeave={this.onItemMouseLeft}
					 key={itemIndex}>
			{this.renderItemIcon(item)}
			{checkable ? this.renderItemCheck(item) : null}
			<span className='n-list-item-text'>
				{item.text}
			</span>
		</div>);
	}
	renderInNormal() {
		let styles = {
			minHeight: this.getMinHeight(),
			maxHeight: this.getMaxHeight(),
			minWidth: this.getMinWidth(),
			maxWidth: this.getMaxWidth()
		};
		let className = classnames(this.getComponentStyle(), {
			'n-list-nowrap': this.isNoWrap()
		});
		return (<div className={className}
					 style={styles}
					 ref='me'>
			<div className='n-list-background'
				 ref='background' />
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderItem(item, itemIndex);
			})}
		</div>);
	}
	getComponentClassName() {
		return 'n-list';
	}
	getMinHeight() {
		return this.getLayoutOptionValue('minHeight');
	}
	getMaxHeight() {
		return this.getLayoutOptionValue('maxHeight', Envs.LIST_MAX_HEIGHT);
	}
	getMinWidth() {
		return this.getLayoutOptionValue('minWidth');
	}
	getMaxWidth() {
		return this.getLayoutOptionValue('maxWidth');
	}
	isNoWrap() {
		return this.getLayoutOptionValue('noWrap', true);
	}
	isItemIconable() {
		return this.getLayoutOptionValue('iconable', false);
	}
	getItemIcon() {
		return this.getLayoutOptionValue('itemIcon', null, true);
	}
	isItemCheckable() {
		return this.getLayoutOptionValue('checkable', false);
	}
	isMultipleCheck() {
		return this.getLayoutOptionValue('multiple', false);
	}
	isItemCanCheck(item) {
		if (!this.state.nodeCheckable) {
			return false;
		}
		let canCheck = this.getLayoutOptionValue('canCheck', null, true);
		return canCheck ? canCheck.call(this, item) : true;
	}

	getValueFromModel() {
		if (this.isMultipleCheck()) {
			let values = super.getValueFromModel();
			return values ? values : [];
		} else {
			return super.getValueFromModel();
		}
	}
	isItemChecked(item) {
		if (this.isMultipleCheck()) {
			return this.getValueFromModel().findIndex((value) => {
				return value == item.id;
			}) !== -1;
		} else {
			return this.getValueFromModel() == item.id;
		}
	}

	focusItem(itemDOM) {
		itemDOM.focus();
	}

	onItemCheckChanged(item, checked) {
		this.handleEventResult(this.shouldItemCheckChanged(item, checked), {
			handler: () => {
				// anyway, wrap to array and clone it
				let values = this.getValueFromModel();
				values = values == null ? [] : this.wrapToArray(values);
				values = values.slice(0);
				// find index
				let index = values.findIndex((value) => {
					return value == item.id;
				});
				if (checked) {
					if (index === -1) {
						if (this.isMultipleCheck()) {
							values.push(item.id);
							this.setValueToModel(values);
						} else {
							this.setValueToModel(item.id);
						}
						this.itemCheckChanged(item, true);
					}
				} else {
					if (index !== -1) {
						if (this.isMultipleCheck()) {
							values.splice(index, 1);
							this.setValueToModel(values);
						} else {
							this.setValueToModel(null);
						}
						this.itemCheckChanged(item, false);
					}
				}
			}
		});
	}
	shouldItemCheckChanged(item, checked) {
		return this.fireEventToMonitor($.Event('shouldItemCheckChange'), {
			target: ReactDOM.findDOMNode(this.refs.me),
			ndata: {
				item: item,
				checked: checked
			}
		});
	}
	itemCheckChanged(item, checked) {
		this.fireEventToMonitor($.Event('itemCheckChange', {
			target: ReactDOM.findDOMNode(this.refs.me),
			ndata: {
				item: item,
				checked: checked
			}
		}));
	}
	onItemClicked = (evt) => {
		this.onItemSpaceKeyDown(evt);
	}
	onItemSpaceKeyDown(evt) {
		if (evt.isDefaultPrevented()) {
			return;
		}
		let target = $(evt.target).closest('.n-list-item');
		let id = target.attr('data-item-id');
		let item = this.getCodeTable().getItem(id);
		if (this.isItemCanCheck()) {
			evt.preventDefault();
			this.onItemCheckChanged(item, !this.isItemChecked(item));
		}
	}
	onItemUpArrowKeyDown(evt) {
		let target = $(evt.target);
		let prev = target.prev('.n-list-item');
		if (prev.length !== 0) {
			evt.preventDefault();
			this.focusItem(prev);
		}
	}
	onItemDownArrowKeyDown(evt) {
		let target = $(evt.target);
		let next = target.next('.n-list-item');
		if (next.length !== 0) {
			evt.preventDefault();
			this.focusItem(next);
		}
	}
	onItemKeyDown = (evt) => {
		let keycode = evt.keyCode;
		switch(keycode) {
			case 32: 
				this.onItemSpaceKeyDown(evt);
				break;
			case 38:
				this.onItemUpArrowKeyDown(evt);
				break;
			case 40:
				this.onItemDownArrowKeyDown(evt);
				break;
		}
	}
	onItemMouseEntered = (evt) => {
		let bg = $(ReactDOM.findDOMNode(this.refs.background));
		let target = $(evt.target);
		let targetOffset = target.offset();
		let container = $(ReactDOM.findDOMNode(this.refs.me));
		let containerOffset = container.offset();
		bg.css({
			display: 'block',
			left: container.scrollLeft(),
			top: targetOffset.top - containerOffset.top + container.scrollTop() - 1,
			height: target.outerHeight()
		});
	}
	onItemMouseLeft = (evt) => {
		let bg = $(ReactDOM.findDOMNode(this.refs.background));
		bg.css({
			display: 'none'
		});
	}
}

Envs.COMPONENT_TYPES.LIST = {type: 'n-list'};
Envs.setRenderer(Envs.COMPONENT_TYPES.LIST.type, function (options) {
	return <NList {...options} />;
});

export {NList}
export * from './n-component'