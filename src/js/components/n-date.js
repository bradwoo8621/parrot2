import {React, ReactDOM, $, classnames, Envs, NDropdownComponent} from './n-component'
import {NIcon} from './n-icon'
import moment from 'moment'

class NDate extends NDropdownComponent {
	postWillUpdate() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	postDidUpdate() {
		let compValue = this.formatValue(this.getComponentText(), this.getDisplayFormats(), true);
		let modelValue = this.getValueFromModel();
		if (!this.isSame(compValue, modelValue)) {
			this.getComponent().val(this.parseText(modelValue, this.getPrimaryDisplayFormat()));
		}
		this.getComponent().on('change', this.onComponentChanged);
	}
	postDidMount() {
		this.getComponent().val(this.parseText(this.getValueFromModel(), this.getPrimaryDisplayFormat()));
		this.getComponent().on('change', this.onComponentChanged);
	}
	postWillUnmount() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	renderDropdown() {
		
	}
	renderCalendarIcon() {
		return (<div className='n-input-addon'>
			<NIcon model={this.getPrimaryModel()} 
				   n-comp-icon='close'
				   n-evt-click={this.onClearIconClicked} />
			<NIcon model={this.getPrimaryModel()} 
				   n-comp-icon='calendar'
				   n-evt-click={this.onCalendarIconClicked} />
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
	isViewModeSameAsNormal() {
		return false;
	}

	getComponentClassName() {
		return 'n-date';
	}
	getPlaceholder() {
		return this.getLayoutOptionValue('placeholder');
	}
	getValueFormat() {
		return this.getLayoutOptionValue('valueFormat', Envs.DATE_VALUE_FORMAT);
	}
	getDisplayFormats() {
		let formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
		return formats.length == 0 ? this.wrapToArray(Envs.DATE_DISPLAY_FORMAT) : formats;
	}
	getPrimaryDisplayFormat() {
		return this.getDisplayFormats()[0];
	}

	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
	}
	getValueFromModel() {
		return this.formatValue(super.getValueFromModel(), this.getValueFormat());
	}
	setValueToModel(value) {
		if (value == null) {
			super.setValueToModel(null);
		} else if (typeof value === 'string') {
			// string value
			let momentValue = this.formatValue(value, this.getValueFormat());
			if (momentValue.isValid()) {
				super.setValueToModel(momentValue.format(this.getValueFormat()));
			} else {
				super.setValueToModel(null);
			}
		} else {
			// moment object
			if (value.isValid()) {
				super.setValueToModel(value.format(this.getValueFormat()));
			} else {
				super.setValueToModel(null);
			}
		}
	}
	gatherValueFromInputAndSetToModel() {
		let value = this.formatValue(this.getComponentText(), this.getDisplayFormats(), true);
		if (value == null || !value.isValid()) {
			this.setValueToModel(null);
		} else if (!value.isSame(this.getValueFromModel())) {
			this.setValueToModel(value);
		}
	}

	// data event
	onComponentChanged = (evt) => {
		this.gatherValueFromInputAndSetToModel();
	}

	// dom event
	onComponentKeyPressed = (evt) => {
		this.onComponentChanged(evt);
		this.fireEventToMonitor(evt, 'keypress');
	}
	onComponentFocused = (evt) => {
		this.onComponentFocusChanged();
		this.fireEventToMonitor(evt, 'focus');
	}
	onComponentBlurred = (evt) => {
		this.onComponentFocusChanged();
		this.gatherValueFromInputAndSetToModel();
		this.getComponent().val(this.parseText(this.getValueFromModel(), this.getPrimaryDisplayFormat()));
		this.fireEventToMonitor(evt, 'blur');
	}
	onClearIconClicked = (evt) => {
		this.setValueToModel(null);
		$(ReactDOM.findDOMNode(this.refs.txt)).focus();
	}
	onCalendarIconClicked = (evt) => {
		$(ReactDOM.findDOMNode(this.refs.txt)).focus();
	}

	getComponentText() {
		return this.getComponent().val();
	}
	formatValue(strValue, formats, strict) {
		if (strValue == null || strValue.length == 0) {
			return null;
		} else {
			return moment(strValue.trim(), formats, strict);
		}
	}
	parseText(momentValue, format) {
		if (momentValue == null || !momentValue.isValid()) {
			return null;
		} else {
			return momentValue.format(format);
		}
	}
	isSame(momentValue1, momentValue2) {
		if (momentValue1 == null || !momentValue1.isValid()) {
			return momentValue2 == null || !momentValue2.isValid();
		} else if (momentValue2 == null || !momentValue2.isValid()) {
			return false;
		} else {
			return momentValue1.isSame(momentValue2);
		}
	}
}

export * from './n-component'
export {NDate, moment}