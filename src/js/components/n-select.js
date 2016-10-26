import {
	React, 
	ReactDOM, 
	$, 
	classnames, 
	Envs, 
	Model, 
	NComponent, 
	NCodeTableComponent,
	NDropdownComponent} from './n-component'
import {NIcon} from './n-icon'
import {NList} from './n-list'

const NIconRenderer = (ParentClass) => class extends ParentClass {
	renderIcon(options) {
		return this.renderInternalComponent({
			comp: {
				type: Envs.COMPONENT_TYPES.ICON,
				icon: options.icon
			},
			styles: {
				comp: options.style
			},
			evt: {
				click: options.click
			}
		}, {
			ref: options.ref
		});
	}
}

class NSelect extends NIconRenderer(NCodeTableComponent(NDropdownComponent(NComponent))) {
	renderDropdown() {
		let layout = Envs.deepMergeTo({}, {
			comp: {
				type: Envs.COMPONENT_TYPES.LIST,
				noWrap: false
			}
		}, this.getDropdownLayout(), {
			comp: {
				checkable: true,
				codes: this.getCodeTable(),
				multiple: this.isMultiple()
			},
			evt: {
				itemCheckChange: this.onItemCheckChanged
			}
		});
		if (!layout.styles) {
			layout.styles = {};
		}
		if (!layout.styles.comp) {
			layout.styles.comp = 'n-dropdown';
		} else {
			layout.styles.comp += ' n-dropdown';
		}

		return this.renderInternalComponent(layout, {
			ref: 'dropdown'
		});
	}
	renderCalendarIcon() {
		return (<div className='n-input-addon'>
			{this.renderIcon({
				icon: 'close',
				click: this.onClearIconClicked,
				ref: 'clear-btn'
			})}
			{this.renderIcon({
				icon: 'caret-down',
				click: this.onDropdownIconClicked,
				ref: 'dropdown-btn'
			})}
		</div>);
	}
	renderText() {
	}
	renderSelectedItem(value, itemIndex) {
		let item = this.getCodeTable().getItem(value);
		return (<li className='n-select-item'
					key={itemIndex}>
			<span className='n-select-item-text'>{item.text}</span>
			{this.renderIcon({
				icon: 'close',
				click: this.onItemClearIconClicked.bind(this, value),
				style: 'n-select-item-remove-icon'
			})}
		</li>);
	}
	renderSelectedItems() {
		let value = this.getValueFromModel();
		if (value == null || value.length == 0) {
			let placeholder = this.getPlaceholder();
			return (<div className='n-select-items'>
				<span className='n-select-placeholder-text'>
					{placeholder ? placeholder : '\u00a0'}
				</span>
			</div>);
		}
		if (this.isMultiple()) {
			return (<ul className='n-select-items'>
				{value.map((value, index) => {
					return this.renderSelectedItem(value, index);
				})}
			</ul>);
		} else {
			return (<div className='n-select-items'>
				<span className='n-select-item-text'>
					{value == null ? '\u00a0': this.getCodeTable().getText(value)}
				</span>
			</div>);
		}
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle());
		return (<div className={className}
					 tabIndex={this.getTabIndex()}
					 onFocus={this.onComponentFocused}
					 onBlur={this.onComponentBlurred}
					 onClick={this.onComponentClicked}
					 onKeyUp={this.onComponentKeyUp}
					 ref='me'>
			{this.renderSelectedItems()}
			{this.renderCalendarIcon()}
			{this.renderDropdown()}
			{this.renderNormalLine()}
			{this.renderFocusLine()}
		</div>);
	}
	getComponentClassName() {
		return 'n-select';
	}
	getPlaceholder() {
		return this.getLayoutOptionValue('placeholder', Envs.SELECT_PLACEHOLDER);
	}
	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
	}
	getDropdownLayout() {
		return this.getLayoutOptionValue('dropdown', {});
	}
	isFilterable() {
		return this.getLayoutOptionValue('filter', false);
	}
	getFilterPlaceHolder() {
		return this.getLayoutOptionValue('filterPlaceholder');
	}
	isMultiple() {
		return this.getLayoutOptionValue('multiple', false);
	}
	getValueFromModel() {
		return this.isMultiple() ? 
					this.wrapToArray(super.getValueFromModel()) : 
					super.getValueFromModel();
	}

	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
	}
	onComponentClicked = (evt) => {
		if (evt.isDefaultPrevented()) {
			return;
		}
		evt.preventDefault();
		this.showDropdown();
	}
	onComponentUpArrowKeyUp(evt) {
		evt.preventDefault();
		this.showDropdown();
	}
	onComponentKeyUp = (evt) => {
		if (evt.keyCode === 40) {
			this.onComponentUpArrowKeyUp(evt);
		}
	}
	onItemClearIconClicked(value, evt) {
		evt.preventDefault();
		let values = this.getValueFromModel();
		let index = values.findIndex((v) => {
			return value == v;
		});
		if (index != -1) {
			let newValues = values.slice(0);
			let removedValues = newValues.splice(index, 1);
			this.setValueToModel(newValues);
			this.fireEventToMonitor($.Event('itemCheckChange', {
				target: ReactDOM.findDOMNode(this.refs.me),
				ndata: {
					items: removedValues.map((value) => {
						return this.getCodeTable().getItem(value);
					}),
					checked: false
				}
			}));
		}
	}
	onClearIconClicked = (evt) => {
		evt.preventDefault();
		if (this.isEnabled()) {
			evt.preventDefault();
			this.setValueToModel(null);
			this.showDropdown();
		}
		$(ReactDOM.findDOMNode(this.refs.txt)).focus();
	}
	onDropdownIconClicked = (evt) => {
		if (this.isEnabled() && !evt.isDefaultPrevented()) {
			evt.preventDefault();
			this.showDropdown();
		}
	}
	onItemCheckChanged = (evt) => {
		this.forceUpdate(() => {
			this.fireEventToMonitor($.Event('itemCheckChange', {
				target: ReactDOM.findDOMNode(this.refs.me),
				ndata: {
					items: this.wrapToArray(evt.ndata.item || evt.ndata.items),
					checked: evt.ndata.checked
				}
			}));
		});
	}
}

Envs.COMPONENT_TYPES.SELECT = {type: 'n-select', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.SELECT.type, function (options) {
	return <NSelect {...options} />;
});

export {NSelect}
export * from './n-component'