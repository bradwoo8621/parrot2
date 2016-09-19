require("babel-register")({
	"presets": [
		"react", 
		["es2015", { "loose": true }]
	],
	"plugins": [
		"transform-react-jsx"
	]
});

const {Model} = require('../src/js/model/model');

const assert = require('assert');


describe('Model', function() {
	describe('#constuctor', function() {
		it('--Should construct a model', function() {
			assert.ok(new Model({}));
		});
	});
	describe('#postChangeListener', function() {
		let model = new Model();
		let listener = function(evt) {
			assert.equal(evt.id, 'test');
			assert.equal(evt.time, 'post');
			assert.equal(evt.type, 'change');
			assert.equal(evt.new, 'b');
			assert.equal(evt.old, 'a');
			assert.equal(evt.model, model);
			assert.equal(this, model);
		};
		it('--Should have one post change listener', function() {
			model.addPostChangeListener('test', listener);
			let listeners = model.getListeners('test');
			assert.equal(listeners.length, 1);
		});
		it('--Should handle post change event', function() {
			model.firePostChangeEvent('test', 'a', 'b');
		})
	});
});