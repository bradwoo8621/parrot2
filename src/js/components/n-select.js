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
			evt: {
				click: options.click
			}
		}, {
			ref: options.ref
		});
	}
}

class NSelect extends NIconRenderer(NCodeTableComponent(NDropdownComponent(NComponent))) {
	postWillUpdate() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	postDidUpdate() {
		this.setValueToText();
		this.getComponent().on('change', this.onComponentChanged);
	}
	postDidMount() {
		this.setValueToText();
		this.getComponent().on('change', this.onComponentChanged);
	}
	postWillUnmount() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	setValueToText() {
		if (this.isMultiple()) {
			return;
		}
		let component = this.getComponent();
		let value = this.getValueFromModel();
		if (value == null) {
			component.val('');
		} else {
			component.val(this.getCodeTable().getText(value));
		}
	}
	renderDropdown() {
		let layout = Envs.deepMergeTo({
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
		return (<input type='text'
					   className='n-control'
					   disabled={!this.isEnabled()}
					   placeholder={this.getPlaceholder()}

					   onKeyPress={this.onComponentKeyPressed}
					   onChange={this.onComponentChanged}
					   onFocus={this.onComponentFocused}
					   onBlur={this.onComponentBlurred}

					   ref='txt'/>);
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle());
		return (<div className={className}
					 ref='me'>
			{this.renderText()}
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
		return this.getLayoutOptionValue('placeholder');
	}
	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
	}
	getDropdownLayout() {
		return this.getLayoutOptionValue('dropdown', {});
	}
	isMultiple() {
		return this.getLayoutOptionValue('multiple', false);
	}
	getValueFromModel() {
		return this.isMultiple() ? 
					this.wrapToArray(super.getValueFromModel()) : 
					super.getValueFromModel();
	}

	onComponentChanged = (evt) => {
		// TODO filter dropdown options according to current text
		this.showDropdown();
	}
	onComponentKeyPressed = (evt) => {
		this.onComponentChanged(evt);
	}
	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
	}
	onClearIconClicked = (evt) => {
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