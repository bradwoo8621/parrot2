import {React, ReactDOM, $, lodash, classnames, Envs, Layout, NCollapsibleContainer} from './n-component'

class NPanelHeader extends NCollapsibleContainer {
	render() {
		let collapsibleStyle = this.getCollapsibleStyle();
		let className = classnames(this.getComponentStyle(),
				this.getPanelStyle(), {
					'n-panel-header-collapsible': this.isCollapsible(),
					'n-panel-header-expanded': this.isExpanded(),
					'n-panel-header-collapsed': !this.isExpanded()
				}, `n-panel-collapsible-${collapsibleStyle}`);
		return (<div className={className}
					 onClick={this.onComponentClicked}
					 ref='me'>
			{this.renderLeadingChildren()}
			<span className='n-panel-header-text'>
				{this.getLabel()}
			</span>
			{this.renderTailingChildren()}
		</div>);
	}
	getComponentClassName() {
		return 'n-panel-header';
	}
	getPanelStyle() {
		return 'n-panel-header-' + this.getLayoutOptionValue('style', 'default');
	}
	getCollapsibleStyle() {
		// lead/follow/tail
		return this.getLayoutOptionValue('collapsibleStyle', 'tail');
	}

	onComponentClicked = (evt) => {
		if (!this.isCollapsible()) {
			return;
		}
		if (this.isExpanded()) {
			this.collapse();
		} else {
			this.expand();
		}
	}
}

class NPanelBody extends NCollapsibleContainer {
	render() {
		let className = classnames(this.getComponentStyle(),
				this.getPanelStyle(), {
					'n-panel-body-expanded': this.isExpanded(),
					'n-panel-body-collapsed': !this.isExpanded()
				});
		return (<div className={className}
					 ref='me'>
			{this.renderLeadingChildren()}

			{this.renderTailingChildren()}
		</div>)
	}
	getComponentClassName() {
		return 'n-panel-body';
	}
	getPanelStyle() {
		return 'n-panel-body-' + this.getLayoutOptionValue('style', 'default');
	}
	expand() {
		$(ReactDOM.findDOMNode(this.refs.me)).slideDown(500, () => {
			super.expand();
		});
	}
	collapse() {
		$(ReactDOM.findDOMNode(this.refs.me)).slideUp(500, () => {
			super.collapse();
		});
	}
}

class NPanel extends NCollapsibleContainer {
	renderHeader() {
		let headerLayout = this.getPanelHeaderLayout();
		if (headerLayout === false) {
			return null;
		}

		let layout = new Layout(this.getDataId(), lodash.assign({
			label: this.getLabel(),
			dataId: this.getDataId(),
			comp: {
				style: this.getLayoutOptionValue('style'),
				collapsible: this.isCollapsible(),
				expanded: this.isExpanded(),
				collapsibleStyle: this.getCollapsibleStyle()
			},
			evt: {
				expand: this.onExpandChanged.bind(this),
				collapse: this.onExpandChanged.bind(this)
			}
		}, headerLayout));

		let header = this.getChildOf('NPanelHeader');
		let options = this.getMixedPropsBaseOnChild(header, {
			layout: layout,
			ref: 'header'
		});

			// {this.getChildrenOfChild(header)}
		return (<NPanelHeader {...options}>
		</NPanelHeader>);
	}
	renderBody() {
		let bodyLayout = this.getPanelBodyLayout();

		let layout = new Layout(this.getDataId(), lodash.assign({
			dataId: this.getDataId(),
			comp: {
				style: this.getLayoutOptionValue('style'),
				expanded: this.isExpanded()
			}
		}, bodyLayout));

		let body = this.getChildOf('NPanelBody');
		let options = this.getMixedPropsBaseOnChild(body, {
			layout: layout,
			ref: 'body'
		});

			// {this.getChildrenOfChild(body)}
		return (<NPanelBody {...options}>
		</NPanelBody>);
	}
	render() {
		let collapsibleStyle = this.getCollapsibleStyle();
		let className = classnames(this.getComponentStyle(),
				this.getPanelStyle(), {
					'n-panel-expanded': this.isExpanded(),
					'n-panel-collapsed': !this.isExpanded()
				});
		return (<div className={className}
					 ref='me'>
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
	getPanelBodyLayout() {
		return this.getLayoutOptionValue('body');
	}
	isCollapsible() {
		return this.getLayoutOptionValue('collapsible', false);
	}
	isInitExpanded() {
		return this.getLayoutOptionValue('expanded', true);
	}
	getCollapsibleStyle() {
		// lead/follow/tail
		return this.getLayoutOptionValue('collapsibleStyle', 'tail');
	}

	isExpanded() {
		if (this.state.expanded == null) {
			this.state.expanded = this.isInitExpanded();
		}
		return this.state.expanded;
	}

	onExpandChanged(evt) {
		switch(evt.type) {
			case 'expand':
				this.refs.body.expand();
				this.expand();
				break;
			case 'collapse':
				this.refs.body.collapse();
				this.collapse();
				break;
		}
	}
}

Envs.COMPONENT_TYPES.PANEL_HEADER = {type: 'n-panel-header', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.PANEL_HEADER.type, function (options) {
	return <NPanelHeader {...options} />;
});
Envs.COMPONENT_TYPES.PANEL_BODY = {type: 'n-panel-body', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.PANEL_BODY.type, function (options) {
	return <NPanelBody {...options} />;
});
Envs.COMPONENT_TYPES.PANEL = {type: 'n-panel', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.PANEL.type, function (options) {
	return <NPanel {...options} />;
});

export {NPanel, NPanelHeader, NPanelBody}
export * from './n-component'