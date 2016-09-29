import {React, ReactDOM, $, classnames, lodash, Envs, NComponent, NDropdownComponent} from './n-component'
import {NIcon} from './n-icon'
import moment from 'moment'

const YEAR = 1;
const MONTH = 2;
const DAY = 4;
const HOUR = 8;
const MINUTE = 16;
const SECOND = 32;

const NDateComponent = (ParentClass) => class extends ParentClass {
	constructor(props) {
		super(props);
		this.YEAR = YEAR;
		this.MONTH = MONTH;
		this.DAY = DAY;
		this.HOUR = HOUR;
		this.MINUTE = MINUTE;
		this.SECOND = SECOND;
	}
	buildLayout(props) {
		super.buildLayout(props);
		this.computeDisplayType();
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
	getYearStepOfMonthPanel() {
		return this.getLayoutOptionValue('yearStep', Envs.YEAR_STEP_WHEN_MONTH);
	}
	// {min: moment, max: moment}
	getDateRange() {
		return this.getLayoutOptionValue('range');
	}
	getDateEnabledChecker() {
		return this.getLayoutOptionValue('dateEnabledChecker', null, false);
	}
	// check the given date is enabled or not
	// type is #YEAR, #MONTH, #DAY
	// equals max/min value is legal
	isDateEnabled(date, type) {
		let pass = true;
		let range = this.getDateRange();
		let min = range ? range.min : null;
		if (min) {
			pass = !date.isBefore(min, type == YEAR ? 'year' : (type == MONTH) ? 'month': 'date');
		}
		let max = range ? range.max : null;
		if (pass && max) {
			pass = !date.isAfter(max, type == YEAR ? 'year' : (type == MONTH) ? 'month': 'date');
		}

		let checker = this.getDateEnabledChecker();
		if (pass && checker) {
			pass = checker.call(this, date, type);
		}
		return pass;
	}

	computeDisplayType() {
		let format = this.getPrimaryDisplayFormat();
		let oldDisplayType = this.state.displayType;
		this.state.displayType = 
				(/Y/i.test(format) ? YEAR : 0)
				+ (/M/i.test(format) ? MONTH : 0)
				+ (/D/i.test(format) ? DAY : 0);
		if (oldDisplayType != this.state.displayType) {
			// display type changed
			let currentDisplayType = this.getCurrentDisplayType();
			if ((this.state.displayType & currentDisplayType) != currentDisplayType ) {
				// current display type cannot be supported
				delete this.state.currentDisplayType;
			}
		}
	}
	getDisplayType() {
		if (this.state.displayType == null) {
			this.computeDisplayType();
		}
		return this.state.displayType;
	}
	getCurrentDisplayType() {
		if (this.state.currentDisplayType == null) {
			// default use the smallest unit
			this.state.currentDisplayType = parseInt(this.state.displayType / 2) + 1;
		}
		return this.state.currentDisplayType;
	}
	isYearSupported() {
		return this.getDisplayType() & YEAR;
	}
	isMonthSupported() {
		return this.getDisplayType() & MONTH;
	}
	isDaySupported() {
		return this.getDisplayType() & DAY;
	}

	getValueFromModel() {
		let value = this.formatValue(super.getValueFromModel(), this.getValueFormat());
		return (value == null || !value.isValid()) ? null : value;
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
};

class NDateCalendar extends NDateComponent(NComponent) {
	renderDateHeaderForYear(date) {
		if (!this.isYearPicking()) {
			return null;
		}
		return (<div className='n-calendar-date-header-text'>
			<span>
				{date.format(this.getDateHeaderFormat().year) - 12}
				{' ~ '}
				{date.format(this.getDateHeaderFormat().year) * 1 + 12}
			</span>
		</div>);
	}
	renderDateHeaderForMonth(date) {
		if (!this.isMonthPicking()) {
			return null;
		}
		return (<div className='n-calendar-date-header-text'>
			<span className='clickable' onClick={this.onHeaderYearClicked}>
				{date.format(this.getDateHeaderFormat().year)}
			</span>
		</div>);
	}
	renderDateHeaderForDay(date) {
		if (!this.isDayPicking()) {
			return null;
		}
		return (<div className='n-calendar-date-header-text'>
			<span>
				<span className='clickable' onClick={this.onHeaderYearClicked}>
					{date.format(this.getDateHeaderFormat().year)}
				</span>
				<span className='clickable' onClick={this.onHeaderMonthClicked}>
					{date.format(this.getDateHeaderFormat().month)}
				</span>
			</span>
		</div>);
	}
	renderDateHeader() {
		let date = this.getDisplayDate();
		return (<div className='n-calendar-date-header'>
			<NIcon model={this.getPrimaryModel()}
				   n-comp-icon='angle-double-left'
				   n-evt-click={this.onBackwardClicked} />
			<NIcon model={this.getPrimaryModel()}
				   n-comp-icon='angle-left' 
				   n-evt-click={this.onPreviousClicked}/>
			{this.renderDateHeaderForDay(date)}
			{this.renderDateHeaderForMonth(date)}
			{this.renderDateHeaderForYear(date)}
			<NIcon model={this.getPrimaryModel()}
				   n-comp-icon='angle-right'
				   n-evt-click={this.onNextClicked} />
			<NIcon model={this.getPrimaryModel()}
				   n-comp-icon='angle-double-right'
				   n-evt-click={this.onForwardClicked} />
		</div>);
	}
	renderDateBodyBodyForYear(date) {
		if (!this.isYearPicking()) {
			return null;
		}
		let year = date.year();
		let years = [];
		let index = 0;
		for (index = 0; index < 12; index++) {
			years.push(year - 12 + index);
		}
		years.push(year);
		for (index = 0; index < 12; index++) {
			years.push(year + index + 1);
		}
		let today = moment();
		let activeYear = this.getValueFromModel();
		activeYear = activeYear ? activeYear.year() : -1;
		return years.map((year, index) => {
			let theDate = date.clone().year(year);
			let enabled = this.isDateEnabled(theDate, this.getCurrentDisplayType());
			let className = classnames('n-calendar-date-body-body-text year', {
				'today': year == today.year(),
				'active': year == activeYear,
				'disabled': !enabled
			});
			let clickHandler = enabled ? this.onYearClicked.bind(this, year) : null;
			return (<span className={className}
						  onClick={clickHandler}
						  key={index}>
				<span>{year}</span>
			</span>);
		});
	}
	renderDateBodyBodyForMonth(date) {
		if (!this.isMonthPicking()) {
			return null;
		}
		let today = moment();
		let activeMonth = this.getValueFromModel();
		let hasActiveMonth = activeMonth ? (date.year() == activeMonth.year()) : false;
		activeMonth = activeMonth ? activeMonth.month() : -1;
		let months = moment.monthsShort();
		return months.map((month, index) => {
			let theDate = date.clone().month(index);
			let enabled = this.isDateEnabled(theDate, this.getCurrentDisplayType());
			let className = classnames('n-calendar-date-body-body-text month', {
				'today': index == today.month(),
				'active': hasActiveMonth && index == activeMonth,
				'disabled': !enabled
			});
			let clickHandler = enabled ? this.onMonthClicked.bind(this, index) : null;
			return (<span className={className}
						  onClick={clickHandler}
						  key={index}>
				<span>{month}</span>
			</span>);
		});
	}
	renderDateBodyHeaderForDay() {
		if (!this.isDayPicking()) {
			return null;
		}
		let weekdays = moment.weekdaysMin();
		return (<div className='n-calendar-date-body-header'>
			{weekdays.map((weekday, index) => {
				return (<span className='n-calendar-date-body-header-text'
							  key={index}>
					{weekday}
				</span>);
			})}
		</div>);
	}
	renderDateBodyBodyForDay(date) {
		if (!this.isDayPicking()) {
			return null;
		}
		let days = this.buildCalendarDays(date);
		let today = moment();
		let activeDay = this.getValueFromModel();
		let hasActiveDay = activeDay ? ((date.year() == activeDay.year()) && (date.month() == activeDay.month())) : false;
		activeDay = activeDay ? activeDay.date() : -1;
		let before = true;
		let after = false;
		return days.map((day, index) => {
			if (day == 1) {
				if (before) {
					before = false;
				} else {
					after = true;
				}
			}
			let theDate = null;
			if (before) {
				theDate = date.clone().subtract(1, 'month').date(day);
			} else if (after) {
				theDate = date.clone().add(1, 'month').date(day);
			} else {
				theDate = date.clone().date(day);
			}
			let enabled = this.isDateEnabled(theDate, this.getCurrentDisplayType());
			let className = classnames('n-calendar-date-body-body-text date', {
				'before': before,
				'after': after,
				'today': theDate.year() == today.year() && theDate.month() == today.month() && theDate.date() == today.date(),
				'active': hasActiveDay && !before && !after && day == activeDay,
				'disabled': !enabled
			});
			let clickHandler = enabled ? this.onDayClicked.bind(this, theDate) : null;
			return (<span className={className}
						  onClick={clickHandler}
						  key={index}>
				<span>{day}</span>
			</span>);
		});
	}
	renderDateBodyBody() {
		let date = this.getDisplayDate();
		return (<div className='n-calendar-date-body-body'>
			{this.renderDateBodyHeaderForDay(date)}
			{this.renderDateBodyBodyForDay(date)}
			{this.renderDateBodyBodyForMonth(date)}
			{this.renderDateBodyBodyForYear(date)}
		</div>);
	}
	renderDateBody() {
		return (<div className='n-calendar-date-body'>
			{this.renderDateBodyBody()}
		</div>);
	}
	renderDate() {
		return (<div className='n-calendar-date'>
			{this.renderDateHeader()}
			{this.renderDateBody()}
		</div>);
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle());
		return (<div className={className}
					 ref='me'>
			{this.renderDate()}
		</div>);
	}
	getComponentClassName() {
		return 'n-calendar';
	}
	getDateHeaderFormat() {
		let format = this.getLayoutOptionValue('headerFormat');
		return lodash.assign({}, Envs.DATE_HEADER_FORMAT, format);
	}
	isDayPicking() {
		return this.getCurrentDisplayType() & DAY;
	}
	isMonthPicking() {
		return this.getCurrentDisplayType() & MONTH;
	}
	isYearPicking() {
		return this.getCurrentDisplayType() & YEAR;
	}

	getDisplayDate() {
		if (this.state.displayDate == null) {
			let value = this.getValueFromModel();
			this.state.displayDate = value == null ? moment() : value;
			if (!this.isDaySupported()) {
				this.state.displayDate.date(1);
			}
			if (!this.isMonthSupported()) {
				this.state.displayDate.month(0);
			}
		}
		return this.state.displayDate;
	}

	buildCalendarDays(date) {
		let days = [];

		let lastDay = date.clone().endOf('month').date();
		// weekday: 1(Mon) - 7(Sun)
		let firstWeekDay = date.clone().startOf('month').isoWeekday();
		let previousLastDay = date.clone().subtract(1, 'month').endOf('month').date();

		let index = 0;
		let count = 0;
		for (index = 0; index < firstWeekDay; index++) {
			days.push(previousLastDay - firstWeekDay + index + 1);
		}
		for (index = 0; index < lastDay; index++) {
			days.push(index + 1);
		}
		for (index = 0, count = 42 - days.length; index < count; index++) {
			days.push(index + 1);
		}
		return days;
	}

	onModelChanged(evt) {
		delete this.state.displayDate;
		super.onModelChanged(evt);
	}

	onHeaderYearClicked = (evt) => {
		let oldCurrentDisplayType = this.getCurrentDisplayType();
		this.setState({
			currentDisplayType: YEAR
		}, () => {
			this.fireDisplayTypeChangeEvent(oldCurrentDisplayType);
		});
	}
	onHeaderMonthClicked = (evt) => {
		let oldCurrentDisplayType = this.getCurrentDisplayType();
		this.setState({
			currentDisplayType: MONTH
		}, () => {
			this.fireDisplayTypeChangeEvent(oldCurrentDisplayType);
		});
	}
	onYearClicked = (year, evt) => {
		let date = this.getDisplayDate();
		date.year(year);
		this.setValueToModel(date);
		if (this.isMonthSupported()) {
			this.setState({
				currentDisplayType: MONTH
			});
		}
	}
	onMonthClicked = (month, evt) => {
		let date = this.getDisplayDate();
		date.month(month);
		this.setValueToModel(date);
		if (this.isDaySupported()) {
			this.setState({
				currentDisplayType: DAY
			});
		}
	}
	onDayClicked = (date, evt) => {
		this.setValueToModel(date);
	}
	onBackwardClicked = (evt) => {
		this.onHeaderIconClicked({
			day: {step: -1},
			month: {step: 0 - this.getYearStepOfMonthPanel()},
			year: {step: -50}
		});
	}
	onPreviousClicked = (evt) => {
		this.onHeaderIconClicked({
			day: {step: -1, unit: 'month'},
			month: {step: -1},
			year: {step: -25}
		});
	}
	onNextClicked = (evt) => {
		this.onHeaderIconClicked({
			day: {step: 1, unit: 'month'},
			month: {step: 1},
			year: {step: 25}
		});
	}
	onForwardClicked = (evt) => {
		this.onHeaderIconClicked({
			day: {step: 1},
			month: {step: this.getYearStepOfMonthPanel()},
			year: {step: 50}
		});
	}
	onHeaderIconClicked(options) {
		let oldDate = this.getDisplayDate();
		let date = oldDate.clone();
		if (this.isDayPicking()) {
			// day picking panel, switch year
			date.add.call(date, options.day.step, options.day.unit || 'year');
		} else if (this.isMonthPicking()) {
			date.add.call(date, options.month.step, options.month.unit || 'year');
		} else if (this.isYearPicking()) {
			date.add.call(date, options.year.step, options.year.unit || 'year');
		}
		this.setState({displayDate: date});
		this.fireEventToMonitor($.Event('displayDateChange', {
			target: ReactDOM.findDOMNode(this.refs.me),
			oldDisplayDate: oldDate,
			newDisplayDate: date
		}));
	}

	fireDisplayTypeChangeEvent(oldDisplayType) {
		this.fireEventToMonitor($.Event('displayTypeChange', {
			target: ReactDOM.findDOMNode(this.refs.me),
			oldDisplayType: oldDisplayType,
			newDisplayType: this.getCurrentDisplayType()
		}));
	}
}

class NDate extends NDateComponent(NDropdownComponent(NComponent)) {
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

	getComponent() {
		return $(ReactDOM.findDOMNode(this.refs.txt));
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
}

export * from './n-component'
export {NDateComponent, NDate, NDateCalendar, moment}