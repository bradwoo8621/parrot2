import * as SDK from '../../src/js/components/n-select'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NSelect,
	$, 
	Envs} = SDK;

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
	let layoutL = new Layout('value', {
		label: 'Check Me',
		comp: {
			codes: codes,
		}
	});
	let layoutLM = new Layout('values', {
		label: 'Check Me',
		comp: {
			codes: codes,
			multiple: true
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutL} />
			</div>
			<div className='n-col-sm-6 n-col-md-3'>
				<NSelect model={model} layout={layoutLM} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
