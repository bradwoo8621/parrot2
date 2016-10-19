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
import {NIcon} from './n-icon'

class NTable extends NHierarchyComponent {
	static ASC = 'asc'
	static DESC = 'desc'
	buildLayout(props) {
		super.buildLayout(props);
		this.state.sortable = this.getSortable();
	}
	renderHeaderSortIcon(column) {
		if (!this.isSortable() && !column.sorter) {
			return null;
		}
		let layout = {
			comp: {
				type: Envs.COMPONENT_TYPES.ICON,
				icon: () => {
					let sortType = this.getColumnSortType(column);
					if (sortType === NTable.ASC) {
						return 'sort-amount-asc';
					} else if (sortType == NTable.DESC) {
						return 'sort-amount-desc';
					} else {
						return 'sort';
					}
				}
			},
			evt: {
				click: this.onHeaderSortIconClicked.bind(this, column)
			},
			styles: {comp: '!n-table-sort-icon'}
		};
		return this.renderInternalComponent(layout);
	}
	renderHeaderCell(column, columnIndex) {
		let className = classnames('n-table-header-cell',
								   this.getColumnWidthClassName(column.width));
		return (<div className={className}
					 key={columnIndex}>
			{column.title}
			{this.renderHeaderSortIcon(column)}
		</div>);
	}
	renderHeader() {
		let className = classnames('n-table-header',
								   'n-row',
								   `n-table-header-${this.getTableStyle()}`);
		return (<div className={className}
					 ref='header'>
			{this.getColumns().map((column, columnIndex) => {
				return this.renderHeaderCell(column, columnIndex);
			})}
		</div>);
	}
	renderBodyCell(rowModel, rowIndex, column, columnIndex) {
		let className = classnames('n-table-body-cell',
								   this.getColumnWidthClassName(column.width));
		return (<div className={className}
					 key={columnIndex}>
			{rowModel.get(column.dataId)}
		</div>);
	}
	renderBodyRow(rowModel, rowIndex) {
		let className = classnames({
			'n-table-body-row': true,
			'n-row': true,
			'n-table-body-row-odd': rowIndex % 2 == 0,
			'n-table-body-row-even': rowIndex % 2 == 1
		});
		return (<div className={className}
					 key={rowIndex}>
			{this.getColumns().map((column, columnIndex) => {
				return this.renderBodyCell(rowModel, rowIndex, column, columnIndex);
			})}
		</div>);
	}
	renderBody() {
		let className = classnames('n-table-body',
								   `n-table-body-${this.getTableStyle()}`);
		return (<div className={className}
					 ref='body'>
			{this.getValueFromModel().map((row, rowIndex) => {
				let rowModel = this.createItemModel(row, rowIndex);
				return this.renderBodyRow(rowModel, rowIndex);
			})}
		</div>);
	}
	renderFooter() {
		let className = classnames('n-table-footer',
								   'n-row',
								   `n-table-footer-${this.getTableStyle()}`);
		return (<div className={className}
					 ref='footer'>
		</div>);
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle(),
								   `n-table-${this.getTableStyle()}`);
		return (<div className={className}
					 ref='me'>
			{this.renderHeader()}
			{this.renderBody()}
			{this.renderFooter()}
		</div>);
	}

	getComponentClassName() {
		return 'n-table';
	}
	getTableStyle() {
		return this.getLayoutOptionValue('style', 'default');
	}
	isSortable() {
		return this.state.sortable;
	}
	getSortable() {
		return this.getLayoutOptionValue('sortable', false);
	}
	getSorter(column) {
		if (column.sorter) {
			return column.sorter;
		}
		return this.getLayoutOptionValue('sorter', null, true);
	}
	getColumnSortType(column) {
		let status = this.state.sortStatus;
		if (status && status[0] == column.dataId) {
			return status[1];
		} else {
			return null;
		}
	}
	getColumnWidthClassName(width) {
		return this.getWidthClassName(width);
	}
	getColumns() {
		return this.getLayoutOptionValue('columns');
	}

	getValueFromModel() {
		let values = super.getValueFromModel();
		return values == null ? [] : values;
	}
	sortColumn(column, sortType) {
		let values = this.getValueFromModel();
		let dataId = column.dataId;
		let dataType = column.dataType;
		values.sort((a, b) => {
			let ret = 0;
			let valueA = a[dataId];
			let valueB = b[dataId];
			if (dataType === 'number')  {
				valueA = valueA == null ? -Infinity : valueA;
				valueB = valueB == null ? -Infinity : valueB;
				ret = valueA - valueB;
			} else {
				valueA = valueA == null ? '' : (valueA + '');
				valueB = valueB == null ? '' : (valueB + '');
				ret = valueA.localeCompare(valueB);
			}
			if (sortType === NTable.ASC) {
				return ret;
			} else {
				return 0 - ret;
			}
		});
	}
	onHeaderSortIconClicked(column, evt) {
		evt.preventDefault();
		let sortType = this.getColumnSortType(column);
		if (sortType === NTable.ASC) {
			sortType = NTable.DESC;
		} else {
			sortType = NTable.ASC;
		}
		
		let sorter = this.getSorter(column);
		sorter = sorter ? sorter : this.sortColumn;

		this.handleEventResult(sorter.call(this, column, sortType), {
			handler: () => {
				this.setState({
					sortStatus: [column.dataId, sortType]
				});
			}
		});
	}
}

Envs.COMPONENT_TYPES.TABLE = {type: 'n-table', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TABLE.type, function (options) {
	return <NTable {...options} />;
});

export {NTable}
export * from './n-component'