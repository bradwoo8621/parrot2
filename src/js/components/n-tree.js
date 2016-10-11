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
					key={itemIndex}>
			{this.renderNodeIcon(item, itemIndex, parent)}
			<span className='n-tree-node-text'
				  onClick={hasChildren ? this.onItemClicked.bind(this, item, itemIndex, parent) : null}>
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
					  onClick={this.onItemClicked.bind(this, {root: true}, 0, null)}>
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

	onItemClicked(item, itemIndex, parent, evt) {
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
				});
			} else {
				target.closest('li').addClass('n-tree-node-onexpand');
				children.slideDown(500, () => {
							target.closest('li')
									.addClass('n-tree-node-expanded')
									.removeClass('n-tree-node-collapsed n-tree-node-onexpand');
							children.css('display', '');
						});
			}
		}
		this.fireEventToMonitor($.Event('click', {
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