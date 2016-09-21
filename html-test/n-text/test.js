import * as SDK from '../../src/js/components/n-text'

let {React, ReactDOM, Model, Layout, NText} = SDK;

let model = new Model({});
let layout = new Layout('name', {
	comp: {
		placeholder: 'Input here'
	}
});

ReactDOM.render(<NText model={model} layout={layout}/>, document.getElementById('main'));