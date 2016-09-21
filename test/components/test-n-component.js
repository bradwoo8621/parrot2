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

const SDK = require('../../src/js/components/n-component');
let {Model, Layout, NComponent} = SDK;

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

			let monitorsOf = comp.getEventMonitorsOf('focus', 'blur');
			assert.equal(Object.keys(monitorsOf).length, 2);
			assert.equal(monitorsOf.focus, onFocus);
			assert.equal(monitorsOf.blur, onBlur);

			let monitorsBut = comp.getEventMonitorsBut('blur');
			assert.equal(Object.keys(monitorsBut).length, 2);
			assert.equal(monitorsBut.focus, onFocus);
			assert.equal(monitorsBut.mouseOver, onMouseOver);
		});
	});
});