import * as CDK from './model-observed-component'

// methods for react component lifecycle and their pointcuts
class LifecycleComponent extends CDK.ModelObservedComponent {
	// lifecycle
	componentWillUpdate(nextProps, nextState) {
		this.uninstallUnderlyingMonitors({
			pre: this.preComponentWillUpdate,
			post: this.postComponentWillUpdate
		}, nextProps, nextState);
	}
	componentDidUpdate(prevProps, prevState) {
		this.installUnderlyingMonitors({
			pre: this.preComponentDidUpdate,
			post: this.postComponentDidUpdate
		}, prevProps, prevState);
	}
	componentWillUnmount() {
		this.uninstallUnderlyingMonitors({
			pre: this.preComponentWillUnmount,
			post: this.postComponentWillUnmount
		});
	}
	componentDidMount() {
		this.installUnderlyingMonitors({
			pre: this.preComponentDidMount,
			post: this.postComponentDidMmount
		});
	}

	// monitors
	// first parameter is a json of pointcut methods
	installUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.addPostChangeListener(this.onModelChanged);
		this.pointcutPostExecutor.apply(this, arguments);
	}
	uninstallUnderlyingMonitors() {
		this.pointcutPreExecutor.apply(this, arguments);
		this.removePostChangeListener(this.onModelChanged);
		this.pointcutPostExecutor.apply(this, arguments);
	}

	pointcutPreExecutor(pointcut) {
		if (pointcut && pointcut.pre) {
			pointcut.pre.apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}
	pointcutPostExecutor(pointcut) {
		if (pointcut && pointcut.post) {
			pointcut.post.apply(this, Array.prototype.slice.call(arguments, 1));
		}
	}
}

export * from './model-observed-component'
export {LifecycleComponent}