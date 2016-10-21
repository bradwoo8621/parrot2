import * as SDK from '../../src/js/components/n-table'
import {NLabel} from '../../src/js/components/n-label'
import {NText} from '../../src/js/components/n-text'
import {NCheck} from '../../src/js/components/n-check'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NTable,
	NTableHeader,
	NTableBody,
	$, 
	Envs} = SDK;

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
				header: '',
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
						pos: {col: 10}
					},
					b: {
						label: 'Age',
						comp: {
							type: Envs.COMPONENT_TYPES.LABEL,
							textFromModel: false
						},
						pos: {col: 20}
					}
				},
				body: {
					name: {
						comp: {
							type: Envs.COMPONENT_TYPES.TEXT
						},
						pos: {col: 10}
					},
					age: {
						comp: {
							type: Envs.COMPONENT_TYPES.TEXT
						},
						pos: {col: 20}
					}
				},
				width: {xs: 12, sm: 6, md: 4, lg: 4}
			}, {
				header: 'Column E',
				dataId: 'columnE',
				width: {xs: 12, sm: 6, md: 4, lg: 4}
			}],
			sortable: true
		},
		styles: {
			comp: 'n-row-md-20c n-row-lg-20c'
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
});
