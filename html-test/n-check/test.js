import * as SDK from '../../src/js/components/n-check'

let {React, ReactDOM, CodeTable, Model, Layout, NCheck, NArrayCheck, $, Envs} = SDK;

$(function() {
	let codes = new CodeTable({
		items: [{
			id: 1, 
			text: 'Item 1'
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
	model.addPostChangeListener('check', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	}).addPostChangeListener('checkA', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('check', {
		label: 'Check Me',
		comp: {
			labelDisplay: true
		}
	});
	let layoutNoLabel = new Layout('check', {
		label: 'Check Me',
		comp: {
		}
	})
	let layoutL = new Layout('check', {
		label: 'Check Me',
		comp: {
			textOnLeft: true,
			labelDisplay: true
		}
	});
	let layoutA = new Layout('checkA', {
		label: 'Check Me',
		comp: {
			codes: codes,
			vertical: true
		}
	});
	let layoutAL = new Layout('checkA', {
		label: 'Check Me',
		comp: {
			codes: codes,
			textOnLeft: true
		}
	});
	let layoutLT = new Layout('checkB', {
		label: 'Check Me',
		comp: {
			codes: longTextCodes
		}
	})

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NCheck model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NCheck model={model} layout={layoutNoLabel} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NCheck model={model} layout={layoutL} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NArrayCheck model={model} layout={layoutA} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NArrayCheck model={model} layout={layoutAL} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NArrayCheck model={model} layout={layoutLT} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
