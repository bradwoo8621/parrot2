import * as SDK from '../../src/js/components/n-date'

let {React, ReactDOM, Model, Layout, NDate, $, Envs} = SDK;


$(function() {
	let model = new Model({
		date: '2015'
	});
	model.addPostChangeListener('date', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('date', {
		comp: {
			placeholder: 'Input here'
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NDate model={model} layout={layout} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
	window.model = model;
});
