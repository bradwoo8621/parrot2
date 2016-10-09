import {
	React, 
	ReactDOM, 
	$, 
	lodash, 
	classnames, 
	Envs, 
	Layout, 
	NCollapsibleContainer, 
	NHierarchyComponent} from './n-component'

class NPanelHeader extends NCollapsibleContainer {
	renderInNormal() {
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
			{this.renderLeadingDOMChildren()}
			{this.renderLeadingChildren()}
			<span className='n-panel-header-text'>
				{this.getLabel()}
			</span>
			{this.renderTailingChildren()}
			{this.renderTailingDOMChildren()}
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
		if (!this.isCollapsible() || evt.isDefaultPrevented()) {
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
	renderInNormal() {
		let className = classnames(this.getComponentStyle(),
				this.getPanelStyle(), {
					'n-panel-body-expanded': this.isExpanded(),
					'n-panel-body-collapsed': !this.isExpanded()
				});
		return (<div className={className}
					 ref='me'>
			{this.renderLeadingDOMChildren()}
			{this.renderLeadingChildren()}
			{this.renderChildren()}
			{this.renderTailingChildren()}
			{this.renderTailingDOMChildren()}
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

		let layout = Envs.merge({}, {
			label: this.getLabel(),
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.PANEL_HEADER,
				style: this.getLayoutOptionValue('style'),
				collapsible: this.isCollapsible(),
				expanded: this.isExpanded(),
				collapsibleStyle: this.getCollapsibleStyle(),
				leadChildren: this.getLeadingChildren(),
				tailChildren: this.getTailingChildren()
			},
			evt: {
				expand: this.onExpandChanged.bind(this),
				collapse: this.onExpandChanged.bind(this)
			}
		}, headerLayout);

		let header = this.getDOMChildOf('NPanelHeader');
		return this.renderInternalComponent(layout, header ? header.props : null, {
			ref: 'header'
		});
	}
	renderBody() {
		let layout = Envs.merge({}, {
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.PANEL_BODY,
				style: this.getLayoutOptionValue('style'),
				expanded: this.isExpanded(),
				children: this.getChildren()
			}
		}, this.getPanelBodyLayout());

		let body = this.getDOMChildOf('NPanelBody');

		return this.renderInternalComponent(layout, body ? body.props : null, {
			ref: 'body'
		});
	}
	renderInNormal() {
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

class NArrayPanel extends NHierarchyComponent {
	renderItem(item, itemIndex) {
		let model = this.createItemModel(item, itemIndex);
		let layoutOptions = this.createItemLayoutOptions(model, itemIndex);
		let layout = new Layout(this.getId(), {
			label: this.getLayout().getLabel(),
			dataId: this.getDataId(),
			comp: layoutOptions
		})
		return <NPanel model={model}
					   layout={layout}
					   orientation={this.getOrientation()}
					   viewMode={this.isViewMode()}
					   n-comp-itemIndex={itemIndex}
					   n-evt-collapse={this.onItemCollapsed.bind(this, model, itemIndex)}
					   n-evt-expand={this.onItemExpanded.bind(this, model, itemIndex)}
					   container={this}
					   ref={`item-${itemIndex}`}
					   key={itemIndex}/>;
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.getValueFromModel().map((item, itemIndex) => {
				return this.renderItem(item, itemIndex);
			})}
		</div>);
	}
	getComponentClassName() {
		return 'n-array-panel';
	}
	getValueFromModel() {
		let value = super.getValueFromModel();
		return value ? value : [];
	}
	onItemCollapsed(itemModel, itemIndex) {
		this.fireEventToMonitor($.Event('itemCollapse', {
			target: ReactDOM.findDOMNode(this.refs.me),
			itemModel: itemModel,
			itemIndex: itemIndex
		}));
	}
	onItemExpanded(itemModel, itemIndex) {
		this.fireEventToMonitor($.Event('itemExpand', {
			target: ReactDOM.findDOMNode(this.refs.me),
			itemModel: itemModel,
			itemIndex: itemIndex
		}));
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
Envs.COMPONENT_TYPES.ARRAY_PANEL = {type: 'n-array-panel', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.ARRAY_PANEL.type, function (options) {
	return <NArrayPanel {...options} />;
});

export {NArrayPanel, NPanel, NPanelHeader, NPanelBody}
export * from './n-component'