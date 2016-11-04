import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import {CodeTable, Model} from '../../src/js/model/model'
import {Layout} from '../../src/js/layout/layout'
import {Envs} from '../../src/js/envs'
import {NRadio, NRadioButton} from '../../src/js/components/n-radio'
import {NButton} from '../../src/js/components/n-button'
import {NIcon} from '../../src/js/components/n-icon'

$(function() {
	let codes = new CodeTable({
		items: [{
			id: 1, 
			text: 'Item 1',
			icon: 'plane'
		}, {
			id: 2, 
			text: 'Item 2'
		}]
	});
	let longTextCodes = new CodeTable({
		items: [{
			id: 1,
			text: 'World Map 世界地图 ; 世界地图 ; 全世界电子地图 ; 地界地图'
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
		label: 'Check Me',
		comp: {
			codes: codes,
		}
	});
	let layoutL = new Layout('value', {
		label: 'Check Me',
		comp: {
			textOnLeft: true,
			codes: codes,
		}
	});
	let layoutV = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes,
			vertical: true
		}
	});
	let layoutLT = new Layout('valueA', {
		label: 'Check Me',
		comp: {
			codes: longTextCodes
		}
	});
	let layoutRB = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes,
			style: 'primary',
			checkedStyle: 'success'
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NRadio model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NRadio model={model} layout={layoutL} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NRadio model={model} layout={layoutV} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NRadio model={model} layout={layoutLT} />
			</div>
		</div>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NRadioButton model={model} layout={layoutRB} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
