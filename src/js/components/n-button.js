import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
let $ = jQuery;

import {Envs} from '../envs'
import {Layout} from '../layout/layout'
import {NComponent, NDropdownComponent, NContainer} from './n-component'

class NButton extends NDropdownComponent(NComponent) {
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
		let className = classnames('n-control', 'n-btn', this.getButtonStyle(), {
			'n-clickable': this.isEnabled()
		});
		return (<button className={className}
						disabled={!this.isEnabled()}
						onClick={this.onComponentClicked}>
			{this.renderLeftIcon()}
			{this.getDisplayText()}
			{this.renderRightIcon()}
			{this.renderDropdownIcon(dropdown)}
		</button>);
	}
	renderSeparatedDropdownIcon(dropdown) {
		if (dropdown.has && dropdown.separated) {
			let className = classnames('n-control n-btn n-button-dropdown-icon',
									   this.getButtonStyle(), {
											'n-clickable': this.isEnabled()
									   });
			return (<button className={className}
							disabled={!this.isEnabled()}
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
		return (<ul className='n-button-dropdown n-dropdown n-text-left'
					ref='dropdown'>
			{dropdown.items.map((item, itemIndex) => {
				return this.renderDropdownItem(item, itemIndex);
			})}
		</ul>);
	}
	renderInNormal() {
		let dropdown = this.prepareDropdownItems();

		let className = classnames(this.getComponentStyle(), {
			'n-button-group': dropdown.has && dropdown.separated,
			'n-button-fill': this.isWidthFill()
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
	isWidthFill() {
		return this.getLayoutOptionValue('fill', false);
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
			separated: this.isHasClickHanlder(),
			items: items
		};
	}
	hasDropdown(dropdownItems) {
		return dropdownItems && dropdownItems.length > 0;
	}

	onDropdownIconClicked = (evt) => {
		if (!evt.isDefaultPrevented()) {
			evt.preventDefault();
			this.showDropdown();
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
}

class NButtonBar extends NContainer {
	renderButtons() {
		let buttons = this.getButtons();
		return buttons.map((button, buttonIndex) => {
			if (!button.comp) {
				button.comp = {};
			}
			if (!button.comp.type) {
				button.comp.type = Envs.COMPONENT_TYPES.BUTTON;
			}
			if (!button.styles) {
				button.styles = {};
			}
			if (!button.styles.comp) {
				button.styles.comp = 'n-float-right';
			}
			return this.renderInternalComponent(button, {
				key: buttonIndex
			});
		});
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderLeadingDOMChildren()}
			{this.renderLeadingChildren()}
			{this.renderButtons()}
			{this.renderTailingChildren()}
			{this.renderTailingDOMChildren()}
		</div>);
	}
	getComponentClassName() {
		return 'n-button-bar';
	}
	getButtons() {
		let buttons = this.getLayoutOptionValue('buttons');
		return buttons ? buttons : [];
	}
}

Envs.COMPONENT_TYPES.BUTTON = {type: 'n-button', label: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.BUTTON.type, function (options) {
	return <NButton {...options} />;
});
Envs.COMPONENT_TYPES.BUTTON_BAR = {type: 'n-button-bar', label: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.BUTTON_BAR.type, function (options) {
	return <NButtonBar {...options} />;
});

export {NButton, NButtonBar}
