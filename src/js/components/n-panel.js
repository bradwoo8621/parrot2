import {React, ReactDOM, $, lodash, classnames, Envs, Layout, NContainer} from './n-component'

class NPanelHeader extends NContainer {
	render() {
		let className = classnames(this.getComponentStyle(),
									this.getPanelStyle());
		return (<div className={className}>
			{this.renderLeadingChildren()}
			<span className='n-panel-header-text'>{this.getLabel()}</span>
			{this.renderTailingChildren()}
		</div>)
	}
	getComponentClassName() {
		return 'n-panel-header';
	}
	getPanelStyle() {
		return 'n-panel-header-' + this.getLayoutOptionValue('style', 'default');
	}
}

class NPanelBody extends NContainer {
	render() {
		return (<div className={this.getComponentStyle()}>
		</div>)
	}
	getComponentClassName() {
		return 'n-panel-body';
	}
}

class NPanel extends NContainer {
	renderHeader() {
		let headerLayout = this.getPanelHeaderLayout();
		if (headerLayout === false) {
			return null;
		}

		let layout = new Layout(this.getDataId(), lodash.assign({
			label: this.getLabel(),
			comp: {
				style: this.getLayoutOptionValue('style')
			}
		}, headerLayout));

		let header = this.getChildOf('NPanelHeader');
		let options = this.getMixedPropsBaseOnChild(header, {
			model: this.getPrimaryModel(),
			layout: layout,
			orientation: this.getOrientation(),
			viewMode: this.isViewMode(),
			ref: 'header'
		});

		return (<NPanelHeader {...options}>
			{this.getChildrenOfChild(header)}
		</NPanelHeader>);
	}
	renderBody() {
	}
	render() {
		let className = classnames(this.getComponentStyle(),
									this.getPanelStyle());
		return (<div className={className}>
			{this.renderHeader()}
			{this.renderBody()}
		</div>);
	}
	getComponentClassName() {
		return 'n-panel';
	}
	getPanelStyle() {
		return 'n-panel-' + this.getLayoutOptionValue('style', 'default');
	}
	getPanelHeaderLayout() {
		return this.getLayoutOptionValue('header');
	}
}

Envs.COMPONENT_TYPES.PANEL = {type: 'n-panel', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.PANEL.type, function (options) {
	return <NPanel {...options} />;
});

export {NPanel, NPanelHeader, NPanelBody}
export * from './n-component'