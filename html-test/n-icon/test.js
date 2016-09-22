import * as SDK from '../../src/js/components/n-icon'

let {React, ReactDOM, Model, Layout, NIcon, NStackIcon, $} = SDK;

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
			icon: 'ban'
		},
		evt: {
			click: function(evt) {
				alert('ban clicked')
			}
		}
	});
	let stackLayout = new Layout('name', {
		comp: {
			backicon: 'ban !text-danger',
			foreicon: 'camera'
		},
		evt: {
			click: function(evt) {
				alert('ban camera clicked')
			}
		}
	});
	let panel = (<div className='n-top-container'>
		<div className='n-row'>
			<div className='n-col-sm-3 n-col-md-3 n-col-lg-3'>
				<NIcon model={model} layout={layout} />
				<NStackIcon model={model} layout={stackLayout} />
			</div>
		</div>
	</div>);
	ReactDOM.render(panel, document.getElementById('main'));
});
