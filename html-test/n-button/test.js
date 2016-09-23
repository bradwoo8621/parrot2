import * as SDK from '../../src/js/components/n-button'
import {NIcon, NStackIcon} from '../../src/js/components/n-icon'

let {React, ReactDOM, Model, Layout, NButton, $, Envs} = SDK;


$(function() {
	let model = new Model({
		name: 'test'
	});
	let layout = new Layout('buttonA', {
		label: 'Button A',
		evt: {
			click: function(evt) {
				alert('button a clicked')
			}
		}
	});
	let layoutP = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'primary',
			leftIcon: {
				comp: {
					type: Envs.COMPONENT_TYPES.ICON,
					icon: 'ban'
				}
			}
		},
		evt: {
			click: function(evt) {
				alert('primary clicked')
			}
		}
	});
	let layoutS = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'success',
			rightIcon: {
				comp: {
					type: Envs.COMPONENT_TYPES.STACK_ICON,
					foreicon: 'plane',
					backicon: 'ban !text-danger'
				}
			}
		},
		evt: {
			click: function(evt) {
				alert('success clicked')
			}
		}
	});
	let layoutW = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'warning'
		},
		evt: {
			click: function(evt) {
				alert('warning clicked')
			}
		}
	});
	let layoutI = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'info'
		},
		evt: {
			click: function(evt) {
				alert('info clicked')
			}
		}
	});
	let layoutD = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'danger',
			inline: true,
			rightIcon: {
				comp: {
					type: Envs.COMPONENT_TYPES.STACK_ICON,
					foreicon: 'plane',
					backicon: 'ban !text-primary'
				}
			},
			leftIcon: {
				comp: {
					type: Envs.COMPONENT_TYPES.ICON,
					icon: 'ban'
				}
			}
		},
		evt: {
			click: function(evt) {
				alert('danger clicked')
			}
		}
	});
	let panel = (<div className='n-top-container' style={{marginTop: 20}}>
		<div className='n-row'>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layout} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutP} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutS} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutW} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutI} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutD} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
