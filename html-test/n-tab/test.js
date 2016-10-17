import * as SDK from '../../src/js/components/n-tab'
import {NIcon} from '../../src/js/components/n-icon'
import {NLabel} from '../../src/js/components/n-label'
import {NText} from '../../src/js/components/n-text'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NTab,
	NArrayTab,
	$, 
	Envs} = SDK;

$(function() {
	let model = new Model({
		items: [{
			name: 'name a',
			age: 15
		}, {
			name: 'name b',
			age: 20
		}],
		amount: 5
	});
	// model.addPostChangeListener('panel', function(evt) {
	// 	console.log({
	// 		new: evt.new,
	// 		old: evt.old
	// 	});
	// });
	let layout = new Layout('tab', {
		comp: {
			style: 'primary',
			tabs: [{
				label: 'Tab A',
				style: 'success',
				leadChildren: {
					icon: {
						comp: {
							type: Envs.COMPONENT_TYPES.ICON,
							icon: 'cc'
						}
					}
				},
				children: {
					name: {}
				}
			}, {
				label: function() {
					return 'Tab B';
				},
				style: 'danger'
			}, {
				label: 'Cannot Active'
			}, {
				label: 'A Promise'
			}],
			leadChildren: {
				icon: {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: 'plane'
					}
				}
			},
			children: {
				amount: {}
			}
		},
		evt: {
			shouldActive: function(evt) {
				switch(evt.ndata.tabIndex) {
					case 2:
						return false;
					case 3:
						let promise = $.Deferred();
						setTimeout(() => {
							promise.resolve();
						}, 3000)
						return promise;
					default:
						return true;
				}
			},
			active: function(evt) {
				console.log(evt.ndata);
			}
		}
	});

	let layoutAT = new Layout('items', {
		label: function() {
			return this.getModel().get('name');
		},
		comp: {
			style: 'primary',
			addable: true,
			removable: true,
			children: {
				age: {}
			},
			leadChildren: {
				icon: {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: function() {
							let age = this.getModel().get('age');
							return age >= 18 ? 'user' : 'child';
						}
					}
				}
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-12 n-col-md-6'>
				<NTab model={model} layout={layout} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NArrayTab model={model} layout={layoutAT} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
