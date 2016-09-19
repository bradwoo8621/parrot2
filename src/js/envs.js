class Envs {
	constructor() {
		this.props = {
			cellWidth: 3
		};
	}

	get CELL_WIDTH() {
		return this.props.cellWidth;
	}

	set CELL_WIDTH(value) {
		this.props.cellWidth = value;
	}
}


// there is no global object to carry the global constants variables
// have to use window in browser or global in nodejs env
// to carry the global constants
// the global namespace is $pt
// and import namespace is {Envs}
// the above two are exactly same object
let $pt;
if (typeof window !== 'undefined') {
	$pt = window.$pt;
} else if (typeof global !== 'undefined') {
	$pt = global.$pt;
}
// console.log('abc');
// console.log($pt);

if (typeof $pt === 'undefined' || $pt == null) {
	$pt = new Envs();
	if (typeof window !== 'undefined') {
		window.$pt = $pt;
	} else if (typeof global !== 'undefined') {
		global.$pt = $pt;
	}
}

export {$pt as Envs}