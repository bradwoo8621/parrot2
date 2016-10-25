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
	renderDropdown() {
		let options = {
			model: this.getModel(),
			'n-id': this.getDataId(),
			'n-comp-codes': this.getCodeTable(),
			'n-comp-minHeight': this.getDropdownMinHeight(),
			'n-comp-maxHeight': this.getDropdownMaxHeight(),
			'n-comp-minWidth': this.getDropdownMinWidth(),
			'n-comp-maxWidth': this.getDropdownMaxWidth(),
			'n-comp-checkable': true,
			'n-styles-comp': 'n-dropdown',
			container: this,
			ref: 'dropdown'
		};
		return <NList {...options} />;
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
	getDropdownMinHeight() {
		return this.getLayoutOptionValue('minHeight');
	}
	getDropdownMaxHeight() {
		return this.getLayoutOptionValue('maxHeight', Envs.DROPDOWN_MAX_HEIGHT);
	}
	getDropdownMinWidth() {
		return this.getLayoutOptionValue('minWidth', Envs.DROPDOWN_MIN_WIDTH);
	}
	getDropdownMaxWidth() {
		return this.getLayoutOptionValue('maxWidth');
	}

	onComponentKeyPressed = (evt) => {
		evt.preventDefault();
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
		}
		$(ReactDOM.findDOMNode(this.refs.txt)).focus();
	}
	onDropdownIconClicked = (evt) => {
		if (this.isEnabled() && !evt.isDefaultPrevented()) {
			evt.preventDefault();
			this.showDropdown();
		}
	}
}

Envs.COMPONENT_TYPES.SELECT = {type: 'n-select', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.SELECT.type, function (options) {
	return <NSelect {...options} />;
});

export {NSelect}
export * from './n-component'