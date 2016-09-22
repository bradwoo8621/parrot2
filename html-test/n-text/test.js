import * as SDK from '../../src/js/components/n-text'

let {React, ReactDOM, Model, Layout, NText, $, Envs} = SDK;

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
			placeholder: 'Input here',
			leftAddons: {
				'name': {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: 'ban'
					}
				}
			},
			rightAddons: {
				'name': {
					comp: {
						type: Envs.COMPONENT_TYPES.STACK_ICON,
						foreicon: 'camera',
						backicon: 'ban !text-danger'
					},
					evt: {
						click: function() {
							alert('Ban camera clicked');
						}
					}
				}
			}
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
			formatter: {
				display: Envs.NUMBER_FORMATTER,
				model: Envs.NUMBER_PARSER
			}
		},
		styles: {comp: 'text-right'}
	});
	let layout3 = new Layout('rate', {
		comp: {
			placeholder: 'Ratio',
			kind: 'number',
			transformer: {
				display: Envs.PERCENTAGE_FORMATTER,
				model: Envs.PERCENTAGE_PARSER
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NText model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NText model={model} layout={layout2} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NText model={model} layout={layout3} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
