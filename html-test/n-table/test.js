import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import {Model} from '../../src/js/model/model'
import {Layout} from '../../src/js/layout/layout'
import {Envs} from '../../src/js/envs'
import {NTable, NTableHeader, NTableBody} from '../../src/js/components/n-table'
import {NLabel} from '../../src/js/components/n-label'
import {NText} from '../../src/js/components/n-text'
import {NCheck} from '../../src/js/components/n-check'

$(function() {
	let model = new Model({
		items: [{
			selected: false,
			name: 'name a',
			age: 15,
			gender: 'F'
		}, {
			selected: true,
			name: 'name b',
			age: 20,
			gender: 'M'
		}]
	});
	let viewModel = new Model({}).addPostChangeListener('selected', function(evt) {
		let selected = evt.new;
		let items = model.get('items');
		if (items) {
			items.forEach(function(item) {
				item.selected = selected;
			});
			model.firePostChangeEvent('items', items, items);
		}
	});
	let layout = new Layout('items', {
		comp: {
			columns: [{
				header: '#',
				dataId: 'index',
				sorter: false,
				body: {
					label: function() {
						return this.getLayoutOptionValue('rowIndex') + 1;
					},
					comp: {
						type: Envs.COMPONENT_TYPES.LABEL,
						textFromModel: false
					}
				},
				width: {xs: 'hidden', sm: 'index'}
			}, {
				header: {
					comp: {
						type: Envs.COMPONENT_TYPES.CHECK,
						additionalModel: viewModel,
						usePrimaryModel: false
					}
				},
				dataId: 'selected',
				sorter: false,
				body: {
					comp: {
						type: Envs.COMPONENT_TYPES.CHECK
					}
				},
				width: {xs: 'select', sm: 'select'}
			}, {
				header: 'Name',
				dataId: 'name',
				width: {xs: '12-40', sm: 4, md: 4, lg: 4}
			}, {
				header: 'Age',
				dataId: 'age',
				width: {xs: 12, sm: '4-40', md: '4-40', lg: '4-40'}
			}, {
				dataId: 'gender',
				header: {
					label: 'Gender',
					comp: {
						type: Envs.COMPONENT_TYPES.LABEL,
						textFromModel: false
					}
				},
				body: {
					comp: {
						type: Envs.COMPONENT_TYPES.LABEL,
						formatter: {
							display: function(value) {
								let texts = {
									F: 'Female',
									M: 'Male'
								};
								return texts[value];
							}
						}
					}
				},
				width: {xs: 12, sm: '4-40', md: '4-40', lg: '4-40'}
			}, {
				// dataId: 'columnD',
				header: {
					a: {
						label: 'Name',
						comp: {
							type: Envs.COMPONENT_TYPES.LABEL,
							textFromModel: false
						},
						pos: {col: 10, width: 6}
					},
					b: {
						label: 'Age',
						comp: {
							type: Envs.COMPONENT_TYPES.LABEL,
							textFromModel: false
						},
						pos: {col: 20, width: 6}
					}
				},
				body: {
					name: {
						comp: {
							type: Envs.COMPONENT_TYPES.TEXT
						},
						pos: {col: 10, width: 6}
					},
					age: {
						comp: {
							type: Envs.COMPONENT_TYPES.TEXT
						},
						pos: {col: 20, width: 6}
					}
				},
				width: {xs: 12, sm: 6, md: 4, lg: 4}
			}, {
				header: '',
				sorter: false,
				body: {
					edit: {
						comp: {
							type: Envs.COMPONENT_TYPES.ICON,
							icon: 'pencil'
						},
						evt: {
							click: function() {
							}
						}
					},
					remove: {
						comp: {
							type: Envs.COMPONENT_TYPES.ICON,
							icon: 'close',
							visible: {
								depends: 'age',
								rule: function() {
									return this.getModel().get('age') > 18;
								}
							}
						},
						evt: {
							click: function() {
								console.log(this.getModel());
							}
						}
					}
				},
				width: {xs: 12, sm: 6, md: 4, lg: 4}
			}],
			sortable: true,
			columnsOfGrid: {
				md: 20,
				lg: 20
			}
		},
		evt: {
			itemChange: function() {
				console.log(arguments);
			}
		}
	})

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-12 n-col-md-12 n-col-lg-11'>
				<NTable model={model} layout={layout} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
	window.testViewModel = viewModel;
});
