class Envs {
	constructor() {
		this.props = {
			cellWidth: 3,
			componentErrorPopover: true,
			thousandsSeparator: ',',
			numberPointer: '.',
			numberFormatter: function(modelValue) {
				if (modelValue || modelValue === 0) {
					return `${modelValue}`
								.replace(/\./, envs.NUMBER_POINTER)
								.replace(/\B(?=(\d{3})+(?!\d))/g, envs.THOUSANDS_SEPARATOR);
				} else {
					return '';
				}
			},
			numberParser: function(displayText) {
				if (displayText) {
					return 1 * displayText
								.replace(new RegExp(envs.THOUSANDS_SEPARATOR.replace(/\./g, '\\\.'), 'g'), '')
								.replace(new RegExp(envs.NUMBER_POINTER.replace(/\./g, '\\\.')), '.');
				} else {
					return null;
				}
			},
			percentageFormatter: function(modelValue)  {
				return (modelValue || modelValue === 0) ? `${modelValue}` * 100 : '';
			},
			percentageParser: function(displayText) {
				return displayText ? (displayText / 100) : null;
			}
		};
		this.viewModeRenderers = {};
		this.renderers = {};

		this.COMPONENT_TYPES = {};
	}
	// global variables
	get CELL_WIDTH() {
		return this.props.cellWidth;
	}

	set CELL_WIDTH(value) {
		this.props.cellWidth = value;
	}

	get COMPONENT_ERROR_POPOVER() {
		return this.props.componentErrorPopover;
	}

	set COMPONENT_ERROR_POPOVER(value) {
		this.props.componentErrorPopover = value;
	}

	get THOUSANDS_SEPARATOR() {
		return this.props.thousandsSeparator;
	}

	set THOUSANDS_SEPARATOR(value) {
		this.props.thousandsSeparator = value;
	}

	get NUMBER_POINTER() {
		return this.props.numberPointer;
	}

	set NUMBER_POINTER(value) {
		this.props.NUMBER_POINTER = value;
	}

	get NUMBER_FORMATTER() {
		return this.props.numberFormatter;
	}

	set NUMBER_FORMATTER(value) {
		this.props.numberFormatter = value;
	}

	get NUMBER_PARSER() {
		return this.props.numberParser;
	}

	set NUMBER_PARSER(value) {
		this.props.numberParser = value;
	}

	get PERCENTAGE_FORMATTER() {
		return this.props.percentageFormatter;
	}

	set PERCENTAGE_FORMATTER(value) {
		this.props.PERCENTAGE_FORMATTER = value;
	}

	get PERCENTAGE_PARSER() {
		return this.props.percentageParser;
	}

	set PERCENTAGE_PARSER(value) {
		this.props.percentageParser = value;
	}

	getRenderer(type) {
		return this.renderers[type];
	}
	setRenderer(type, renderer) {
		let originalRenderer = this.getRenderer(type);
		this.renderers[type] = renderer;
		if (originalRenderer) {
			console.info(`Component renderer for ${type} was replaced.`);
		}
	}
	// external view mode renderer
	getViewModeRenderer(type) {
		return this.viewModeRenderers[type];
	}
	setViewModeRenderer(type, renderer) {
		let originalRenderer = this.getViewModeRenderer(type);
		this.viewModeRenderers[type] = renderer;
		if (originalRenderer) {
			console.info(`External view mode renderer for ${type} was replaced.`);
		}
	}
	render(renderer, options) {
		if (typeof renderer === 'string') {
			return this.getRenderer(renderer).call(this, options);
		} else {
			return renderer.call(this, options);
		}
	}
}


// // there is no global object to carry the global constants variables
// // have to use window in browser or global in nodejs env
// // to carry the global constants
// // the global namespace is $pt
// // and import namespace is {Envs}
// // the above two are exactly same object
// let $pt;
// if (typeof window !== 'undefined') {
// 	$pt = window.$pt;
// } else if (typeof global !== 'undefined') {
// 	$pt = global.$pt;
// }
// // console.log('abc');
// // console.log($pt);

// if (typeof $pt === 'undefined' || $pt == null) {
// 	$pt = new Envs();
// 	if (typeof window !== 'undefined') {
// 		window.$pt = $pt;
// 	} else if (typeof global !== 'undefined') {
// 		global.$pt = $pt;
// 	}
// }

let envs = new Envs();
export {envs as Envs}