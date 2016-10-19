import {
	React, 
	ReactDOM, 
	$, 
	lodash, 
	classnames, 
	Envs, 
	Model,
	Layout, 
	NHierarchyComponent} from './n-component'


class NTable extends NHierarchyComponent {
	buildLayout(props) {
		super.buildLayout(props);
		this.state.sortable = this.isSortable();
	}
	renderHeaderColumn(column, columnIndex) {
		let className = classnames('n-table-header-column',
								   this.getColumnWidthClassName(column.width));
		return (<div className={className}
					 key={columnIndex}>
			{column.title}
		</div>);
	}
	renderHeader() {
		return (<div className='n-table-header n-row'
					 ref='header'>
			{this.getColumns().map((column, columnIndex) => {
				return this.renderHeaderColumn(column, columnIndex);
			})}
		</div>);
	}
	renderBody() {
		return (<div className='n-table-body n-row'
					 ref='body'>
		</div>);
	}
	renderFooter() {
		return (<div className='n-table-footer n-row'
					 ref='footer'>
		</div>);
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderHeader()}
			{this.renderBody()}
			{this.renderFooter()}
		</div>);
	}

	getComponentClassName() {
		return 'n-table';
	}
	isSortable() {
		return this.getLayoutOptionValue('sortable');
	}
	getColumnWidthClassName(width) {
		return this.getWidthClassName(width);
	}
	getColumns() {
		return this.getLayoutOptionValue('columns');
	}
}

Envs.COMPONENT_TYPES.TABLE = {type: 'n-table', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TABLE.type, function (options) {
	return <NTable {...options} />;
});

export {NTable}
export * from './n-component'