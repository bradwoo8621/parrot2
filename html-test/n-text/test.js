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

	ReactDOM.render(<NText model={model} layout={layout}/>, document.getElementById('main'));
});
