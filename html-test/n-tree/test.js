import * as SDK from '../../src/js/components/n-tree'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NTree,
	$, 
	Envs} = SDK;

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
			text: 'World Map 世界地图 ; 世界地图 ; 全世界电子地图 ; 地界地图',
			children: [{
				id: 31,
				text: 'Asia'
			}, {
				id: 32,
				text: 'Europe'
			}]
		}, {
			id: 4,
			text: 'Item 4',
			children: [{
				id: 41,
				text: 'Item 4-1'
			}, {
				id: 42,
				text: 'Item 4-2'
			}]
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
		label: 'Tree',
		comp: {
			codes: codes,
			noWrap: false
		}
	});
	let layoutNR = new Layout('value', {
		label: 'Tree',
		comp: {
			codes: codes,
			showRoot: false
		}
	});
	let layoutMM = new Layout('value', {
		label: 'Tree',
		comp: {
			codes: codes,
			minHeight: 200,
			maxHeight: 250
		}
	});


	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTree model={model} layout={layout} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTree model={model} layout={layoutNR} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NTree model={model} layout={layoutMM} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
