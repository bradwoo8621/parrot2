import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

import {Model, Layout, NDialog, NDialogUtil, Envs} from '../../src/js/components/n-dialog'
import {NText} from '../../src/js/components/n-text'
import {NButton} from '../../src/js/components/n-button'

$(function() {
	let model = new Model({
		name: 'test'
	});
	model.addPostChangeListener('name', function(evt) {
		// console.log(this);
		// console.log(evt);
		console.log(evt)
	});
	let layout = new Layout('name', {
		comp: {
			content: {
				label: 'A Dialog',
				comp: {
					children: {
						name: {
							pos: {width: 3, row: 10}
						},
						button: {
							label: 'Close',
							comp: {
								type: Envs.COMPONENT_TYPES.BUTTON
							},
							evt: {
								click: function() {
									dialog.hide();
								}
							},
							pos: {width: 3, row: 20}
						}
					}
				}
			}
		}
	});

	let dialog = NDialogUtil.createDialog({
		model: model,
		layout: layout
	});
	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-3 n-col-md-3'>
				<NButton model={model} 
						 n-id='test'
						 n-label='Standard'
						 n-evt-click={()=>{dialog.show()}} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
