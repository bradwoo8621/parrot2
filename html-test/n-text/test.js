import * as SDK from '../../src/js/components/n-text'

let {React, ReactDOM, Model, Layout, NText, $} = SDK;

$(function() {
	let model = new Model({});
	model.addPostChangeListener('name', function(evt) {
		console.log(this);
		console.log(evt);
	});
	let layout = new Layout('name', {
		comp: {
			placeholder: 'Input here'
		}
	});


	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NText model={model} layout={layout}/>
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
