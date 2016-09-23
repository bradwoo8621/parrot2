import * as SDK from '../../src/js/components/n-text-area'
import {NIcon, NStackIcon} from '../../src/js/components/n-icon'
import {NLabel} from '../../src/js/components/n-label'

let {React, ReactDOM, Model, Layout, NTextArea, $, Envs} = SDK;


$(function() {
	let model = new Model({
		name: 'test',
		amount: 1234,
		rate: 0.15
	});
	model.addPostChangeListener('name', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	}).addPostChangeListener('amount', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	}).addPostChangeListener('rate', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('name', {
		comp: {
			placeholder: 'Input here'
		},
		evt: {
			keyUp: function(evt) {
				// console.log(this, evt);
			}
		}
	});

	let layout2 = new Layout('amount', {
		comp: {
			placeholder: 'Amount',
			rows: 1
		},
		styles: {comp: 'text-right'}
	});
	let layout3 = new Layout('rate', {
		comp: {
			placeholder: 'Ratio'
		}
	});
	let layout4 = new Layout('rate', {
		comp: {
			placeholder: 'Ratio',
			rows: 4
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTextArea model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTextArea model={model} layout={layout2} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTextArea model={model} layout={layout3} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTextArea model={model} layout={layout4} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
