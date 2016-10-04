import * as SDK from '../../src/js/components/n-date'

let {React, ReactDOM, Model, Layout, NDate, NDateCalendar, NTimeClock, NDateTimeCalendar, $, Envs, moment} = SDK;


$(function() {
	let model = new Model({
		date: '2015',
		time: '20160101130506'
	});
	model.addPostChangeListener('date', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('date', {
		comp: {
			placeholder: 'Input here',
			defaultDateTime: moment().add(-25, 'year'),
			defaultDisplayType: 1
		}
	});
	let layoutDT = new Layout('date', {
		comp: {
			placeholder: 'Input here',
			displayFormats: 'YYYY/MM/DD HH:mm:ss'
		}
	});
	let layoutOnlyTime = new Layout('date', {
		comp: {
			placeholder: 'Input here',
			displayFormats: 'HH:mm:ss'
		}
	});
	let layoutR = new Layout('date', {
		comp: {
			range: {
				max: moment('20161231'),
				min: moment('20160101')
			},
			showClose: true
		},
		evt: {
			closeClick: function(evt) {
				console.log(this, evt);
			}
		}
	});
	let layoutRC = new Layout('date', {
		comp: {
			range: {
				min: moment('20101010')
			},
			dateEnabledChecker: function(date, type) {
				switch(type) {
					case this.YEAR:
						return date.year() != 2012;
					case this.MONTH:
						return date.year() != 2012 && date.month() != 9;
					case this.DAY:
						return date.year() != 2012 && date.month() != 9 && date.date() != 25;
				}
			},
			showClear: false,
			showNow: false
		}
	});
	let layoutNC = new Layout('date', {
		comp: {
			showNow: false,
			defaultDisplayType: 1,
			defaultDateTime: function() {
				return moment().add(-25, 'year');
			}
		}
	});
	let layoutNC_YM = new Layout('date', {
		comp: {
			displayFormats: 'YYYYMM'
		}
	});
	let layoutNC_Y = new Layout('date', {
		comp: {
			displayFormats: 'YYYY'
		}
	});
	let layoutHMS = new Layout('time', {
		comp: {
		}
	});
	let layoutHM = new Layout('time', {
		comp: {
			displayFormats: 'HH:mm'
		}
	});
	let layoutH = new Layout('time', {
		comp: {
			displayFormats: 'HH'
		}
	});


	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDate model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDate model={model} layout={layoutDT} />
			</div>
		</div>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateCalendar model={model} layout={layoutNC} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateCalendar model={model} layout={layoutNC_YM} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateCalendar model={model} layout={layoutNC_Y} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateCalendar model={model} layout={layoutR} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateCalendar model={model} layout={layoutRC} />
			</div>
		</div>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTimeClock model={model} layout={layoutHMS} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTimeClock model={model} layout={layoutHM} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTimeClock model={model} layout={layoutH} />
			</div>
		</div>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDateTimeCalendar model={model} n-id='datetime' />
			</div>
		</div>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDate model={model} layout={layoutOnlyTime} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
	window.model = model;
});
