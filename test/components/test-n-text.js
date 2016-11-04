require("babel-register")({
	"presets": [
		"react", 
		"es2015"
	],
	"plugins": [
		"transform-react-jsx",
		"transform-class-properties"
	]
});

const {NText} = require('../../src/js/components/n-text');
const {Model} = require('../../src/js/model/model');
const {Layout} = require('../../src/js/layout/layout');
const {Envs} = require('../../src/js/envs');

const assert = require('assert');

describe('NText', function() {
	describe('#constructor', function() {
		it('--Properties test', function() {
			let model = new Model({});
			let layout = new Layout('amount', {
				comp: {
					placeholder: 'test-placeholder',
					formatter: {
						display: Envs.NUMBER_FORMATTER,
						model: Envs.NUMBER_PARSER
					}
				}
			});

			let text = new NText({
				model: model,
				layout: layout
			});

			assert.equal(text.getInputKind(), 'text');
			assert.equal(text.getPlaceholder(), 'test-placeholder');
		});
	});
});