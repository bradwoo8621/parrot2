import * as SDK from '../../src/js/components/n-label'
import {NIcon, NStackIcon} from '../../src/js/components/n-icon'

let {React, ReactDOM, Model, Layout, NLabel, $, Envs} = SDK;

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
			lead: {
				comp: {
					type: Envs.COMPONENT_TYPES.ICON,
					icon: 'ban'
				}
			},
			tail: {
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
	});

	let layout2 = new Layout('amount', {
		comp: {
			formatter: {
				display: Envs.NUMBER_FORMATTER
			}
		},
		styles: {comp: 'text-right'}
	});
	let layout3 = new Layout('rate', {
		comp: {
			formatter: {
				display: Envs.NUMBER_FORMATTER
			},
			transformer: {
				display: Envs.PERCENTAGE_FORMATTER
			}
		}
	});
	let layout4 = new Layout('label', {
		label: 'This is a label',
		comp: {
			textFromModel: false
		}
	});
	let layout5 = new Layout('amount', {
		label: function() {
			return 'This is a value ' + this.getValueFromModel();
		},
		comp: {
			formatter: {
				display: Envs.NUMBER_FORMATTER
			},
			textFromModel: false
		},
		evt: {
			click: function() {
				alert(`Value of amount is ${this.getValueFromModel()}`);
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model} layout={layout2} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model} layout={layout3} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model} layout={layout4} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model} layout={layout5} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NLabel model={model}
						n-id='amount'
						n-label={function() {
							return 'This is a label ' + this.getValueFromModel();
						}}
						n-comp-formatter-display={Envs.NUMBER_FORMATTER}
						n-comp-textFromModel={false}
						n-evt-click={function() {
							alert(`Amount is ${this.getValueFromModel()}`);
						}} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
