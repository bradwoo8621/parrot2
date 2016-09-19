class Layout {
	// id: string
	// layout: JSON
	constructor(id, layout) {
		this.id = id;
		this.layout = layout ? layout : {};
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
	getPosition() {
		return this.layout.pos;
	}
	getStyles() {
		return this.layout.styles ? this.layout.styles : {};
	}
	getStyle(key) {
		return this.getStyle()[key];
	}
	getOptions() {
		return this.layout.comp ? this.layout.comp : {};
	}
	getOptionValue(key) {
		return this.getOptions()[key];
	}
}

export {Layout}