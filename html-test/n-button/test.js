import * as SDK from '../../src/js/components/n-button'
import {NIcon, NStackIcon} from '../../src/js/components/n-icon'
import {NLabel} from '../../src/js/components/n-label'
import {NText} from '../../src/js/components/n-text'

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
			inline: false,
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
	let layoutL = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'link'
		},
		evt: {
			click: function(evt) {
				alert('link clicked')
			}
		}
	});
	let layoutDD = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'link',
			dropdownItems: [{
				label: 'Dropdown A',
				comp: {
					type: Envs.COMPONENT_TYPES.LABEL,
					textFromModel: false
				}
			}]
		},
		evt: {
			popoverOpen: function() {
				console.log(this, 'dropdown open');
			},
			popoverClose: function() {
				console.log(this, 'dropdown close');
			}
		}
	});
	let layoutDDC = new Layout('buttonA', {
		label: 'Button A',
		comp: {
			style: 'link',
			dropdownItems: [{
				label: 'Dropdown A',
				comp: {
					type: Envs.COMPONENT_TYPES.LABEL,
					textFromModel: false
				}
			}]
		},
		evt: {
			click: function() {
				alert('clicked');
			}
		}
	});
	let layoutT = new Layout('name', {
		comp: {
			placeholder: 'Input here',
			leftAddons: {
				label: 'Hi',
				comp: {
					type: Envs.COMPONENT_TYPES.BUTTON,
					style: 'link'
				},
				evt: {
					click: function() {
						alert(this.getLabel());
					}
				}
			},
			rightAddons: {
				label: 'Bye',
				comp: {
					type: Envs.COMPONENT_TYPES.BUTTON,
					style: 'link',
					dropdownItems:  [{
						label: 'Goodbye',
						comp: {
							type: Envs.COMPONENT_TYPES.LABEL,
							textFromModel: false
						},
						evt: {
							click: function() {
								alert(this.getLabel());
							}
						}
					}]
				},
				evt: {
					click: function() {
						alert(this.getLabel());
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
	let panel = (<div className='n-top-container' style={{marginTop: 20}}>
		<div className='n-row n-in-form'>
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
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutL} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutDD} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NButton model={model} layout={layoutDDC} />
			</div>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NText model={model} layout={layoutT} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
