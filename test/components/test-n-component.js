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

const {NComponent} = require('../../src/js/components/n-component');
const {Model} = require('../../src/js/model/model');
const {Layout} = require('../../src/js/layout/layout');
const $ = require('jquery-deferred');

const assert = require('assert');

describe('NComponent', function() {
	describe('#constructor', function() {
		it('--4 properties can be passed', function() {
			let model = new Model({});
			let layout = new Layout('test', {});
			let comp = new NComponent({
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
			let comp = new NComponent({
				orientation: 'h'
			});
			assert.equal(comp.getOrientation(), 'h');
			assert.equal(comp.isViewMode(), false);
		});

		it('--View mode can be true', function() {
			let comp = new NComponent({
				viewMode: true
			});
			assert.equal(comp.isViewMode(), true);
		});
	});
	describe('#getId', function() {
		it('--Id getter & default data id is id', function() {
			let model = new Model({});
			let layout = new Layout('test-id', {
			});
			let comp = new NComponent({
				model: model,
				layout: layout
			});
			assert.equal(comp.getId(), 'test-id');
			assert.equal(comp.getDataId(), 'test-id');
		});
	});
	describe('#getDataId', function() {
		it('--Different data id set', function() {
			let model = new Model({});
			let layout = new Layout('test-id', {
				dataId: 'test-data-id'
			});
			let comp = new NComponent({
				model: model,
				layout: layout
			});
			assert.equal(comp.getId(), 'test-id');
			assert.equal(comp.getDataId(), 'test-data-id');
		});
	});
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
			class AComp extends NComponent {
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
	describe('#eventMonitors', function() {
		it('--Should have event monitors', function() {
			let model = new Model({});
			let onFocus = function() {};
			let onBlur = function() {};
			let onMouseOver = function() {};
			let monitors = {
				focus: onFocus,
				blur: onBlur,
				mouseOver: onMouseOver
			};
			let layout = new Layout('test-id', {
				dataId: 'test-data-id',
				evt: monitors
			});
			let comp = new NComponent({
				model: model,
				layout: layout
			});

			assert.equal(comp.getEventMonitors(), monitors);
			assert.equal(comp.getEventMonitor('focus'), onFocus);
			assert.equal(comp.getEventMonitor('blur'), onBlur);
			assert.equal(comp.getEventMonitor('mouseOver'), onMouseOver);
		});
	});
	describe('#handleEventResult', function() {
			let testValue = null;
			let model = new Model({});
			let layout = new Layout('test-id', {});
			let comp = new NComponent({
				model: model,
				layout: layout
			});
			options = {
				handler: (data) => {
					if (data === 'promise') {
						testValue = 'promise';
					} else {
						testValue = 'normal';
					}
				},
				undefined: () => {
					testValue = 'undefined';
				},
				null: () => {
					testValue = 'null';
				},
				false: () => {
					testValue = 'false';
				},
				a: (value) => {
					testValue = value;
				}
			};
			let filter = function(keys) {
				return Object.keys(options).reduce(function(prev, next) {
					if (keys.indexOf(next) != -1) {
						prev[next] = options[next];
					}
					return prev;
				}, {});
			}
			comp.handleEventResult(undefined, options);
			assert.equal(testValue, 'undefined');
			comp.handleEventResult(undefined, filter(['handler', 'null']));
			assert.equal(testValue, 'null');
			comp.handleEventResult(null, filter(['handler', 'undefined']));
			assert.equal(testValue, 'normal');
			comp.handleEventResult(null, filter(['handler', 'null']));
			assert.equal(testValue, 'null');

			comp.handleEventResult(false, options);
			assert.equal(testValue, 'false');
			comp.handleEventResult('a', options);
			assert.equal(testValue, 'a');
			comp.handleEventResult('a', filter(['handler', 'undefined', 'null']));
			assert.equal(testValue, 'normal');

			
			comp.handleEventResult($.Deferred(function(d) {
				d.resolve();
			}).promise(), options);
	});
});