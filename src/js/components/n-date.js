import {
	React, 
	ReactDOM, 
	$, 
	classnames, 
	lodash, 
	Envs, 
	NComponent, 
	NDropdownComponent} from './n-component'
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

		this.onNowClicked = this.onNowClicked.bind(this);
		this.onClearClicked = this.onClearClicked.bind(this);
		this.onCloseClicked = this.onCloseClicked.bind(this);

		let defaultDate = this.getLayoutOptionValue('defaultDateTime');
		if (defaultDate) {
			this.state.displayDate = defaultDate.clone();
		}
		let defaultDisplayType = this.getLayoutOptionValue('defaultDisplayType');
		if (defaultDisplayType) {
			this.state.currentDisplayType = defaultDisplayType;
		}
	}
	buildLayout(props) {
		super.buildLayout(props);
		this.computeDisplayType();
	}
	renderDateFooter() {
		return (<NCalendarFooter model={this.getModel()}
								 n-id={this.getDataId()}
								 n-comp-showClose={this.isCloseButtonShown()}
								 n-comp-showClear={this.isClearButtonShown()}
								 n-comp-showNow={this.isNowButtonShown()}
								 n-evt-closeClick={this.onCloseClicked}
								 n-evt-clearClick={this.onClearClicked}
								 n-evt-nowClick={this.onNowClicked}
								 container={this}
								 ref='footer' />);
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
		return this.getLayoutOptionValue('dateEnabledChecker', null, true);
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
				+ (/M/.test(format) ? MONTH : 0)
				+ (/D/i.test(format) ? DAY : 0)
				+ (/H/i.test(format) ? HOUR : 0)
				+ (/m/.test(format) ? MINUTE: 0)
				+ (/s/.test(format) ? SECOND: 0);
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
			if (this.isSecondSupported()) {
				this.state.currentDisplayType = SECOND;
			} else if (this.isMinuteSupported()) {
				this.state.currentDisplayType = MINUTE;
			} else if (this.isHourSupported()) {
				this.state.currentDisplayType = HOUR;
			} else if (this.isDaySupported()) {
				this.state.currentDisplayType = DAY;
			} else if (this.isMonthSupported()) {
				this.state.currentDisplayType = MONTH;
			} else {
				this.state.currentDisplayType = YEAR;
			}
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
	isDateSupported() {
		return this.isYearSupported();
	}
	isHourSupported() {
		return this.getDisplayType() & HOUR;
	}
	isMinuteSupported() {
		return this.getDisplayType() & MINUTE;
	}
	isSecondSupported() {
		return this.getDisplayType() & SECOND;
	}
	isTimeSupported() {
		return this.isHourSupported();
	}
	isCloseButtonShown() {
		return this.getLayoutOptionValue('showClose', false);
	}
	isNowButtonShown() {
		return this.getLayoutOptionValue('showNow', true);
	}
	isClearButtonShown() {
		return this.getLayoutOptionValue('showClear', true);
	}
	hasFooter() {
		return this.isClearButtonShown() || this.isNowButtonShown() || this.isCloseButtonShown();
	}

	onModelChanged(evt) {
		delete this.state.displayDate;
		super.onModelChanged(evt);
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
			super.setValueToModel(this.parseText(momentValue, this.getValueFormat()));
		} else {
			// moment object
			super.setValueToModel(this.parseText(value, this.getValueFormat()));
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
	onCloseClicked(evt) {
		this.fireEventToMonitor(evt, 'closeClick');
	}
	onNowClicked(evt) {
		this.setDisplayToNow(() => {
			this.fireEventToMonitor(evt, 'nowClick');
		});
	}
	onClearClicked(evt) {
		this.clearValue();
		this.fireEventToMonitor(evt, 'clearClick');
	}

	setDisplayToNow(callback) {
		this.setState({
			displayDate: moment()
		}, callback);
	}
	clearValue() {
		let oldValue = this.getValueFromModel();
		if (oldValue != null) {
			this.setValueToModel(null);
		}
	}
	resetDisplayOptions(options) {
		this.setState(options);
	}
};

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

class NCalendarFooter extends NIconRenderer(NComponent) {
	renderClearButton() {
		if (this.isClearButtonShown()) {
			return (<div className='n-calendar-footer-button'>
				{this.renderIcon({
					icon: 'trash-o',
					click: this.onClearIconClicked,
					ref: 'clear-btn'
				})}
			</div>);
		}
	}
	renderNowButton() {
		if (this.isNowButtonShown()) {
			return (<div className='n-calendar-footer-button'>
				{this.renderIcon({
					icon: 'crosshairs',
					click: this.onNowIconClicked,
					ref: 'now-btn'
				})}
			</div>);
		}
	}
	renderCloseButton() {
		if (this.isCloseButtonShown()) {
			return (<div className='n-calendar-footer-button'>
				{this.renderIcon({
					icon: 'close',
					click: this.onCloseIconClicked,
					ref: 'close-btn'
				})}
			</div>);
		}
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderClearButton()}
			{this.renderNowButton()}
			{this.renderCloseButton()}
		</div>);
	}
	getComponentClassName() {
		return 'n-calendar-footer';
	}
	isCloseButtonShown() {
		return this.getLayoutOptionValue('showClose', false);
	}
	isNowButtonShown() {
		return this.getLayoutOptionValue('showNow', true);
	}
	isClearButtonShown() {
		return this.getLayoutOptionValue('showClear', true);
	}
	onClearIconClicked = (evt) => {
		this.fireEventToMonitor(evt, 'clearClick');
	}
	onNowIconClicked = (evt) => {
		this.fireEventToMonitor(evt, 'nowClick');
	}
	onCloseIconClicked = (evt) => {
		this.fireEventToMonitor(evt, 'closeClick');
	}
}

class NDateCalendar extends NIconRenderer(NDateComponent(NComponent)) {
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
			<span className='n-clickable' onClick={this.onHeaderYearClicked}>
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
				<span className='n-clickable' onClick={this.onHeaderYearClicked}>
					{date.format(this.getDateHeaderFormat().year)}
				</span>
				<span className='n-clickable' onClick={this.onHeaderMonthClicked}>
					{date.format(this.getDateHeaderFormat().month)}
				</span>
			</span>
		</div>);
	}
	renderDateHeader() {
		let date = this.getDisplayDate();
		return (<div className='n-calendar-date-header'>
			{this.renderIcon({
				icon: 'angle-double-left',
				click: this.onBackwardClicked,
				ref: 'backward-btn'
			})}
			{this.renderIcon({
				icon: 'angle-left',
				click: this.onPreviousClicked,
				ref: 'previous-btn'
			})}
			{this.renderDateHeaderForDay(date)}
			{this.renderDateHeaderForMonth(date)}
			{this.renderDateHeaderForYear(date)}
			{this.renderIcon({
				icon: 'angle-right',
				click: this.onNextClicked,
				ref: 'next-btn'
			})}
			{this.renderIcon({
				icon: 'angle-double-right',
				click: this.onForwardClicked,
				ref: 'forward-btn'
			})}
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
		let hasFooter = this.hasFooter();
		return (<div className={classnames('n-calendar-date', {'n-calendar-no-footer': !hasFooter})}>
			{this.renderDateHeader()}
			{this.renderDateBody()}
			{hasFooter ? this.renderDateFooter() : null}
		</div>);
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderDate()}
		</div>);
	}
	getComponentClassName() {
		return 'n-calendar';
	}
	getDateHeaderFormat() {
		let format = this.getLayoutOptionValue('dateHeaderFormat');
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

	getCurrentDisplayType() {
		if (this.state.currentDisplayType == null) {
			// default use the smallest unit
			if (this.isDaySupported()) {
				this.state.currentDisplayType = DAY;
			} else if (this.isMonthSupported()) {
				this.state.currentDisplayType = MONTH;
			} else {
				this.state.currentDisplayType = YEAR;
			}
		}
		return this.state.currentDisplayType;
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
		this.setValueToModel(this.applyTimeToValue(date.clone().year(year)));
		if (this.isMonthSupported()) {
			this.setState({
				currentDisplayType: MONTH
			});
		} else {
			this.setState({
				displayDate: date
			});
		}
	}
	onMonthClicked = (month, evt) => {
		let date = this.getDisplayDate();
		this.setValueToModel(this.applyTimeToValue(date.clone().month(month)));
		if (this.isDaySupported()) {
			this.setState({
				currentDisplayType: DAY
			});
		}
	}
	onDayClicked = (date, evt) => {
		this.setValueToModel(this.applyTimeToValue(date));
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

	applyTimeToValue(date) {
		let oldValue = this.getValueFromModel();
		if (oldValue == null) {
			let now = moment();
			date.hour(now.hour())
				.minute(now.minute())
				.second(now.second());
		}
		return date;
	}
}

class NTimeClock extends NDateComponent(NComponent) {
	renderTimeBody() {
		let date = this.getDisplayDate();
		let circles = [{
			tip: 'Second',
			class: 'second',
			value: date.second(),
			total: 60
		}, {
			tip: 'Minute',
			class: 'minute',
			value: date.minute(),
			total: 60
		}, {
			tip: 'Hour',
			class: 'hour',
			value: date.hour(),
			total: 24
		}];
		if (!this.isSecondSupported()) {
			circles.splice(0, 1);
			if (!this.isMinuteSupported()) {
				circles.splice(0, 1);
			}
		}
		return (<div className='n-calendar-time-body'>
			<div className='n-calendar-time-clock'>
				<svg>
					<circle className='n-calendar-time-clock-bg'
							r='51' cx='105' cy='105' />
					{circles.map((circle, index) => {
						let size = 92 - index * 30;
						let painter = {
							r: size,
							cx: 105,
							cy: 105
						};
						return (<g key={index}>
							<title>{circle.tip}</title>
							<circle className={`n-calendar-time-clock-circle-bg ${circle.class} size-${size}`}
									onClick={this.onCircleClicked}
									{...painter} />
							<circle className={`n-calendar-time-clock-circle ${circle.class} size-${size} when-${circle.value}-of-${circle.total}`}
									onClick={this.onCircleClicked}
									{...painter} />
						</g>);
					})}
				</svg>
			</div>
		</div>);
	}
	renderTimeHeader() {
		let date = this.getDisplayDate();
		return (<div className='n-calendar-time-header'>
			<div className='n-calendar-time-header-text'>
				<span>
					{date.format(this.getTimeHeaderFormat())}
				</span>
			</div>
		</div>);
	}
	renderTime() {
		let hasFooter = this.hasFooter();
		return (<div className={classnames('n-calendar-time', {'n-calendar-no-footer': !hasFooter})}>
			{this.renderTimeHeader()}
			{this.renderTimeBody()}
			{hasFooter ? this.renderDateFooter() : null}
		</div>);
	}
	renderInNormal() {
		let value = this.getValueFromModel();
		if (value == null) {
			if (!this.state.timer) {
				this.state.timer = setInterval(this.refreshTime.bind(this), 1000);
			}
		} else if (this.state.timer) {
			clearInterval(this.state.timer);
			delete this.state.timer;
		}
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderTime()}
		</div>);
	}
	getComponentClassName() {
		return 'n-calendar';
	}
	getTimeHeaderFormat() {
		let format = this.getLayoutOptionValue('timeHeaderFormat', Envs.TIME_HEADER_FORMAT);
		if (this.isMinuteSupported()) {
			format += ':mm';
		}
		if (this.isSecondSupported()) {
			format += ':ss';
		}
		return format;
	}
	getDisplayFormats() {
		let formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
		return formats.length == 0 ? this.wrapToArray(Envs.TIME_DISPLAY_FORMAT) : formats;
	}
	getCurrentDisplayType() {
		if (this.state.currentDisplayType == null) {
			// default use the smallest unit
			if (this.isSecondSupported()) {
				this.state.currentDisplayType = SECOND;
			} else if (this.isMinuteSupported()) {
				this.state.currentDisplayType = MINUTE;
			} else {
				this.state.currentDisplayType = HOUR;
			}
		}
		return this.state.currentDisplayType;
	}
	getDisplayDate() {
		if (this.state.displayDate == null) {
			let value = this.getValueFromModel();
			this.state.displayDate = value == null ? moment() : value;
			if (!this.isMinuteSupported()) {
				this.state.displayDate.minute(0);
			}
			if (!this.isSecondSupported()) {
				this.state.displayDate.second(0);
			}
		}
		return this.state.displayDate;
	}
	refreshTime() {
		delete this.state.displayDate;
		this.forceUpdate();
	}
	onCircleClicked = (evt) => {
		let target = $(evt.target);
		let clientX = evt.clientX,
			clientY = evt.clientY;
		let targetOffset = target.closest('svg').offset();
		let x = clientX + $(document).scrollLeft() - (targetOffset.left + 105);
		let y = -1 * (clientY + $(document).scrollTop() - (targetOffset.top + 105));
		let degree = 0;
		if (x == 0) {
			degree = (y >= 0) ? 90 : 270;
		} else {
			degree = Math.atan(y / x) * 180 / Math.PI;
			// transform to coordinate system degree
			if (x > 0 && y >= 0) {
				// do nothing
			} else if (x < 0) {
				degree += 180;
			} else {
				degree += 360;
			}
		}
		// transform to real clock coordinate system
		if (degree <= 90) {
			degree = 90 - degree;
		} else {
			degree = 450 - degree;
		}
		let value = this.getValueFromModel();
		if (value == null) {
			value = moment();
			if (!this.isDaySupported()) {
				value.date(1);
			}
			if (!this.isMonthSupported()) {
				value.month(0);
			}
			if (!this.isMinuteSupported()) {
				value.minute(0);
			}
			if (!this.isSecondSupported()) {
				value.second(0);
			}
		} else {
			value = value.clone();
		}
		if (target.hasClass('hour')) {
			let v = Math.round(degree / 360 * 24);
			value.hour(v);
		} else {
			let v = Math.round(degree / 360 * 60);
			if (target.hasClass('minute')) {
				value.minute(v);
			} else {
				value.second(v);
			}
		}
		this.setValueToModel(value);
	}
}

class NDateTimeCalendar extends NDateComponent(NComponent) {
	renderInNormal() {
		let options = {
			model: this.getModel(),
			'n-id': this.getDataId(),
			'n-comp-valueFormat': this.getValueFormat(),
			'n-comp-displayFormats': this.getDisplayFormats(),
			'n-comp-range': this.getDateRange(),
			'n-comp-dateEnabledChecker': this.getDateEnabledChecker(),
			'n-comp-dateHeaderFormat': this.getLayoutOptionValue('dateHeaderFormat'),
			'n-comp-timeHeaderFormat': this.getLayoutOptionValue('timeHeaderFormat'),
			'n-comp-showNow': false,
			'n-comp-showClear': false
		};
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			<NDateCalendar {...options}
						   container={this}
						   ref='date' />
			<NTimeClock {...options}
						container={this}
						ref='time' />
			{this.renderDateFooter()}
		</div>);
	}
	getComponentClassName() {
		return 'n-datetime-calendar';
	}
	getDisplayFormats() {
		let formats = this.wrapToArray(this.getLayoutOptionValue('displayFormats'));
		return formats.length == 0 ? this.wrapToArray(Envs.DATE_TIME_DISPLAY_FORMAT) : formats;
	}
	onNowClicked(evt) {
		this.refs.date.setDisplayToNow();
		this.refs.time.setDisplayToNow();
		super.onNowClicked(evt);
	}
	resetDisplayOptions(options) {
		this.refs.date.setState(options);
		this.refs.time.setState(options);
	}
}

class NDate extends NIconRenderer(NDateComponent(NDropdownComponent(NComponent))) {
	postWillUpdate() {
		this.getComponent().off('change', this.onComponentChanged);
	}
	postDidUpdate() {
		let compValue = this.formatValue(this.getComponentText(), this.getDisplayFormats());
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
		let hasDate = this.isDateSupported();
		let hasTime = this.isTimeSupported();
		let options = {
			model: this.getModel(),
			'n-id': this.getDataId(),
			'n-comp-valueFormat': this.getValueFormat(),
			'n-comp-displayFormats': this.getDisplayFormats(),
			'n-comp-range': this.getDateRange(),
			'n-comp-dateEnabledChecker': this.getDateEnabledChecker(),
			'n-comp-dateHeaderFormat': this.getLayoutOptionValue('dateHeaderFormat'),
			'n-comp-timeHeaderFormat': this.getLayoutOptionValue('timeHeaderFormat'),
			'n-comp-showNow': true,
			'n-comp-showClear': true,
			'n-comp-showClose': true,
			'n-evt-closeClick': () => {
				this.hideDropdown();
			},
			'n-styles-comp': 'n-dropdown',
			container: this,
			ref: 'dropdown'
		};
		if (hasDate && hasTime) {
			return <NDateTimeCalendar {...options} />;
		} else if (hasDate) {
			return <NDateCalendar {...options} />;
		} else {
			return <NTimeClock {...options} />
		}
	}
	renderCalendarIcon() {
		return (<div className='n-input-addon'>
			{this.renderIcon({
				icon: 'close',
				click: this.onClearIconClicked,
				ref: 'clear-btn'
			})}
			{this.renderIcon({
				icon: 'calendar',
				click: this.onCalendarIconClicked,
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
		let value = this.formatValue(this.getComponentText(), this.getDisplayFormats());
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
		if (this.isEnabled() && !evt.isDefaultPrevented()) {
			evt.preventDefault();
			this.showDropdown();
		}
	}
	showDropdown() {
		if (!this.isDropdownShown()) {
			let value = this.getValueFromModel();
			if (value == null) {			
				this.refs.dropdown.resetDisplayOptions({
					displayDate: this.getLayoutOptionValue('defaultDateTime'),
					currentDisplayType: this.getLayoutOptionValue('defaultDisplayType')
				});
			} else {
				this.refs.dropdown.resetDisplayOptions({
					displayDate: value,
					currentDisplayType: this.getLayoutOptionValue('defaultDisplayType')
				});
			}
		}
		super.showDropdown();
	}

	getComponentText() {
		return this.getComponent().val();
	}
}

Envs.COMPONENT_TYPES.DATE_CALENDAR = {type: 'n-date-calendar', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.DATE_CALENDAR.type, function (options) {
	return <NDateCalendar {...options} />;
});
Envs.COMPONENT_TYPES.TIME_CLOCK = {type: 'n-time-clock', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TIME_CLOCK.type, function (options) {
	return <NTimeClock {...options} />;
});
Envs.COMPONENT_TYPES.DATE_TIME_CALENDAR = {type: 'n-date-time-calendar', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.DATE_TIME_CALENDAR.type, function (options) {
	return <NDateTimeCalendar {...options} />;
});
Envs.COMPONENT_TYPES.DATE_PICKER = {type: 'n-date-picker', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.DATE_PICKER.type, function (options) {
	return <NDate {...options} />;
});

export * from './n-component'
export {NDateComponent, NDate, NDateCalendar, NTimeClock, NDateTimeCalendar, moment}