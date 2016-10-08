import {
	React, 
	ReactDOM, 
	$, 
	lodash, 
	classnames, 
	Envs, 
	Layout, 
	NContainer} from './n-component'

const NTabContainer = (ParentClass) => class extends ParentClass {
	getTabs() {
		return this.getLayoutOptionValue('tabs');
	}
	getActiveTabIndex() {
		if (this.state.activeTabIndex == null) {
			this.state.activeTabIndex = 0;
		}
		return this.state.activeTabIndex;
	}
	getActiveTab() {
		return this.getTabs()[this.getActiveTabIndex()];
	}
	setActiveTabIndex(tabIndex) {
		if (tabIndex < 0) {
			tabIndex = 0;
		} else if (tabIndex > this.getTabs().length) {
			tabIndex = this.getTabs().length - 1;
		}
		this.setState({
			activeTabIndex: tabIndex
		}, () => {
			this.fireEventToMonitor($.Event('active', {
				target: ReactDOM.findDOMNode(this.refs.me),
				tab: this.getActiveTab(),
				tabIndex: tabIndex
			}));
		});
	}
}

class NTabHeaderItem extends NContainer {
	renderInNormal() {
		let className = classnames(this.getComponentStyle(), this.getItemStyle(), {
			active: this.getLayoutOptionValue('active'),
			clickable: this.isClickable()
		});
		return (<li className={className}
					onClick={this.onItemClicked}
					ref='me'>
			{this.renderLeadingChildren()}
			<span className='n-tab-header-text'>
				{this.getLabel()}
			</span>
			{this.renderTailingChildren()}
		</li>);
	}
	getComponentStyle() {
		return 'n-tab-header-item';
	}
	getItemStyle() {
		let style = this.getLayoutOptionValue('style');
		if (style) {
			return 'n-tab-header-item-' + style;
		} else {
			return null;
		}
	}
	onItemClicked = (evt) => {
		if (this.isClickable()) {
			this.fireEventToMonitor($.Event('click', {
				target: ReactDOM.findDOMNode(this.refs.me)
			}));
		}
	}
}

class NTabHeader extends NTabContainer(NContainer) {
	renderItem(tab, tabIndex) {
		let options = {
			model: this.getPrimaryModel(),
			orientation: this.getOrientation(),
			viewMode: this.isViewMode(),
			layout: new Layout(this.getId(), {
				dataId: this.getDataId(),
				label: tab.label,
				comp: Envs.merge({}, {
					leadChildren: this.getLeadingChildren(),
					tailChildren: this.getTailingChildren(),
					active: tabIndex == this.getActiveTabIndex(),
				}, tab),
				evt: {
					click: this.onItemActived.bind(this, tab, tabIndex)
				}
			})
		};
		return <NTabHeaderItem {...options}
							   key={tabIndex} />;
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle(), this.getTabStyle());
		return (<ul className={className}
					ref='me'>
			{this.getTabs().map((tab, tabIndex) => {
				return this.renderItem(tab, tabIndex);
			})}
		</ul>);
	}
	getComponentStyle() {
		return 'n-tab-header';
	}
	getTabStyle() {
		return 'n-tab-header-' + this.getLayoutOptionValue('style', 'default');
	}
	onItemActived(tab, tabIndex) {
		let can = this.fireEventToMonitor($.Event('shouldActive', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: tab,
			tabIndex: tabIndex
		}));
		if (can === false) {
			// cannot active, do nothing
		} else if (typeof can.done === 'function') {
			can.done(() => {
				this.setActiveTabIndex(tabIndex);
			})
		} else {
			this.setActiveTabIndex(tabIndex);
		}
	}
}

class NTabBody extends NTabContainer(NContainer) {
	renderInNormal() {
		let className = classnames(this.getComponentStyle(),
				this.getTabStyle());
		let children = {
			children: this.getChildren()
		};
		let tab = this.getActiveTab();
		if (tab.children) {
			children = Envs.merge({}, children, {
				children: tab.children
			});
		}
		return (<div className={className}
					 ref='me'>
			{this.renderLeadingDOMChildren()}
			{this.renderLeadingChildren()}
			{this.renderChildren(this.wrapOptionValue(children.children))}
			{this.renderTailingChildren()}
			{this.renderTailingDOMChildren()}
		</div>)
	}
	getComponentClassName() {
		return 'n-tab-body';
	}
	getTabStyle() {
		return 'n-tab-body-' + this.getLayoutOptionValue('style', 'default');
	}
}

class NTab extends NTabContainer(NContainer) {
	renderHeader() {
		let headerLayout = this.getTabHeaderLayout();
		let layout = new Layout(this.getDataId(), Envs.merge({}, {
			dataId: this.getDataId(),
			comp: {
				style: this.getLayoutOptionValue('style'),
				tabs: this.getTabs(),
				leadChildren: this.getLeadingChildren(),
				tailChildren: this.getTailingChildren()
			},
			evt: {
				active: this.onItemActived,
				shouldActive: this.onItemShouldActive
			}
		}, headerLayout));

		let header = this.getDOMChildOf('NTabHeader');
		let options = this.mixPropsFromDOMChild(header, {
			layout: layout,
			ref: 'header'
		});

		return <NTabHeader {...options} />;
	}
	renderContent() {
		let bodyLayout = this.getTabBodyLayout();

		let layout = new Layout(this.getDataId(), Envs.merge({}, {
			dataId: this.getDataId(),
			comp: {
				style: this.getLayoutOptionValue('style'),
				tabs: this.getTabs(),
				children: this.getChildren()
			}
		}, bodyLayout));

		let body = this.getDOMChildOf('NTabBody');
		let options = this.mixPropsFromDOMChild(body, {
			layout: layout,
			ref: 'body'
		});

		return <NTabBody {...options} />;
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle(), this.getTabStyle());
		return (<div className={className}
					 ref='me'>
			{this.renderHeader()}
			{this.renderContent()}
		</div>);
	}
	getComponentClassName() {
		return 'n-tab';
	}
	getTabStyle() {
		return 'n-tab-' + this.getLayoutOptionValue('style', 'default');
	}
	getTabHeaderLayout() {
		return this.getLayoutOptionValue('header');
	}
	getTabBodyLayout() {
		return this.getLayoutOptionValue('body');
	}
	onItemActived = (evt) => {
		this.refs.body.setActiveTabIndex(evt.tabIndex);
		this.fireEventToMonitor($.Event('active', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: evt.tab,
			tabIndex: evt.tabIndex
		}))
	}
	onItemShouldActive = (evt) => {
		return this.fireEventToMonitor($.Event('shouldActive', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: evt.tab,
			tabIndex: evt.tabIndex
		}));
	}
}

Envs.COMPONENT_TYPES.TAB_HEADER = {type: 'n-tab-header', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TAB_HEADER.type, function (options) {
	return <NTabHeader {...options} />;
});
Envs.COMPONENT_TYPES.TAB_BODY = {type: 'n-tab-body', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TAB_BODY.type, function (options) {
	return <NTabBody {...options} />;
});
Envs.COMPONENT_TYPES.TAB = {type: 'n-tab', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TAB.type, function (options) {
	return <NTab {...options} />;
});

export {NTab, NTabHeader, NTabBody}
export * from './n-component'