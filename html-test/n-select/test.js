import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import {CodeTable, Model, Layout, NSelect, Envs} from '../../src/js/components/n-select'
import {NTree}from '../../src/js/components/n-tree'

$(function() {
	let codes = new CodeTable({
		items: [{
			id: 1, 
			text: 'Item 1',
			icon: 'plane'
		}, {
			id: 2, 
			text: 'Item 2'
		}, {
			id: 3,
			text: 'World Map 世界地图 ; 世界地图 ; 全世界电子地图 ; 地界地图'
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
			text: 'Item 9'
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
	let layoutL = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes,
			placeholder: 'Hello!'
		}
	});
	let layoutLF = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes
		}
	});
	let layoutLM = new Layout('values', {
		label: 'Check Me',
		comp: {
			codes: codes,
			multiple: true
		}
	});
	let layoutLMF = new Layout('values', {
		label: 'Check Me',
		comp: {
			codes: codes,
			multiple: true
		}
	});
	let layoutT = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes,
			placeholder: 'Please Select...',
			dropdown: {
				comp: {
					type: Envs.COMPONENT_TYPES.TREE
				}
			}
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutL} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutLF} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutLM} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutLMF} />
			</div>
		</div>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutT} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
