import * as SDK from '../../src/js/components/n-table'

let {
	React, 
	ReactDOM, 
	CodeTable, 
	Model, 
	Layout, 
	NTable,
	$, 
	Envs} = SDK;

$(function() {
	let model = new Model({
		items: [{
			name: 'name a',
			age: 15
		}, {
			name: 'name b',
			age: 20
		}]
	});
	let layout = new Layout('items', {
		comp: {
			columns: [{
				title: 'Name',
				width: {sm: 4, md: 4, lg: 4}
			}, {
				title: 'Age',
				width: {sm: 4, md: 4, lg: 4}
			}, {
				title: 'Column C',
				width: {sm: 4, md: 4, lg: 4}
			}, {
				title: 'Column D',
				width: {sm: 6, md: 4, lg: 4}
			}, {
				title: 'Column E',
				width: {sm: 6, md: 4, lg: 4}
			}],
		},
		styles: {
			comp: 'n-row-md-20c n-row-lg-20c'
		}
	})

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-12 n-col-md-12 n-col-lg-9'>
				<NTable model={model} layout={layout} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
