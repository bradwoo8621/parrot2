import * as SDK from '../../src/js/components/n-check'

let {React, ReactDOM, CodeTable, Model, Layout, NCheck, NArrayCheck, $, Envs} = SDK;

$(function() {
	let codes = new CodeTable({items: [{id: 1, text: 'Item 1'}, {id: 2, text: 'Item 2'}]});
	let model = new Model({
	});
	model.addPostChangeListener('check', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	}).addPostChangeListener('checkA', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('check', {
		label: 'Check Me',
		comp: {}
	});
	let layoutA = new Layout('checkA', {
		label: 'Check Me',
		comp: {
			codes: codes
		}
	})

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NCheck model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NArrayCheck model={model} layout={layoutA} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
