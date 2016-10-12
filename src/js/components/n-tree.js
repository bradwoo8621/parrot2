import {
	React, 
	ReactDOM, 
	$, 
	classnames, 
	Envs, 
	Model, 
	NComponent, 
	NCodeTableComponent} from './n-component'
import {NIcon} from './n-icon'

class NTree extends NCodeTableComponent(NComponent) {
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
				clickHandler = this.onItemClicked.bind(this, item, itemIndex, parent);
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
	renderChildrenNodes(parent) {
		if (this.hasChildren(parent)) {
			return (<ul className='n-tree-node'>
				{parent.children.map((child, childIndex) => {
					return this.renderNode(child, childIndex, parent);
				})}
			</ul>);
		}
	}
	renderNode(item, itemIndex, parent) {
		let hasChildren = this.hasChildren(item);
		let className = classnames({
			'n-tree-node-branch': hasChildren,
			'n-tree-node-leaf': !hasChildren
		});
		return (<li className={className}
					data-node-id={item.id}
					key={itemIndex}>
			{this.renderNodeIcon(item, itemIndex, parent)}
			<span className='n-tree-node-text'
				  tabIndex='0'
				  onClick={hasChildren ? this.onItemClicked.bind(this, item, itemIndex, parent) : null}
				  onKeyDown={this.onItemKeyUp.bind(this, item, itemIndex, parent)}>
				{item.text}
			</span>
			{this.renderChildrenNodes(item)}
		</li>);
	}
	renderTopLevelNodes() {
		return (<ul className='n-tree-node'>
			{this.getCodeTable().map((item, itemIndex) => {
				return this.renderNode(item, itemIndex, null);
			})}
		</ul>);
	}
	renderRoot() {
		return (<ul className='n-tree-node n-tree-node-root'>
			<li className='n-tree-node-branch'>
				<NIcon model={this.getModel()}
					   n-comp-icon={this.getRootIcon()}
					   n-styles-comp='!n-tree-node-icon'
					   n-evt-click={this.onItemClicked.bind(this, {root: true}, 0, null)} />
				<span className='n-tree-node-text'
					  tabIndex='0'
					  onClick={this.onItemClicked.bind(this, {root: true}, 0, null)}
					  onKeyDown={this.onItemKeyUp.bind(this, {root: true}, 0, null)}>
					{this.getRootText()}
				</span>
				{this.renderTopLevelNodes()}
			</li>
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
	hasChildren(item) {
		return item.children && item.children.length > 0;
	}

	// node should be a <li> dom node
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
	expandTo(nodeLevel) {
		// TODO 
	}
	toggleItemExpand(item, itemIndex, parent, evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0) {
			evt.preventDefault();
			if (children.is(':visible')) {
				children.slideUp(500, () => {
					target.closest('li')
							.addClass('n-tree-node-collapsed')
							.removeClass('n-tree-node-expanded');
					children.css('display', '');
					this.fireEventToMonitor($.Event('nodeCollapse', {
						target: ReactDOM.findDOMNode(this.refs.me),
						originalEvent: evt,
						node: item,
						parentNode: parent
					}));
				});
			} else {
				target.closest('li').addClass('n-tree-node-onexpand');
				children.slideDown(500, () => {
					target.closest('li')
							.addClass('n-tree-node-expanded')
							.removeClass('n-tree-node-collapsed n-tree-node-onexpand');
					children.css('display', '');
					this.fireEventToMonitor($.Event('nodeExpand', {
						target: ReactDOM.findDOMNode(this.refs.me),
						originalEvent: evt,
						node: item,
						parentNode: parent
					}));
				});
			}
		}
	}
	onItemClicked(item, itemIndex, parent, evt) {
		this.toggleItemExpand(item, itemIndex, parent, evt);
		this.fireEventToMonitor($.Event('click', {
			target: ReactDOM.findDOMNode(this.refs.me),
			originalEvent: evt,
			node: item,
			parentNode: parent
		}));
	}
	onItemLeftArrowKeyUp(item, itemIndex, parent, evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0 && children.is(':visible')) {
			// has children and expanded now
			// collapse it
			this.toggleItemExpand(item, itemIndex, parent, evt);
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
	onItemRightArrowKeyUp(item, itemIndex, parent, evt) {
		let target = $(evt.target);
		let children = target.siblings('ul');
		if (children.length > 0 && !children.is(':visible')) {
			// has children and collapsed now
			// expand it
			this.toggleItemExpand(item, itemIndex, parent, evt);
		} else if (children.length > 0) {
			evt.preventDefault();
			evt.stopPropagation();
			// already expanded, focus the first child
			this.focusNode(children.children('li').first());
		}
	}
	onItemUpArrowKeyUp(item, itemIndex, parent, evt) {
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
	onItemDownArrowKeyUp(item, itemIndex, parent, evt) {
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
	onItemKeyUp(item, itemIndex, parent, evt) {
		let keycode = evt.keyCode;
		if (keycode === 37) {
			this.onItemLeftArrowKeyUp(item, itemIndex, parent, evt);
		} else if (keycode === 38) {
			this.onItemUpArrowKeyUp(item, itemIndex, parent, evt);
		} else if (keycode === 39) {
			this.onItemRightArrowKeyUp(item, itemIndex, parent, evt);
		} else if (keycode === 40) {
			// down arrow
			this.onItemDownArrowKeyUp(item, itemIndex, parent, evt);
		}
		this.fireEventToMonitor($.Event('keyup', {
			target: ReactDOM.findDOMNode(this.refs.me),
			originalEvent: evt,
			node: item,
			parentNode: parent
		}));
	}
}

Envs.COMPONENT_TYPES.TREE = {type: 'n-tree'};
Envs.setRenderer(Envs.COMPONENT_TYPES.TREE.type, function (options) {
	return <NTree {...options} />;
});

export {NTree}
export * from './n-component'