require("babel-register")({
	"presets": [
		"react", 
		"es2015"
	],
	"plugins": [
		"transform-react-jsx"
	]
});

const {Envs} = require('../src/js/envs');

const assert = require('assert');

describe('Envs', function() {
	describe('#getCellWidth', function() {
		it('--Should be 3 as default', function() {
			assert.equal(3, Envs.CELL_WIDTH);
		});
		it('--Should be mutable', function() {
			Envs.CELL_WIDTH = 4;
			assert.equal(4, Envs.CELL_WIDTH);
			// reset to default value
			Envs.CELL_WIDTH = 3;
		});
	});
});