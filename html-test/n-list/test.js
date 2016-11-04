import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import {CodeTable, Model, Layout, NList, Envs} from '../../src/js/components/n-list'

$(function() {
	let codes = new CodeTable({
		items: [{
			id: 1, 
			text: 'Item 1'
		}, {
			id: 2, 
			text: 'Item 2',
			icon: 'plane'
		}, {
			id: 3, 
			text: 'Item 3'
		}, {
			id: 4, 
			text: 'Item 4'
		}, {
			id: 5, 
			text: 'Item 5'
		}, {
			id: 6, 
			text: 'Item 6'
		}, {
			id: 7, 
			text: 'Item 7'
		}, {
			id: 8, 
			text: 'Item 8'
		}, {
			id: 9, 
			text: 'Item 9 abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
		}, {
			id: 10, 
			text: 'Item 10'
		}, {
			id: 11, 
			text: 'Item 11'
		}, {
			id: 12, 
			text: 'Item 12'
		}]
	});
	let model = new Model({
	});
	model.addPostChangeListener('value', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('value', {
		label: 'List',
		comp: {
			codes: codes,
			noWrap: false,
			iconable: true,
			itemIcon: function(item) {
				if (item.id == 1) {
					return 1;
				} else {
					return 'car';
				}
			}
		}
	});
	let layoutNW = new Layout('value', {
		label: 'List',
		comp: {
			codes: codes,
			noWrap: true
		}
	});
	let layoutC = new Layout('value', {
		label: 'List',
		comp: {
			codes: codes,
			checkable: true
		}
	});
	let layoutCM = new Layout('values', {
		label: 'List',
		comp: {
			codes: codes,
			iconable: true,
			itemIcon: function(item) {
				if (item.id == 1) {
					return 1;
				} else {
					return 'car';
				}
			},
			checkable: true,
			multiple: true
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NList model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NList model={model} layout={layoutNW} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NList model={model} layout={layoutC} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NList model={model} layout={layoutCM} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
