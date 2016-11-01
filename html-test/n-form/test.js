import * as SDK from '../../src/js/components/n-form'
import {NText} from '../../src/js/components/n-text'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model,
	Validator,
	Layout, 
	NForm, 
	$, 
	Envs} = SDK;

$(function() {
	let model = new Model({
	});
	let validator = new Validator({
		name: {
			label: '"Name"',
			minlen: {
				params: 5,
				level: Validator.LEVEL_INFO
			},
			maxlen: 3
		}
	});
	model.setValidator(validator);
	model.addPostChangeListener('name', function(evt) {
		console.log(`Name changed from "${evt.old}" to "${evt.new}"`);
	}).addPostChangeListener('age', function(evt) {
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
				},
				name1: {
					label: 'Name 1',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 3, col: 300, row: 100}
				},
				name2: {
					label: 'Name 2',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 3, col: 400, row: 100}
				},
				name3: {
					label: 'Name 3',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 3, col: 500, row: 100}
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
