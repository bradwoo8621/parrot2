import {
	React, 
	ReactDOM, 
	$, 
	lodash,
	classnames, 
	Envs, 
	Model, 
	Layout,
	NComponent, 
	NCodeTableComponent} from './n-component'
import {NIcon} from './n-icon'
import {NCheck} from './n-check'

class NTree extends NCodeTableComponent(NComponent) {
	static ROOT_ID = '-root'
	constructor(props) {
		super(props);
		this.state.expandStatus = this.getInitExpandLevel();
	}
	buildLayout(props) {
		super.buildLayout(props);
		this.state.nodeCheckable = this.isNodeCheckable();
	}
	postDidMount() {
		this.state.expandStatus = [];
		$(ReactDOM.findDOMNode(this.refs.me))
					.find('li')
					.each((index, dom) => {
						let node = $(dom);
						if (node.hasClass('n-tree-node-expanded')) {
							this.state.expandStatus.push(node.attr('data-node-id'));
						}
				  	});
	}
	renderNodeIcon(item, itemIndex, parent) {
		let clickHandler;
		let icon = item.icon;
		if (!icon) {
			let nodeIcon = this.getNodeIcon();
			if (nodeIcon) {
				icon = nodeIcon.call(this, item, itemIndex, parent);
			}
		}
		if (!icon) {
			if (this.hasChildren(item)) {
				icon = Envs.TREE_BRANCH_ICON;
				clickHandler = this.onItemClicked;
			} else {
				icon = Envs.TREE_LEAF_ICON;
			}
		}
		let layout = {
			comp: {
				type: Envs.COMPONENT_TYPES.ICON,
				icon: icon
			},
			styles: {
				comp: '!n-tree-node-icon'
			},
			evt: {
				click: clickHandler
			}
		};
		return this.renderInternalComponent(layout);
	}
	renderNodeCheck(item, itemIndex, parent) {
		let model = new Model({value: this.isItemChecked(item)})
							.addPostChangeListener('value', (evt) => {
								this.onItemCheckChanged(item, evt.new);
							});
		let layout = new Layout('value', {
			comp: {
				type: Envs.COMPONENT_TYPES.CHECK
			},
			evt: {
				'jq.keydown': this.onItemKeyDown
			}
		});
		return <NCheck model={model}
					   layout={layout} />;
	}
	renderChildrenNodes(parent, nodeLevel) {
		if (this.hasChildren(parent)) {
			return (<ul className='n-tree-node'
						data-node-level={nodeLevel}>
				{parent.children.map((child, childIndex) => {
					return this.renderNode(child, childIndex, parent, nodeLevel);
				})}
			</ul>);
		}
	}
	renderNode(item, itemIndex, parent, nodeLevel) {
		let hasChildren = this.hasChildren(item);
		let expanded = this.isNodeExpanded(nodeLevel, item.id);
		let className = classnames({
			'n-tree-node-branch': hasChildren,
			'n-tree-node-leaf': !hasChildren,
			'n-tree-node-expanded': expanded,
			'n-tree-node-collapsed': !expanded
		});
		let checkable = this.isNodeCanCheck(item);
		return (<li className={className}
					data-node-id={item.id}
					data-node-level={nodeLevel}
					key={itemIndex}>
			{this.renderNodeIcon(item, itemIndex, parent)}
			{checkable ? this.renderNodeCheck(item, itemIndex, parent) : null}
			<span className='n-tree-node-text'
				  tabIndex='0'
				  onClick={hasChildren ? this.onItemClicked : null}
				  onKeyDown={this.onItemKeyDown}>
				{item.text}
			</span>
			{this.renderChildrenNodes(item, nodeLevel + 1)}
		</li>);
	}
	renderTopLevelNodes() {
		return (<ul className='n-tree-node'
					data-node-level='1'>
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderNode(item, itemIndex, null, 1);
			})}
		</ul>);
	}
	renderRoot() {
		let item = {
			id: NTree.ROOT_ID,
			text: this.getRootText(),
			icon: this.getRootIcon(),
			children: this.getCodeTable().items()
		};
		return (<ul className='n-tree-node n-tree-node-root'
					data-node-level='0'>
			{this.renderNode(item, 0, null, 0)}
		</ul>);
	}
	renderInNormal() {
		let showRoot = this.isRootShown();
		let styles = {
			minHeight: this.getMinHeight(),
			maxHeight: this.getMaxHeight(),
			minWidth: this.getMinWidth(),
			maxWidth: this.getMaxWidth()
		};
		let className = classnames(this.getComponentStyle(), {
			'n-tree-nowrap': this.isNoWrap()
		});
		return (<div className={className}
					 style={styles}
					 ref='me'>
			{showRoot ? this.renderRoot() : this.renderTopLevelNodes()}
		</div>);
	}
	getComponentClassName() {
		return 'n-tree';
	}
	isRootShown() {
		return this.getLayoutOptionValue('showRoot', true);
	}
	getNodeIcon() {
		return this.getLayoutOptionValue('nodeIcon', null, true);
	}
	getRootIcon() {
		return this.getLayoutOptionValue('rootIcon', Envs.TREE_ROOT_ICON);
	}
	getRootText() {
		return this.getLayoutOptionValue('rootText', Envs.TREE_ROOT_TEXT);
	}
	getMinHeight() {
		return this.getLayoutOptionValue('minHeight');
	}
	getMaxHeight() {
		return this.getLayoutOptionValue('maxHeight', Envs.TREE_MAX_HEIGHT);
	}
	getMinWidth() {
		return this.getLayoutOptionValue('minWidth');
	}
	getMaxWidth() {
		return this.getLayoutOptionValue('maxWidth');
	}
	isNoWrap() {
		return this.getLayoutOptionValue('noWrap', true);
	}
	getInitExpandLevel() {
		return this.getLayoutOptionValue('expandLevel', 0);
	}
	isNodeCheckable() {
		return this.getLayoutOptionValue('checkable', false);
	}
	isMultipleCheck() {
		return this.isHierarchyCheck() || this.getLayoutOptionValue('multiple', true);
	}
	isHierarchyCheck() {
		return this.getLayoutOptionValue('hierarchy', false);
	}
	isNodeCanCheck(item) {
		if (!this.state.nodeCheckable) {
			return false;
		}
		if (item.id === NTree.ROOT_ID && !this.isHierarchyCheck()) {
			return false;
		}
		let canCheck = this.getLayoutOptionValue('canCheck', null, true);
		return canCheck ? canCheck.call(this, item) : true;
	}
	hasChildren(item) {
		return item.children && item.children.length > 0;
	}
	isNodeExpanded(nodeLevel, nodeId) {
		if (typeof this.state.expandStatus === 'number') {
			return nodeLevel <= this.state.expandStatus;
		} else if (lodash.isArray(this.state.expandStatus)) {
			return this.state.expandStatus.indexOf(nodeId + '') != -1;
		} else {
			throw {
				message: 'Unsupported expanding status',
				status: this.state.expandStatus
			};
		}
	}
	getValueFromModel() {
		if (this.isMultipleCheck()) {
			let values = super.getValueFromModel();
			return values ? values : [];
		} else {
			return super.getValueFromModel();
		}
	}
	isItemChecked(item) {
		if (item.id === NTree.ROOT_ID) {
			return this.state.rootChecked;
		}
		if (this.isMultipleCheck()) {
			return this.getValueFromModel().findIndex((value) => {
				return value == item.id;
			}) !== -1;
		} else {
			return this.getValueFromModel() == item.id;
		}
	}
	computeItemsNeedChangeCheckStatus(item, checked) {
		let ids = [item.id];
		let itemMap = this.getCodeTable().map();
		if (this.isHierarchyCheck()) {
			// all its children should be changed same as parameter 'checked'
			// scan ancestors, 
			// if all directly children are checked, then the ancestor should be checked
			// if checked is false, then all ancesstors should be unchecked
			let node = $(ReactDOM.findDOMNode(this.refs.me))
								.find('li').filter((index, dom) => {
									return $(dom).attr('data-node-id') == item.id;
								});
			// find all children
			node.find('li').each((index, dom) => {
				let id = $(dom).attr('data-node-id');
				let itemChecked = this.isItemChecked({id: id});
				if (itemChecked != checked) {
					ids.push(id);
				}
			});
			// find ancestors
			let reachRoot = item.id === NTree.ROOT_ID;
			let ignoreChild = item;
			while(!reachRoot) {
				// parent is ul, parent's parent is li
				let parent = node.parent().parent();
				let id = parent.attr('data-node-id');
				let parentChecked = this.isItemChecked({id: id});
				if (parentChecked != checked) {
					if (!checked) {
						// current unchecked
						ids.push(id);
					} else {
						// current checked
						let children = null;
						if (id === NTree.ROOT_ID) {
							children = this.getCodeTable().items();
						} else {
							children = itemMap[id].children;
						}
						let uncheckedChildFound = children.some((child) => {
							if (child.id != ignoreChild.id) {
								let childChecked = this.isItemChecked(child);
								if (!childChecked) {
									return true;
								}
							}
						});
						if (uncheckedChildFound) {
							// do nothing, and break
							break;
						} else {
							ids.push(id);
						}
					}
				} else {
					// parent check same as current
					break;
				}
				ignoreChild = {id: id};
				reachRoot = id === NTree.ROOT_ID;
				node = parent;
			}
		}
		return ids.map((id) => {
			if (id === NTree.ROOT_ID) {
				return {id: id};
			}
			return itemMap[id];
		});
	}
	onItemCheckChanged(item, checked) {
		let items = this.computeItemsNeedChangeCheckStatus(item, checked);
		this.handleEventResult(this.shouldItemCheckChanged(items, checked), {
			handler: this.onItemsCheckChanged.bind(this, items, checked)
		});
	}
	onItemsCheckChanged(originalItems, checked, newItems) {
		let items = newItems ? newItems : originalItems;
		if (items.length === 0) {
			// do nothing
			return;
		}
		if (!this.isHierarchyCheck()) {
			// never consider the root node, it will not be checked
			this.setValueToModel(checked ? items[0].id : null);
			this.itemCheckChanged(items, checked);
		} else {
			let values = this.getValueFromModel();
			values = values == null ? [] : this.wrapToArray(values);
			values = values.slice(0);
			if (checked) {
				items.forEach((item) => {
					let index = values.findIndex((value) => {
						return value == item.id;
					});
					if (index === -1) {
						if (item.id === NTree.ROOT_ID) {
							this.state.rootChecked = true;
						} else {
							values.push(item.id);
						}
					}
				});
			} else {
				items.forEach((item) => {
					if (item.id === NTree.ROOT_ID) {
						this.state.rootChecked = false;
					} else {
						let index = values.findIndex((value) => {
							return value == item.id;
						});
						if (index !== -1) {
							values.splice(index, 1);
						}
					}
				});
			}
			// never put root into values
			this.setValueToModel(values);
			this.itemCheckChanged(items, checked);
		}
	}
	shouldItemCheckChanged(items, checked) {
		return this.fireEventToMonitor($.Event('shouldItemCheckChange'), {
			target: ReactDOM.findDOMNode(this.refs.me),
			ndata: {
				items: items,
				checked: checked
			}
		});
	}
	itemCheckChanged(items, checked) {
		this.fireEventToMonitor($.Event('itemCheckChange', {
			target: ReactDOM.findDOMNode(this.refs.me),
			ndata: {
				items: items,
				checked: checked
			}
		}));
	}
	nodeExpandChanged(node, expanded) {
		this.fireEventToMonitor($.Event(expanded ? 'nodeExpand' : 'nodeCollapse', {
			target: ReactDOM.findDOMNode(this.refs.me),
			ndata: {
				node: node
			}
		}));
	}
	// node should be a <li> dom node
	// make sure parent of node is expanded
	focusNode(node) {
		let offset = node.offset();
		let container = $(ReactDOM.findDOMNode(this.refs.me));
		let containerOffset = container.offset();
		let needScroll = false;
		if (offset.top < containerOffset.top
				|| (offset.top > (containerOffset.top + container.height()))) {
			needScroll = true;
		}

		let textDOMNode = node.children('.n-tree-node-text');
		if (needScroll) {
			node[0].scrollIntoView();
		}
		textDOMNode.focus();
	}
	// node level starts from 0
	// expand nodes which level <= parameter
	expandTo(nodeLevel, animation) {
		$(ReactDOM.findDOMNode(this.refs.me))
				  .find('li')
				  .each((index, dom) => {
				  		let node = $(dom);
						let level = node.attr('data-node-level');
						if (level <= nodeLevel) {
							this.expandNode(node, animation);
						} else {
							this.collapseNode(node, animation);
						}
				  });
	}
	expandAll() {
		this.expandTo(9999);
	}
	emitNodeAsExpand(node) {
		let nodeId = node.attr('data-node-id');
		if (!this.isNodeExpanded(node.attr('data-node-level'), nodeId)) {
			this.state.expandStatus.push(nodeId);
		}
	}
	expandNode(node, animation) {
		let children = node.children('ul');
		if (children.length > 0) {
			if (!children.is(':visible')) {
				this.emitNodeAsExpand(node);
				if (animation === false) {
					node.addClass('n-tree-node-expanded')
						.removeClass('n-tree-node-collapsed');
					this.nodeExpandChanged(node, true);
				} else {
					node.addClass('n-tree-node-onexpand');
					children.slideDown(300, () => {
						node.addClass('n-tree-node-expanded')
							.removeClass('n-tree-node-collapsed n-tree-node-onexpand');
						children.css('display', '');
						this.nodeExpandChanged(node, true);
					});
				}
			}
		}
	}
	// collapse nodes which level > parameter
	collapseTo(nodeLevel, animation) {
		$(ReactDOM.findDOMNode(this.refs.me))
				  .find('li')
				  .each((index, dom) => {
				  		let node = $(dom);
						let level = node.attr('data-node-level');
						if (level > nodeLevel) {
							this.collapseNode(node, animation);
						}
				  });
	}
	collapseAll() {
		this.collapseTo(-1);
	}
	emitNodeAsCollapse(node) {
		let nodeId = node.attr('data-node-id');
		let index = this.state.expandStatus.indexOf(nodeId);
		if (index != -1) {
			this.state.expandStatus.splice(index, 1);
		}
	}
	collapseNode(node, animation) {
		let children = node.children('ul');
		if (children.length > 0) {
			if (children.is(':visible')) {
				this.emitNodeAsCollapse(node);
				if (animation === false) {
					node.addClass('n-tree-node-collapsed')
						.removeClass('n-tree-node-expanded');
					this.nodeExpandChanged(node, false);
				} else {
					children.slideUp(300, () => {
						node.addClass('n-tree-node-collapsed')
							.removeClass('n-tree-node-expanded');
						children.css('display', '');
						this.nodeExpandChanged(node, false);
					});
				}
			}
		}
	}
	toggleNodeExpand(node, callback) {
		let children = node.children('ul');
		if (children.length > 0) {
			if (children.is(':visible')) {
				children.slideUp(300, () => {
					node.addClass('n-tree-node-collapsed')
							.removeClass('n-tree-node-expanded');
					children.css('display', '');
					if (callback) {
						callback.call(this);
					}
					this.nodeExpandChanged(node, false);
				});
			} else {
				node.addClass('n-tree-node-onexpand');
				children.slideDown(300, () => {
					node.addClass('n-tree-node-expanded')
							.removeClass('n-tree-node-collapsed n-tree-node-onexpand');
					children.css('display', '');
					if (callback) {
						callback.call(this);
					}
					this.nodeExpandChanged(node, true);
				});
			}
		}
	}
	onItemClicked = (evt) => {
		this.toggleNodeExpand($(evt.target).closest('li'), () => {
			evt.preventDefault();
		});
		this.fireEventToMonitor(evt);
	}
	onItemSpaceKeyDown(evt) {
		let target = $(evt.target);
		let prev = target.prev();
		if (target[0].tagName === 'SPAN' && prev.hasClass('n-check')) {
			evt.preventDefault();
			let id = target.parent().attr('data-node-id');
			this.onItemCheckChanged({
				id: id
			}, !prev.hasClass('n-checked'));
		}
	}
	onItemLeftArrowKeyDown(evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0 && children.is(':visible')) {
			// has children and expanded now
			// collapse it
			this.toggleNodeExpand($(evt.target).closest('li'), () => {
				evt.preventDefault();
			});
		} else {
			// focus parent node
			let parentNode = target.closest('ul').parent();
			if (parentNode[0].tagName === 'LI') {
				evt.preventDefault();
				evt.stopPropagation();
				this.focusNode(parentNode);
			}
		}
	}
	onItemRightArrowKeyDown(evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0 && !children.is(':visible')) {
			// has children and collapsed now
			// expand it
			this.toggleNodeExpand($(evt.target).closest('li'), () => {
				evt.preventDefault();
			});
		} else if (children.length > 0) {
			evt.preventDefault();
			evt.stopPropagation();
			// already expanded, focus the first child
			this.focusNode(children.children('li').first());
		}
	}
	onItemUpArrowKeyDown(evt) {
		let target = $(evt.target);
		let node = target.closest('li');
		let previousNode = node.prev();
		if (previousNode.length === 0) {
			// the first node of parent
			// parent is ul, parent's parent is li (if there has) or a div
			let parentNode = node.parent().parent();
			if (parentNode[0].tagName === 'LI') {
				// has parent node, focus it
				evt.preventDefault();
				evt.stopPropagation();
				this.focusNode(parentNode);
			}
		} else {
			// find the nearest visible node and focus it, no matter where it is
			let startNode = previousNode;
			while(true) {
				let children = startNode.children('ul');
				if (children.length == 0 || !children.is(':visible')) {
					// no child or collapsed, focus previous node
					evt.preventDefault();
					evt.stopPropagation();
					this.focusNode(startNode);
					break;
				} else {
					startNode = children.children('li').last();
				}
			}
		}
	}
	onItemDownArrowKeyDown(evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0 && children.is(':visible')) {
			// has children and expanded now
			// focus the first child
			evt.preventDefault();
			evt.stopPropagation();
			this.focusNode(children.children('li').first())
		} else {
			// no child, find the next visible node
			let startNode = target.closest('li');
			while(true) {
				let nextNode = startNode.next();
				if (nextNode.length === 0) {
					// find parent's next
					// parent is ul, parent's parent is li (if there has) or a div
					let parentNode = startNode.parent().parent();
					if (parentNode[0].tagName === 'LI') {
						startNode = parentNode;
					} else {
						// reach root or top level anyway
						break;
					}
				} else {
					evt.preventDefault();
					evt.stopPropagation();
					this.focusNode(nextNode);
					break;
				}
			}
		}
	}
	onItemKeyDown = (evt) => {
		let keycode = evt.keyCode;
		switch(keycode) {
			case 32: 
				this.onItemSpaceKeyDown(evt);
				break;
			case 37:
				this.onItemLeftArrowKeyDown(evt);
				break;
			case 38:
				this.onItemUpArrowKeyDown(evt);
				break;
			case 39:
				this.onItemRightArrowKeyDown(evt);
				break;
			case 40:
				this.onItemDownArrowKeyDown(evt);
				break;
		}
	}
}

Envs.COMPONENT_TYPES.TREE = {type: 'n-tree'};
Envs.setRenderer(Envs.COMPONENT_TYPES.TREE.type, function (options) {
	return <NTree {...options} />;
});

export {NTree}
export * from './n-component'