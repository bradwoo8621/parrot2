import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import {CodeTable, Model} from '../../src/js/model/model'
import {Validator} from '../../src/js/model/validation'
import {Layout} from '../../src/js/layout/layout'
import {Envs} from '../../src/js/envs'
import {NForm} from '../../src/js/components/n-form'
import {NText} from '../../src/js/components/n-text'
import {NButton} from '../../src/js/components/n-button'
import {NArrayPanel} from '../../src/js/components/n-panel'
import {NArrayTab} from '../../src/js/components/n-tab'

$(function() {
	let model = new Model({
		items: [{}, {}]
	});
	let validator = new Validator({
		p1: {
			name: {
				label: '"Name"',
				minlen: {
					params: 5,
					level: Validator.LEVEL_INFO
				},
				maxlen: 3
			},
			items: {
				child: {
					name: {
						label: 'NameIP',
						minlen: 5
					}
				}
			}
		},
		p2: {
			name1: {
				label: 'Name',
				minlen: {
					params: 5,
					level: Validator.LEVEL_WARN
				}
			}
		}
	}, true);
	validator.setPerspective('p1');
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
					pos: {width: {sm: 6, md: 3}, col: 100, row: 100}
				},
				age: {
					label: 'Age',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: {sm: 6, md: 3}, col: 200, row: 100}
				},
				name1: {
					label: 'Name 1',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: 'sm-6,md-3', col: 300, row: 100, clear: 'both:sm,none:md'}
				},
				name2: {
					label: 'Name 2',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: {sm: 6, md: 3}, col: 400, row: 100}
				},
				name3: {
					label: 'Name 3',
					comp: {
						type: Envs.COMPONENT_TYPES.TEXT
					},
					pos: {width: {sm: 6, md: 3}, col: 500, row: 100, clear: true}
				},
				button: {
					label: 'Perspective',
					comp: {
						type: Envs.COMPONENT_TYPES.BUTTON
					},
					evt: {
						click: function() {
							validator.setPerspective('p2');
						}
					},
					pos: {width: {sm: 6, md: 3}, col: 600, row: 100}
				},
				items: {
					label: function() {
						return `Panel Title ${this.getLayoutOptionValue('itemIndex')}`;
					},
					comp: {
						type: Envs.COMPONENT_TYPES.ARRAY_PANEL,
						children: {
							name: {
								label: 'Name In Panel',
								comp: {
									type: Envs.COMPONENT_TYPES.TEXT
								},
								pos: {width: 6, col: 100, row: 100}
							},
							age: {
								label: 'Age In Panel',
								comp: {
									type: Envs.COMPONENT_TYPES.TEXT
								},
								pos: {width: 6, col: 200, row: 100}
							}
						}
					},
					pos: {width: {sm: 12, md: 6}, col: 100, row: 200}
				},
				items1: {
					label: function() {
						return `Tab Title ${this.getLayoutOptionValue('tabIndex')}`;
					},
					dataId: 'items',
					comp: {
						type: Envs.COMPONENT_TYPES.ARRAY_TAB,
						children: {
							name: {
								label: 'Name In Panel',
								comp: {
									type: Envs.COMPONENT_TYPES.TEXT
								},
								pos: {width: 6, col: 100, row: 100}
							},
							age: {
								label: 'Age In Panel',
								comp: {
									type: Envs.COMPONENT_TYPES.TEXT
								},
								pos: {width: 6, col: 200, row: 100}
							}
						}
					},
					pos: {width: {sm: 12, md: 6}, col: 200, row: 200}
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
