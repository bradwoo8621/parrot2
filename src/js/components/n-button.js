import {React, ReactDOM, $, classnames, Envs, NDropdownComponent, Layout} from './n-component'

class NButton extends NDropdownComponent {
	renderIcon(icon) {
		return this.renderInternalComponent(icon);
	}
	renderLeftIcon() {
		let icon = this.getLeftIcon();
		if (icon) {
			return this.renderIcon(icon);
		}
	}
	renderRightIcon() {
		let icon = this.getRightIcon();
		if (icon) {
			return this.renderIcon(icon);
		}
	}
	renderDropdownIcon(dropdown) {
		if (dropdown.has && !dropdown.separated) {
			return (<i className='fa fa-fw fa-caret-down n-button-dropdown-icon'
					   onClick={this.onDropdownIconClicked} />);
		} else {
			return null;
		}
	}
	renderText(dropdown) {
		return (<button className={classnames('n-control n-btn clickable', this.getButtonStyle())}
						onClick={this.onComponentClicked}>
			{this.renderLeftIcon()}
			{this.getDisplayText()}
			{this.renderRightIcon()}
			{this.renderDropdownIcon(dropdown)}
		</button>);
	}
	renderSeparatedDropdownIcon(dropdown) {
		if (dropdown.has && dropdown.separated) {
			let className = classnames('n-control n-btn n-button-dropdown-icon clickable',
									   this.getButtonStyle());
			return (<button className={className}
							onClick={this.onDropdownIconClicked}>
				<i className='fa fa-fw fa-caret-down' />
			</button>);
		} else {
			return null;
		}
	}
	renderDropdownItem(item, itemIndex) {
		return (<li key={itemIndex}>
			{this.renderInternalComponent(item)}
		</li>);
	}
	renderDropdownItems(dropdown) {
		if (!dropdown.has) {
			return null;
		}
		return (<ul className='n-button-dropdown text-left'>
			{dropdown.items.map((item, itemIndex) => {
				return this.renderDropdownItem(item, itemIndex);
			})}
		</ul>);
	}
	renderInNormal() {
		let dropdown = this.prepareDropdownItems();

		let className = classnames(this.getComponentStyle(), {
			'n-button-group': dropdown.has && dropdown.separated
		});
		return (<div className={className}
					 ref='me'>
			{this.renderText(dropdown)}
			{this.renderSeparatedDropdownIcon(dropdown)}
			{this.renderDropdownItems(dropdown)}
		</div>);
	}

	getComponentClassName() {
		return 'n-button';
	}
	getDisplayText() {
		return this.isTextFromModel() ? this.getValueFromModel() : this.getLabel();
	}

	isTextFromModel() {
		return this.getLayoutOptionValue('textFromModel', false);
	}
	getButtonStyle() {
		return 'n-btn-' + this.getLayoutOptionValue('style', 'default');
	}
	getLeftIcon() {
		return this.getLayoutOptionValue('leftIcon');
	}
	getRightIcon() {
		return this.getLayoutOptionValue('rightIcon');
	}
	getDropdownItems() {
		return this.wrapToArray(this.getLayoutOptionValue('dropdownItems'));
	}
	prepareDropdownItems() {
		let items = this.getDropdownItems();
		return {
			has: this.hasDropdown(items),
			separated: this.hasClickHandling(),
			items: items
		};
	}
	hasDropdown(dropdownItems) {
		return dropdownItems && dropdownItems.length > 0;
	}

	onDropdownIconClicked = (evt) => {
		if (this.isEnabled() && !evt.isDefaultPrevented()) {
			evt.preventDefault();
			this.togglePopover();
		}
	}
	onComponentClicked = (evt) => {
		if (this.isClickable()) {
			// click defined, event there are dropdown items
			// always respond click handler
			this.fireEventToMonitor(evt, 'click');
		} else if (this.hasDropdown(this.getDropdownItems())) {
			this.onDropdownIconClicked(evt);
		}
	}
	getDocumentClickHandler() {
		return this.hidePopover;
	}
	getDocumentEscapePressedHandler() {
		return this.hidePopover;
	}
}

Envs.COMPONENT_TYPES.BUTTON = {type: 'n-button'};
Envs.setRenderer(Envs.COMPONENT_TYPES.BUTTON.type, function (options) {
	return <NButton {...options} />;
});

export {NButton}
export * from './n-component'