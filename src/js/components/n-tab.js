import {
	React, 
	ReactDOM, 
	$, 
	lodash, 
	classnames, 
	Envs, 
	Model,
	Layout, 
	NContainer,
	NHierarchyComponent} from './n-component'

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
		// TODO for unknow reason, styles is broken when no text inside of span
		// TODO an unicode white space added
		let label = this.getLabel();
		return (<li className={className}
					onClick={this.onItemClicked}
					ref='me'>
			{this.renderLeadingChildren()}
			<span className='n-tab-header-text'>
				{label ? label : '\u00a0'}
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
			model: tab.model ? tab.model : this.getModel(),
			orientation: this.getOrientation(),
			viewMode: this.isViewMode(),
			layout: new Layout(this.getId(), {
				dataId: this.getDataId(),
				label: tab.label ? tab.label : this.getLayout().getLabel(),
				comp: Envs.deepMergeTo({}, {
					leadChildren: this.getLeadingChildren(),
					tailChildren: this.getTailingChildren(),
					active: tabIndex == this.getActiveTabIndex(),
					tabIndex: tabIndex
				}, tab),
				evt: {
					click: this.onItemActived.bind(this, tab, tabIndex)
				}
			})
		};
		return <NTabHeaderItem {...options}
							   container={this}
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
		} else if (typeof can === 'undefined') {
			this.setActiveTabIndex(tabIndex);
		} else if (typeof can.done === 'function') {
			can.done(() => {
				this.setActiveTabIndex(tabIndex);
			});
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
			children = Envs.deepMergeTo({}, children, {
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
	getModel() {
		let tab = this.getActiveTab();
		return tab.model ? tab.model : super.getModel();
	}
}

class NTab extends NTabContainer(NContainer) {
	renderHeader() {
		let layout = Envs.deepMergeTo({}, {
			label: this.getLayout().getLabel(),
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.TAB_HEADER,
				style: this.getLayoutOptionValue('style'),
				tabs: this.getTabs(),
				leadChildren: this.getLeadingChildren(),
				tailChildren: this.getTailingChildren()
			},
			evt: {
				active: this.onItemActived.bind(this),
				shouldActive: this.onItemShouldActive
			}
		}, this.getTabHeaderLayout());

		let header = this.getDOMChildOf('NTabHeader');

		return this.renderInternalComponent(layout, header ? header.props : null, {
			ref: 'header'
		});
	}
	renderContent() {
		let layout = Envs.deepMergeTo({}, {
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.TAB_BODY,
				style: this.getLayoutOptionValue('style'),
				tabs: this.getTabs(),
				children: this.getChildren()
			}
		}, this.getTabBodyLayout());

		let body = this.getDOMChildOf('NTabBody');

		return this.renderInternalComponent(layout, body ? body.props : null, {
			ref: 'body'
		});
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
	onItemActived(evt) {
		this.refs.body.setActiveTabIndex(evt.tabIndex);
		this.fireEventToMonitor($.Event('active', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: evt.tab,
			tabIndex: evt.tabIndex
		}));
	}
	onItemShouldActive = (evt) => {
		return this.fireEventToMonitor($.Event('shouldActive', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: evt.tab,
			tabIndex: evt.tabIndex
		}));
	}
	setActiveTabIndex(tabIndex) {
		this.refs.header.setActiveTabIndex(tabIndex);
	}
	getActiveTabIndex() {
		return this.refs.header.getActiveTabIndex();
	}
}

class NArrayTab extends NTabContainer(NHierarchyComponent) {
	buildLayout(props) {
		super.buildLayout(props);
		delete this.state.tabs;
		this.state.tabs = this.getTabs();
	}
	renderInNormal() {
		let layoutJSON = {
			label: this.getLayout().getLabel(),
			dataId: this.getDataId(),
			comp: Envs.deepMergeTo({
				type: Envs.COMPONENT_TYPES.TAB,
				tabs: this.getTabs()
			}, this.getLayout().getOptions()),
			evt: {
				active: this.onItemActived,
				shouldActive: this.onItemShouldActive
			}
		};
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderInternalComponent(layoutJSON, {
				ref: 'tab'
			})}
		</div>);
	}
	getComponentClassName() {
		return 'n-array-tab';
	}
	isAddable() {
		return this.getLayoutOptionValue('addable');
	}
	getTabs() {
		if (this.state.tabs) {
			return this.state.tabs;
		}
		let tabs = this.getValueFromModel().map((item, itemIndex) => {
			let model = this.createItemModel(item, itemIndex);
			return {
				model: model
			};
		});
		if (this.isAddable()) {
			tabs.push({
				label: Envs.TAB_ADD_TEXT,
				model: new Model({}),
				leadChildren: {
					icon: {
						comp: {
							type: Envs.COMPONENT_TYPES.ICON,
							icon: Envs.TAB_ADD_ICON
						}
					}
				},
				children: function() {
					return {
						label: {
							label: Envs.TAB_NO_ITEM_TEXT,
							comp: {
								type: Envs.COMPONENT_TYPES.LABEL,
								textFromModel: false
							}
						}
					}
				}
			});
		}
		return tabs;
	}
	getValueFromModel() {
		let value = super.getValueFromModel();
		return value ? value : [];
	}
	onModelChanged(evt) {
		if (evt.type === 'remove') {
			let activeTabIndex = this.getActiveTabIndex();
			if (activeTabIndex >= this.getValueFromModel().length) {
				this.state.activeTabIndex = this.getValueFromModel().length - 1;
			}
		}
		super.onModelChanged(evt);
	}
	onItemActived = (evt) => {
		this.fireEventToMonitor($.Event('active', {
			target: ReactDOM.findDOMNode(this.refs.me),
			tab: evt.tab,
			tabIndex: evt.tabIndex
		}));
	}
	onItemShouldActive = (evt) => {
		if (this.isAddable() && evt.tabIndex == this.getValueFromModel().length) {
			// add tab clicked
			this.onAddClicked(evt);
			return false;
		} else {
			return this.fireEventToMonitor($.Event('shouldActive', {
				target: ReactDOM.findDOMNode(this.refs.me),
				tab: evt.tab,
				tabIndex: evt.tabIndex
			}));
		}
	}
	onAddClicked(evt) {
		let monitor = this.getEventMonitor('addClick');
		if (monitor) {
			let ret = monitor.call(this, evt);
			if (ret == null) {
				// do nothing
			} else if (typeof ret.done === 'function') {
				ret.done((item) => {
					this.addItem(item);
				});
			} else {
				this.addItem(ret);
			}
		} else {
			this.addItem({});
		}
	}
	addItem(item) {
		this.getModel().add(this.getDataId(), item);
		this.setActiveTabIndex(this.getValueFromModel().length - 1);
	}
	setActiveTabIndex(tabIndex) {
		this.refs.tab.setActiveTabIndex(tabIndex);
	}
	getActiveTabIndex() {
		return this.refs.tab.getActiveTabIndex();
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
Envs.COMPONENT_TYPES.ARRAY_TAB = {type: 'n-array-tab', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.ARRAY_TAB.type, function (options) {
	return <NArrayTab {...options} />;
});

export {NArrayTab, NTab, NTabHeader, NTabBody}
export * from './n-component'