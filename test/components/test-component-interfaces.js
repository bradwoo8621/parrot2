require("babel-register")({
	"presets": [
		"react", 
		"es2015"
	],
	"plugins": [
		"transform-react-jsx"
	]
});

const {Model} = require('../../src/js/model/model');
const {Layout} = require('../../src/js/layout/layout');
const SDK = require('../../src/js/components/n-component');

const assert = require('assert');

describe('BaseComponent', function() {
	describe('#constructor', function() {
		it('--4 properties can be passed', function() {
			let model = new Model({});
			let layout = new Layout('test', {});
			let comp = new SDK.BaseComponent({
				model: model,
				layout: layout,
				orientation: 'v',
				viewMode: false
			});
			assert.equal(comp.getModel(), model);
			assert.equal(comp.getLayout(), layout);
			assert.equal(comp.getOrientation(), 'v');
			assert.equal(comp.isViewMode(), false);
		});

		it('--Orientation can be horizontal & default view mode is false', function() {
			comp = new SDK.BaseComponent({
				orientation: 'h'
			});
			assert.equal(comp.getOrientation(), 'h');
			assert.equal(comp.isViewMode(), false);
		});

		it('--View mode can be true', function() {
			comp = new SDK.BaseComponent({
				viewMode: true
			});
			assert.equal(comp.isViewMode(), true);
		});
	});
});
describe('RichLayoutComponent', function() {
	let model = new Model({});
	describe('#getId', function() {
		it('--Id getter & default data id is id', function() {
			let layout = new Layout('test-id', {
			});
			let comp = new SDK.RichLayoutComponent({
				model: model,
				layout: layout
			});
			assert.equal(comp.getId(), 'test-id');
			assert.equal(comp.getDataId(), 'test-id');
		});
	});
	describe('#getDataId', function() {
		it('--Different data id set', function() {
			let layout = new Layout('test-id', {
				dataId: 'test-data-id'
			});
			let comp = new SDK.RichLayoutComponent({
				model: model,
				layout: layout
			});
			assert.equal(comp.getId(), 'test-id');
			assert.equal(comp.getDataId(), 'test-data-id');
		});
	});
});

describe('ModelObservedComponent', function() {
	describe('#detectMonitors', function() {
		it('--Should trigger handler, can be setup and tear down', function() {
			let model = new Model({});
			let model2 = new Model({});
			let newTestPropValue;
			let newTestPropValue2;
			let layout = new Layout('test-id', {
				comp: {
					enabled: {
						depends: 'testProp'
					},
					visible: {
						depends: [{on: 'a', id: 'testProp2'}, 'testProp']
					},
					additionalModel: model2,
					usePrimaryModel: true
				}
			});
			class AComp extends SDK.ModelObservedComponent {
				enabledHandler() {
					newTestPropValue = this.getModel().get('testProp');
				}
				visibleHandler() {
					newTestPropValue = this.getModel().get('testProp');
					newTestPropValue2 = this.getAdditionalModel().get('testProp2');
				}
			}
			let comp = new AComp({
				model: model,
				layout: layout
			});
			comp.detectMonitors(['enabled'], comp.enabledHandler);
			model.set('testProp', 'test-value');
			assert.equal(newTestPropValue, 'test-value');
			assert.equal(model.getListeners('testProp').length, 1);

			comp.undetectMonitors(['enabled'], comp.enabledHandler);
			assert.equal(model.getListeners('testProp').length, 0);

			comp.detectMonitors(['visible'], comp.visibleHandler);
			model.set('testProp', 'test-value1');
			assert.equal(newTestPropValue, 'test-value1');
			assert.equal(true, newTestPropValue2 == null);
			model2.set('testProp2', 'test-value2');
			assert.equal(newTestPropValue, 'test-value1');
			assert.equal(newTestPropValue2, 'test-value2');
		});
	});
});