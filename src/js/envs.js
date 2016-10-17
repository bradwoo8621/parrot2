import lodash from 'lodash'

class Envs {
	static DEFAULT_COLUMN_INDEX = 9999
	static DEFAULT_ROW_INDEX = 9999
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
			},
			dateValueFormat: 'YYYYMMDDHHmmss',
			dateDisplayFormat: ['YYYY/MM/DD', 'YYYYMMDD'],
			dateHeaderFormat: {year: 'YYYY', month: 'MMMM'},
			timeDisplayFormat: 'HH:mm:ss',
			timeHeaderFormat: 'A hh',
			dateTimeDisplayFormat: 'YYYY/MM/DD HH:mm:ss',
			yearStepWhenMonth: 5,
			tabAddText: 'Add',
			tabAddIcon: 'plus-square',
			tabRemoveIcon: 'close',
			tabNoItemText: 'No Item',
			treeRootText: 'Root',
			treeRootIcon: 'bars',
			treeBranchIcon: 'folder-o',
			treeLeafIcon: 'file-o',
			treeMaxHeight: 300,
			listMaxHeight: 300
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

	get DATE_VALUE_FORMAT() {
		return this.props.dateValueFormat;
	}

	set DATE_VALUE_FORMAT(value) {
		this.props.dateValueFormat = value;
	}

	get DATE_DISPLAY_FORMAT() {
		return this.props.dateDisplayFormat;
	}

	set DATE_DISPLAY_FORMAT(value) {
		this.props.dateDisplayFormat = value;
	}

	get DATE_HEADER_FORMAT() {
		return this.props.dateHeaderFormat;
	}

	set DATE_HEADER_FORMAT(value) {
		this.props.dateHeaderFormat = value;
	}

	get YEAR_STEP_WHEN_MONTH() {
		return this.props.yearStepWhenMonth;
	}

	set YEAR_STEP_WHEN_MONTH(value) {
		this.props.yearStepWhenMonth = value;
	}

	get DATE_TIME_DISPLAY_FORMAT() {
		return this.props.dateTimeDisplayFormat;
	}

	set DATE_TIME_DISPLAY_FORMAT(value) {
		this.props.dateTimeDisplayFormat = value;
	}

	get TIME_DISPLAY_FORMAT() {
		return this.props.timeDisplayFormat;
	}

	set TIME_DISPLAY_FORMAT(value) {
		this.props.timeDisplayFormat = value;
	}

	get TIME_HEADER_FORMAT() {
		return this.props.timeHeaderFormat;
	}

	set TIME_HEADER_FORMAT(value) {
		this.props.timeHeaderFormat = value;
	}

	get TAB_ADD_TEXT() {
		return this.props.tabAddText;
	}

	set TAB_ADD_TEXT(value) {
		this.props.tabAddText = value;
	}

	get TAB_ADD_ICON() {
		return this.props.tabAddIcon;
	}

	set TAB_ADD_ICON(value) {
		this.props.tabAddIcon = value;
	}

	get TAB_REMOVE_ICON() {
		return this.props.tabRemoveIcon;
	}

	set TAB_REMOVE_ICON(value) {
		this.props.tabRemoveIcon = value;
	}

	get TAB_NO_ITEM_TEXT() {
		return this.props.tabNoItemText;
	}

	set TAB_NO_ITEM_TEXT(value) {
		this.props.TAB_NO_ITEM_TEXT = value;
	}

	get TREE_ROOT_TEXT() {
		return this.props.treeRootText;
	}

	set TREE_ROOT_TEXT(value) {
		this.props.treeRootText = value;
	}

	get TREE_ROOT_ICON() {
		return this.props.treeRootIcon;
	}

	set TREE_ROOT_ICON(value) {
		this.props.treeRootIcon = value;
	}

	get TREE_BRANCH_ICON() {
		return this.props.treeBranchIcon;
	}

	set TREE_BRANCH_ICON(value) {
		this.props.treeBranchIcon = value;
	}

	get TREE_LEAF_ICON() {
		return this.props.treeLeafIcon;
	}

	set TREE_LEAF_ICON(value) {
		this.props.treeLeafIcon = value;
	}

	get TREE_MAX_HEIGHT() {
		return this.props.treeMaxHeight;
	}

	set TREE_MAX_HEIGHT(value) {
		this.props.treeMaxHeight = value;
	}

	get LIST_MAX_HEIGHT() {
		return this.props.listMaxHeight;
	}

	set LIST_MAX_HEIGHT(value) {
		this.props.listMaxHeight = value;
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

	// utils
	// deep merge to a plain object from other plain objects
	// argument 0: target object, will be modified. new {} created if it is null.
	// arguments 1 ~ n: source objects, will not be modified. null or undefined objects are ignored.
	// only recursive plain object will be deep merged
	// if source value is an array, target value will be replaced anyway. and if element is
	//		1. plain object: recursive clone and assign to target array
	//		2. array: recursive clone and assign to target array
	//		3. others: assign to target array directly
	// if source value is a plain object, 
	//		1. target value is a plain object: recursive deep merge
	//		2. others: recursive clone and assign to target value
	// if source value is other types, assign to target value directly
	deepMergeTo() {
		if (arguments.length < 2) {
			throw 'At least two argument.';
		}
		let target = arguments[0] ? arguments[0] : {};
		if (!lodash.isPlainObject(target)) {
			throw 'Target object must be a plain object.';
		}
		let sources = Array.prototype.slice.call(arguments, 1);
		sources.forEach((source, sourceIndex) => {
			if (source == null) {
				// ignore the null source object
				return;
			}
			if (!lodash.isPlainObject(source)) {
				throw `Source object at index[${sourceIndex + 1}] must be a plain object.`;
			}
			Object.keys(source).forEach((key) => {
				let sourceValue = source[key];
				if (sourceValue == null) {
					// ignore the null or undefined value
					return;
				}
				if (lodash.isPlainObject(sourceValue)) {
					// source value is a plain object
					let targetValue = target[key];
					if (!lodash.isPlainObject(targetValue)) {
						// target value is not a plain object
						// create new {} to be target value and copy from source value
						target[key] = this.deepMergeTo({}, sourceValue);
					} else {
						// target value is a plain object
						this.deepMergeTo(targetValue, sourceValue);
					}
				} else if (lodash.isArray(sourceValue)) {
					// source value is an array
					// replace target value anyway
					target[key] = [];
					sourceValue.forEach((value) => {
						if (lodash.isPlainObject(value)) {
							target[key].push(this.deepMergeTo({}, value));
						} else if (lodash.isArray(value)) {
							target[key].push(this.deepMergeTo({}, {array: value}).array);
						} else {
							target[key].push(value);
						}
					});
				} else {
					// neither plain object nor array
					// copy to target directly
					target[key] = sourceValue;
				}
			});
		});
		return target;
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

export {envs as Envs, lodash}