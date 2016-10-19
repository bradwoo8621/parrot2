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

const NTableContainer = (ParentClass) => class extends ParentClass {
	buildLayout(props) {
		super.buildLayout(props);
		this.state.sortable = this.getSortable();
	}

	getColumns() {
		return this.getLayoutOptionValue('columns');
	}
	getColumnWidthClassName(width) {
		return this.getWidthClassName(width);
	}
	getValueFromModel() {
		let values = super.getValueFromModel();
		return values == null ? [] : values;
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
	getDefaultSorter(column, sortType) {
		return (column, sortType) => {
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
		};
	}
}

class NTableHeader extends NTableContainer(NHierarchyComponent) {
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
			{this.renderLeadingChildren()}
			{column.title}
			{this.renderHeaderSortIcon(column)}
			{this.renderTailingChildren()}
		</div>);
	}
	renderInNormal() {
		let className = classnames(this.getComponentStyle(),
								   'n-row',
								   this.getTableHeaderStyle());
		return (<div className={className}
					 ref='me'>
			{this.getColumns().map((column, columnIndex) => {
				return this.renderHeaderCell(column, columnIndex);
			})}
		</div>);
	}

	getComponentClassName() {
		return 'n-table-header';
	}
	getTableHeaderStyle() {
		return 'n-table-header-' + this.getLayoutOptionValue('style', 'default');
	}
	onHeaderSortIconClicked(column, evt) {
		evt.preventDefault();
		let sortType = this.getColumnSortType(column);
		if (sortType === NTable.ASC) {
			sortType = NTable.DESC;
		} else {
			sortType = NTable.ASC;
		}
		let ret = this.fireEventToMonitor($.Event('columnSort', {
			target: ReactDOM.findDOMNode(this.refs.me),
			nData: {
				column: column,
				sortType: sortType
			}
		}));
		this.handleEventResult(ret, {
			handler: () => {
				this.setState({
					sortStatus: [column.dataId, sortType]
				});
			},
			false: () => {
				this.forceUpdate();
			}
		});
	}
}

class NTableBody extends NTableContainer(NHierarchyComponent) {
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
	renderInNormal() {
		let className = classnames(this.getComponentStyle(),
								   this.getTableBodyStyle());
		return (<div className={className}
					 ref='me'>
			{this.getValueFromModel().map((row, rowIndex) => {
				let rowModel = this.createItemModel(row, rowIndex);
				return this.renderBodyRow(rowModel, rowIndex);
			})}
		</div>);
	}
	getComponentClassName() {
		return 'n-table-body';
	}
	getTableBodyStyle() {
		return 'n-table-body-' + this.getLayoutOptionValue('style', 'default');
	}

	sortColumn(column, sortType) {
		let deferred = $.Deferred();

		sortType = sortType ? sortType : NTable.ASC;		
		let sorter = this.getSorter(column);
		sorter = sorter ? sorter : this.getDefaultSorter();
		this.handleEventResult(sorter.call(this, column, sortType), {
			handler: () => {
				deferred.resolve();
				this.onColumnSorted(column, sortType);
			},
			fail: () => {
				deferred.reject();
			}
		});
		return deferred.promise();
	}
	onColumnSorted(column, sortType) {
		this.forceUpdate();
		this.fireEventToMonitor($.Event('columnSort', {
			target: ReactDOM.findDOMNode(this.refs.me),
			nData: {
				column: column,
				sortType: sortType
			}
		}));
	}
}

class NTable extends NTableContainer(NHierarchyComponent) {
	static ASC = 'asc'
	static DESC = 'desc'
	renderHeader() {
		let layout = Envs.deepMergeTo({}, {
			label: this.getLayout().getLabel(),
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.TABLE_HEADER,
				style: this.getLayoutOptionValue('style'),
				sortable: this.getLayoutOptionValue('sortable', false),
				sorter: this.getLayoutOptionValue('sorter', null, true),
				columns: this.getColumns(),
				leadChildren: this.getLeadingChildren(),
				tailChildren: this.getTailingChildren()
			},
			evt: {
				columnSort: this.onHeaderColumnSorting
			}
		}, this.getTableHeaderLayout());

		let header = this.getDOMChildOf('NTableHeader');

		return this.renderInternalComponent(layout, header ? header.props : null, {
			ref: 'header'
		});
	}
	renderBody() {
		let layout = Envs.deepMergeTo({}, {
			label: this.getLayout().getLabel(),
			dataId: this.getDataId(),
			comp: {
				type: Envs.COMPONENT_TYPES.TABLE_BODY,
				style: this.getLayoutOptionValue('style'),
				columns: this.getColumns()
			},
			evt: {
				columnSort: this.onBodyColumnSorted
			}
		}, this.getTableBodyLayout());

		let header = this.getDOMChildOf('NTableBody');

		return this.renderInternalComponent(layout, header ? header.props : null, {
			ref: 'body'
		});
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
	getTableHeaderLayout() {
		return this.getLayoutOptionValue('header');
	}
	getTableBodyLayout() {
		return this.getLayoutOptionValue('body');
	}

	onHeaderColumnSorting = (evt) => {
		return this.refs.body.sortColumn(evt.nData.column, evt.nData.sortType);
	}
	onBodyColumnSorted = (evt) => {
		this.fireEventToMonitor($.Event('columnSort', {
			target: ReactDOM.findDOMNode(this.refs.me),
			nData: {
				column: evt.nData.column,
				sortType: evt.nData.sortType
			}
		}));
	}
}

Envs.COMPONENT_TYPES.TABLE_HEADER = {type: 'n-table-header', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TABLE_HEADER.type, function (options) {
	return <NTableHeader {...options} />;
});
Envs.COMPONENT_TYPES.TABLE_BODY = {type: 'n-table-body', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TABLE_BODY.type, function (options) {
	return <NTableBody {...options} />;
});
Envs.COMPONENT_TYPES.TABLE = {type: 'n-table', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.TABLE.type, function (options) {
	return <NTable {...options} />;
});

export {NTable, NTableHeader, NTableBody}
export * from './n-component'