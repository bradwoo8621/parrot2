import * as SDK from '../../src/js/components/n-panel'
import {NIcon} from '../../src/js/components/n-icon'

let {React, ReactDOM, CodeTable, Model, Layout, NPanel, NPanelHeader, NPanelBody, $, Envs} = SDK;

$(function() {
	let model = new Model({
	});
	model.addPostChangeListener('panel', function(evt) {
		console.log({
			new: evt.new,
			old: evt.old
		});
	});
	let layout = new Layout('panel', {
		label: 'A Panel',
		comp: {
		}
	});
	let layout2 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'primary'
		}
	});
	let layout3 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'success'
		}
	});
	let layout4 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'info',
			collapsible: true,
			collapsibleStyle: 'follow'
		}
	});
	let layout5 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'warning',
			collapsible: true,
			collapsibleStyle: 'lead'
		}
	});
	let layout6 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'danger',
			collapsible: true
		}
	});
	let layout7 = new Layout('panel', {
		label: 'A Panel',
		comp: {
			style: 'borderless'
		}
	});

	let panel = (<div className='n-top-container'>
		<div className='n-row n-in-form'>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout2} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout3} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout4} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout5} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout6} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout7} />
			</div>
			<div className='n-col-sm-12 n-col-md-6'>
				<NPanel model={model} layout={layout7}>
					<NPanelHeader n-comp-style='danger'>
						<span data-leading='1'>test</span>
						<NIcon n-comp-icon='ban' n-evt-click={function() {console.log(this)}}/>
					</NPanelHeader>
					<NPanelBody n-comp-style='success'>
						<span data-leading='1'>Body starting...</span>
					</NPanelBody>
				</NPanel>
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));

	window.testModel = model;
});
