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

const {Layout} = require('../src/js/layout/layout');
const {Envs} = require('../src/js/envs');

const assert = require('assert');


describe('Layout', function() {
	let layout;
	describe('#constuctor', function() {
		it('--Should construct a layout', function() {
			layout = new Layout('test', {
				dataId: 'testDataId',
				label: 'testLabel',
				comp: {
					testOption: 'test-value'
				},
				styles: {
					comp: 'test-class'
				}
			});
			assert.ok(layout);
		});
	});
	describe('#getType', function() {
		it('--Should have a default type', function() {
			let type = layout.getType();
			assert.equal('n-text', type.type);
			assert.equal(true, type.error);
			assert.equal(true, type.popover);
			assert.equal(false, type.label);
		});
	});
	describe('#getId', function() {
		it('--Should have an Id', function() {
			assert.equal('test', layout.getId());
		});
	});
	describe('#getDataId', function() {
		it('--Should have a data Id', function() {
			assert.equal('testDataId', layout.getDataId());
		});
	});
	describe('#getDataId', function() {
		it('--Should have a label', function() {
			assert.equal('testLabel', layout.getLabel());
		});
	});
	describe('#getPosition', function() {
		it('--Should have a position', function() {
			let pos = layout.getPosition();
			assert.equal(3, pos.width);
			assert.equal(9999, pos.col);
			assert.equal(9999, pos.row);
		});
	});
	describe('#getPosition.globalChanged', function() {
		it('--Should can be changed by global on position', function() {
			Envs.CELL_WIDTH = 4;
			let pos = layout.getPosition();
			assert.equal(4, pos.width);
			assert.equal(9999, pos.col);
			assert.equal(9999, pos.row);
		});
	});
	describe('#getPosition.designated', function() {
		it('--Should have designated position', function() {
			let layout = new Layout('test', {
				pos: {width: 6, col: 100, row: 200}
			});
			assert.ok(layout);
			let pos = layout.getPosition();
			assert.equal(6, pos.width);
			assert.equal(100, pos.col);
			assert.equal(200, pos.row);
		});
	});
	describe('#getStyles', function() {
		it('--Should have styles', function() {
			assert.ok(layout.getStyles());
			assert.equal('test-class', layout.getStyle('comp'));
		});
	});
	describe('#getOptions', function() {
		it('--Should have options', function() {
			assert.ok(layout.getOptions());
			assert.equal('test-value', layout.getOptionValue('testOption'));
		});
	});
});