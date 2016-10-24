import * as SDK from '../../src/js/components/n-panel'
import {NIcon} from '../../src/js/components/n-icon'
import {NCheck} from '../../src/js/components/n-check'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NPanel, 
	NPanelHeader, 
	NPanelBody, 
	NArrayPanel,
	$, 
	Envs} = SDK;

$(function() {
	let model = new Model({
		items: [{}, {}]
	});
	model.addPostChangeListener('panel', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('panel', {
		label: 'A Panel',
		comp: {
		}
	});
	let layout2 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'primary'
		}
	});
	let layout3 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'success'
		}
	});
	let layout4 = new Layout('panel', {
		label: function() {
			return 'A Panel Of ' + (this.isExpanded() ? 'Expanded' : 'Collapsed');
		},
		comp: {
			style: 'info',
			collapsible: true,
			collapsibleStyle: 'follow',
			leadChildren: {
				'icon': {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: 'ban'
					}
				}
			},
			tailChildren: {
				'icon': {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: 'close'
					}
				}
			}
		}
	});
	let layout5 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'warning',
			collapsible: true,
			collapsibleStyle: 'lead',
			children: {
				icon: {
					comp: {
						type: Envs.COMPONENT_TYPES.ICON,
						icon: 'ban'
					},
					pos: {width: 3}
				}
			}
		}
	});
	let layout6 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'danger',
			collapsible: function() {
				return this.getModel().get('checked');
			},
			expanded: function() {
				return this.getModel().get('checked') === true;
			},
			body: {
				comp: {
					style: 'primary',
					children: {
						'icon': {
							comp: {
								type: Envs.COMPONENT_TYPES.ICON,
								icon: 'ban'
							},
							pos: {width: 3}
						}
					}
				}
			},
			tailChildren: {
				'checked': {
					label: 'Check Me',
					comp: {
						type: Envs.COMPONENT_TYPES.CHECK_NL,
						labelDisplay: true
					}
				}
			},
			watch: {
				depends: 'checked',
				rule: function() {
					let checked = this.getModel().get('checked');
					if (checked) {
						this.expand();
					} else {
						this.collapse();
					}
				}
			}
		}
	});
	let layout7 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'borderless'
		}
	});

	let layoutAP = new Layout('items', {
		label: function() {
			return `Item ${this.getLayoutOptionValue('itemIndex')}`;
		},
		comp: {
			style: 'primary',
			collapsible: true,
			expanded: function() {
				return this.getLayoutOptionValue('itemIndex') == 0;
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout2} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout3} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout4} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout5} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout6} >
					<NPanelHeader>
						<span> More Text...</span>
					</NPanelHeader>
					<NPanelBody>
						<div data-leading='1'>Body starting...</div>
						<div>Body ending...</div>
					</NPanelBody>
				</NPanel>
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout7} >
				</NPanel>
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout7}>
					<NPanelHeader n-comp-style='danger'>
						<span data-leading='1'>test</span>
						<NIcon n-comp-icon='ban' n-evt-click={function() {console.log(this)}}/>
					</NPanelHeader>
					<NPanelBody n-comp-style='success'>
						<span data-leading='1'>Body starting...</span>
					</NPanelBody>
				</NPanel>
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NArrayPanel model={model} layout={layoutAP} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
