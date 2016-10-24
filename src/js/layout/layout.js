import {Envs, lodash} from '../envs'

class Layout {
	static toStereo(props) {
		let layout = {};
		if (!props) {
			return layout;
		}

		Object.keys(props).filter((key) => {
			return key.startsWith('n-');
		}).forEach((key) => {
			let keys = key.substr(2).split('-');
			let count = keys.length - 1;
			keys.reduce((object, keySegment, index) => {
				if (index === count) {
					// last one
					object[keySegment] = props[key];
				} else {
					let val = object[keySegment];
					object[keySegment] = (typeof val === 'undefined' || val == null) ? {} : val;
				}
				return object[keySegment];
			}, layout);
		});
		return layout;
	}
	static buildLayoutByProps(props) {
		return new Layout(props['n-id'], {}).mergeLayoutFromProps(props);
	}

	// id: string
	// layout: JSON
	constructor(id, layout) {
		this.id = id;
		this.layout = layout ? layout : {};
		this.initialLayout = layout;
	}
	mergeLayoutFromProps(props) {
		let fromProps = Layout.toStereo(props);
		if (Object.keys(fromProps).length != 0) {
			this.layout = Envs.deepMergeTo({}, this.initialLayout, fromProps);
		}
		return this;
	}

	getType() {
		let type = this.getOptionValue('type');
		if (type) {
			return this.buildDefaultType(type);
		} else {
			return this.buildDefaultType();
		}
	}
	getTypeAsString() {
		return this.getType().type;
	}
	buildDefaultType(type) {
		type = type ? type : 'n-text';
		if (typeof type === 'string') {
			return {
				type: type,
				label: false,
				error: true,
				popover: Envs.COMPONENT_ERROR_POPOVER
			};
		} else {
			return Envs.deepMergeTo({
				label: false,
				error: true,
				popover: Envs.COMPONENT_ERROR_POPOVER
			}, type);
		}
	}
	isLabelShown() {
		return this.getType().label;
	}
	isErrorShown() {
		return this.getType().error;
	}
	isErrorShownAsPopover() {
		return this.getType().popover;
	}

	getId() {
		return this.id;
	}
	getDataId() {
		return this.layout.dataId;
	}
	getLabel() {
		return this.layout.label;
	}
	getWidth() {
		return this.getPosition().width;
	}
	getColumnIndex() {
		return this.getPosition().col;
	}
	getRowIndex() {
		return this.getPosition().row;
	}
	getPosition() {
		let pos = this.layout.pos;
		if (typeof pos === 'undefined' || pos == null) {
			return this.getDefaultPosition();
		} else {
			return this.getDefaultPosition(pos.width, pos.col, pos.row);
		}
	}
	getDefaultPosition(width, columnIndex, rowIndex) {
		return {
			width: width ? width : Envs.CELL_WIDTH,
			col: columnIndex ? columnIndex : 9999,
			row: rowIndex ? rowIndex : 9999
		};
	}
	getStyles() {
		return this.layout.styles ? this.layout.styles : {};
	}
	getStyle(key) {
		return this.getStyles()[key];
	}
	getOptions() {
		return this.layout.comp ? this.layout.comp : {};
	}
	getOptionValue(key) {
		return this.getOptions()[key];
	}

	getAdditionalModel() {
		return this.getOptionValue('additionalModel');
	}

	getEventMonitors() {
		return this.layout.evt ? this.layout.evt : {};
	}
	getEventMonitor(key) {
		return this.getEventMonitors()[key];
	}
}

export {Layout}