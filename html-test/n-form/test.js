import * as SDK from '../../src/js/components/n-form'
import {NText} from '../../src/js/components/n-text'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NForm, 
	$, 
	Envs} = SDK;

$(function() {
	let model = new Model({
	});
	model.addPostChangeListener('name', function(evt) {
		console.log(`Name changed from "${evt.old}" to "${evt.new}"`);
	}).addPostChangeListener('name', function(evt) {
		console.log(`Age changed from "${evt.old}" to "${evt.new}"`);
	});
	let layout = new Layout('form', {
		comp: {
			children: {
				name: {
					label: 'Name',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 3, col: 100, row: 100}
				},
				age: {
					label: 'Age',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 3, col: 200, row: 100}
				}
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<NForm model={model} layout={layout} />
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
