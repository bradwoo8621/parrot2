import lodash from 'lodash'

class ListenerSupport {
	constructor(id) {
		this.id = id;
		this.listeners = [];
	}
	getId() {
		return this.id;
	}
	getListeners() {
		return this.listeners;
	}
	isMonitorAll() {
		return this.id === '--all';
	}
	isRegExp() {
		return this.id instanceof RegExp;
	}
	isConcerned(id) {
		if (this.isMonitorAll()) {
			return true;
		} else if (this.isRegExp()) {
			return this.getId().test(id);
		} else {
			return this.getId() == id;
		}
	}
	addListener(listener) {
		let listeners = this.getListeners();
		if (listener && listeners.indexOf(listener) == -1) {
			listeners.push(listener);
		}
		return this;
	}
	removeListener(listener) {
		if (listener) {
			let listeners = this.getListeners();
			let index = listeners.indexOf(listener);
			if (index != -1) {
				listeners.splice(index, 1);
			}
		}
		return this;
	}
	fireEvent(evt) {
		this.getListeners().forEach(listener => {
			// use model as context
			listener.call(evt.model, evt);
		});
	}
}

class Model {
	constructor(initDataJSON) {
		// initialize listeners
		this.listeners = ['change', 'add', 'remove', 'validate'].reduce(function(listeners, type) {
			listeners[type] = {
				pre: [],
				post: []
			};
			return listeners;
		}, {});
		this.baseModel = initDataJSON;
		this.currentModel = lodash.cloneDeep(initDataJSON);
		this.changed = false;
	}
	getListenersByTimeAndType(time, type) {
		return this.listeners[type][time];
	}
	getListenerSupport(id, time, type, create = false) {
		id = id ? id : '--all';
		let listeners = this.getListenersByTimeAndType(time, type);
		let support = listeners.find(listener => {
			return listener.id.toString() == id.toString();
		});
		if (!support && create) {
			support = new ListenerSupport(id);
			listeners.push(support);
		}
		return support;
	}
	addListener(id = '--all', listener, type = 'change', time = 'post') {
		if (listener) {
			this.getListenerSupport(id, time, type, true).addListener(listener);
		}
		return this;
	}
	removeListener(id = '--all', listener, type = 'change', time = 'post') {
		if (listener) {
			let support = this.getListenerSupport(id, time, type);
			if (support) {
				support.removeListener(listener);
			}
		}
		return this;
	}
	getListeners(id = '--all', time = 'post', type = 'change') {
		let support = this.getListenerSupport(id, time, type);
		return support ? support.getListeners() : [];
	}

	addPostChangeListener(id, listener) {
		return this.addListener(id, listener);
	}
	removePostChangeListener(id, listener) {
		return this.removeListener(id, listener);
	}
	addPostAddListener(id, listener) {
		return this.addListener(id, listener, 'add');
	}
	removePostAddListener(id, listener) {
		return this.removeListener(id, listener, 'add');
	}
	addPostRemoveListener(id, listener) {
		return this.addListener(id, listener, 'remove');
	}
	removePostRemoveListener(id, listener) {
		return this.removeListener(id, listener, 'remove');
	}
	addPostValidateListener(id, listener) {
		return this.addListener(id, listener, 'validate');
	}
	removePostValidateListener(id, listener) {
		return this.removeListener(id, listener, 'validate');
	}

	fireEvent(evt) {
		let id = evt.id,
			type = evt.type,
			time = evt.time;
		let listeners = this.getListenersByTimeAndType(time, type);
		listeners.forEach(listener => {
			if (listener.isConcerned(id)) {
				listener.fireEvent(evt);
			}
		});
		return this;
	}
	firePostChangeEvent(id, oldValue, newValue) {
		return this.fireEvent({
			id: id,
			old: oldValue,
			new: newValue,
			type: 'change',
			time: 'post',
			model: this
		});
	}
	firePostAddEvent(id, value, newItem, index) {
		return this.fireEvent({
			id: id,
			value: value,
			new: newItem,
			index: index,
			type: 'add',
			time: 'post',
			model: this
		});
	}
	firePostRemoveEvent(id, value, removedItem, index) {
		return this.fireEvent({
			id: id,
			value: value,
			removed: removedItem,
			index: index,
			type: 'remove',
			time: 'post',
			model: this
		});
	}
	firePostValidateEvent(id, value, error) {
		return this.fireEvent({
			id: id,
			value: value,
			error: error,
			type: 'validate',
			time: 'post',
			model: this
		});
	}

	getBaseModel() {
		return this.baseModel;
	}
	getCurrentModel() {
		return this.currentModel;
	}
	get(id) {
		return this.getFromJSON(id, this.getCurrentModel());
	}
	getFromJSON(id, json) {
		let ids = id.split('.');
		let count = ids.length - 1;
		return ids.reduce((object, id, index) => {
			let value = object[id];
			return (index === count) ? value : ((typeof value === 'undefined' || value == null) ? {} : value);
		}, json);
	}
	set(id, value) {
		let old = this.get(id);
		if (typeof old === typeof value && old == value) {
			// do nothing
			return;
		}
		this.setIntoJSON(id, value, this.getCurrentModel());
		this.setChanged(true);
		this.firePostChangeEvent(id, old, value);
		return this;
	}
	setIntoJSON(id, value, json) {
		let ids = id.split('.');
		let count = ids.length - 1;
		ids.reduce((object, id, index) => {
			if (index === count) {
				// last one
				object[id] = value;
				return value;
			} else {
				let val = object[id];
				object[id] = (typeof val === 'undefined' || val == null) ? {} : val;
				return object[id];
			}
		}, json);
		return this;
	}

	isChanged() {
		return this.changed;
	}

	setChanged(changed) {
		this.changed = changed;
	}
}

export {Model, lodash}