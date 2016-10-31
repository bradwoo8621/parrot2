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

const MDK = require('../src/js/model/model');
const VDK = require('../src/js/model/validation');

const assert = require('assert');

let json = {
	name: 'test-name',
	age: 15,
	addresses: [{
		line1: 'test-line1'
	}, {
		line2: 'test-line2'
	}]
};
let model = new MDK.Model(json);
let validator = new VDK.Validator({
	name: {
		minlen: 15,
		maxlen: 5
	},
	age: {
		min: 18,
		max: 10
	},
	addresses: {
		minsize: 5,
		maxsize: 1,
		child: {
			line1: {
				minlen: 20
			}
		}
	}
});

describe('Validator', function() {
	describe('#constuctor', function() {
		it('--Should construct a validator', function() {
			assert.ok(validator);
			assert.ok(VDK.ValidationMessages.get('required'));
		});
		it('--Validating', function() {
			let result = validator.validate(model);
			assert.ok(result.name);
			assert.ok(result.age);
			assert.ok(result.addresses);
			console.log(result);
		});
	});
});