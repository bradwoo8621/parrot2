class CodeTable {
	constructor(options) {
		this.items = options.items ? options.items : [];
		this.sorter = options.sorter;
		this.renderer = options.renderer;
		this.tiler = options.tiler;

		this.mapping = {};
		this.items.map(item => {
			let renderer = this.getRenderer();
			return renderer ? renderer.call(this, item) : item;
		}).sort((item1, item2) => {
			let sorter = this.getSorter();
			return sorter ? sorter.call(this, item1, item2) : 0;
		}).forEach(item => {
			this.getTiler().call(this, item, this.mapping);
		});
	}

	getTiler() {
		if (!this.tiler) {
			this.tiler = function(item, map) {
				map[item.id] = item;
			};
		}
		return this.tiler;
	}
	getSorter() {
		return this.sorter;
	}
	getRenderer() {
		return this.renderer;
	}

	getItem(id) {
		return this.mapping[id];
	}
	getText(id) {
		return this.mapping[id] ? this.mapping[id].text : null;
	}

	map(func) {
		return this.items.map(func);
	}
	forEach(func) {
		return this.items.forEach(func);
	}
	filter(func) {
		return this.items.filter(func);
	}
}

export {CodeTable}
