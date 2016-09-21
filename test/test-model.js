require("babel-register")({
	"presets": [
		"react", 
		"es2015"
	],
	"plugins": [
		"transform-react-jsx"
	]
});

const MDK = require('../src/js/model/model');

const assert = require('assert');


describe('Model', function() {
	describe('#constuctor', function() {
		let json = {
			name: 'test-name',
			addresses: [{
				line1: 'test-line1'
			}, {
				line2: 'test-line2'
			}]
		};
		let model = new MDK.Model(json);
		it('--Should construct a model', function() {
			assert.ok(model);
		});
		it('--Should have shadow model', function() {
			assert.equal(false, model.getBaseModel() === model.getCurrentModel());
			assert.equal(true, model.getBaseModel() === json);
			assert.equal(false, json === model.getCurrentModel());
			assert.deepEqual(model.getCurrentModel(), json);

			assert.equal(false, json.addresses === model.get('addresses'));
			assert.equal(false, json.addresses[0] === model.get('addresses')[0]);
			assert.equal(false, json.addresses[1] === model.get('addresses')[2]);
			assert.deepEqual(json.addresses, model.get('addresses'));
		});
	});
	describe('#postChangeListener', function() {
		let model = new MDK.Model();
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
		});
		it('--Should have no post change listener', function() {
			model.removePostChangeListener('test', listener);
			let listeners = model.getListeners('test');
			assert.equal(listeners.length, 0);
		});
	});
	describe('#get', function() {
		let model = new MDK.Model({
			name: 'test-name',
			address: {
				line1: 'test-line1'
			}
		});
		it('--Should get directly property value', function() {
			assert.equal(model.get('name'), 'test-name');
			assert.equal(model.get('name1') == null, true);
		});
		it('--Should get deep property value', function() {
			assert.equal(model.get('address.line1'), 'test-line1');
		});
	});
	describe('#set', function() {
		let model = new MDK.Model({});
		let newName;
		let nameListener = function(evt) {
			newName = evt.new;
		};
		model.addPostChangeListener('name', nameListener);
		let newAddress;
		let addressListener = function(evt) {
			newAddress = evt.new;
		};
		model.addPostChangeListener('address.line1', addressListener);
		it('--Should set directly property value', function() {
			model.set('name', 'test-name');
			assert.equal(model.get('name'), 'test-name');
			assert.equal(newName, 'test-name');
		});
		it('--Should set deep property value', function() {
			model.set('address.line1', 'test-line1');
			assert.equal(model.get('address.line1'), 'test-line1');
			assert.equal(newAddress, 'test-line1');

			model.removePostChangeListener('address.line1', addressListener);
			model.set('address.line1', 'test-line2');
			assert.equal(model.get('address.line1'), 'test-line2');
			assert.equal(newAddress, 'test-line1');

			// test regex listener
			model.addPostChangeListener(/address\..*/, addressListener);
			model.set('address.line1', 'test-line3');
			assert.equal(model.get('address.line1'), 'test-line3');
			assert.equal(newAddress, 'test-line3');

			model.set('address.line2', 'test-line4');
			assert.equal(model.get('address.line2'), 'test-line4');
			assert.equal(newAddress, 'test-line4');

			let listeners = model.getListeners(/address\..*/);
			assert.equal(listeners.length, 1);
			model.removePostChangeListener(/address\..*/, addressListener);
			model.set('address.line1', 'test-line5');
			assert.equal(model.get('address.line1'), 'test-line5');
			assert.equal(newAddress, 'test-line4');

			// test all listener
			model.addPostChangeListener('', addressListener);
			model.set('address.line1', 'test-line6');
			assert.equal(model.get('address.line1'), 'test-line6');
			assert.equal(newAddress, 'test-line6');

			model.set('address.line2', 'test-line7');
			assert.equal(model.get('address.line2'), 'test-line7');
			assert.equal(newAddress, 'test-line7');
		});
	});
});