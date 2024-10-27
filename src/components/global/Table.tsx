import React, { FC, useState, useMemo, ReactNode, ChangeEvent } from "react";


export interface Column<T> {
	header: string;
	accessor: keyof T;
	sortable?: boolean;
	renderCell?: (value: T[keyof T], row: T) => ReactNode;
	width?: string; // For column resizing
}

interface TableProps<T> {
	data: T[];
	columns: Column<T>[];
	sortable?: boolean;
	filterable?: boolean;
	pagination?: boolean;
	rowsPerPage?: number;
	loading?: boolean;
	onRowSelect?: (selectedRows: T[]) => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Table: FC<TableProps<any>> = ({
	data,
	columns,
	sortable = true,
	filterable = false,
	pagination = false,
	rowsPerPage = 5,
	loading = false,
	onRowSelect,
}) => {
	const [sortConfig, setSortConfig] = useState<{ key: string; direction: "asc" | "desc" } | null>(
		null
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [filter, setFilter] = useState("");
	const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

	const sortedData = useMemo(() => {
		if (!sortConfig) return data;
		return [...data].sort((a, b) => {
			const aValue = a[sortConfig.key];
			const bValue = b[sortConfig.key];
			if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
			if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
			return 0;
		});
	}, [data, sortConfig]);

	const filteredData = useMemo(() => {
		if (!filterable || !filter) return sortedData;
		return sortedData.filter((row) =>
			columns.some((col) =>
				String(row[col.accessor]).toLowerCase().includes(filter.toLowerCase())
			)
		);
	}, [sortedData, filter, filterable, columns]);

	const paginatedData = useMemo(() => {
		if (!pagination) return filteredData;
		const start = (currentPage - 1) * rowsPerPage;
		return filteredData.slice(start, start + rowsPerPage);
	}, [filteredData, pagination, currentPage, rowsPerPage]);

	const handleSort = (key: string) => {
		if (!sortable) return;
		const direction =
			sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
		setSortConfig({ key, direction });
	};

	const handleRowSelect = (index: number) => {
		const newSelectedRows = new Set(selectedRows);
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		newSelectedRows.has(index) ? newSelectedRows.delete(index) : newSelectedRows.add(index);
		setSelectedRows(newSelectedRows);
		onRowSelect?.(Array.from(newSelectedRows).map((i) => paginatedData[i]));
	};

	const selectAllRows = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			setSelectedRows(new Set(paginatedData.map((_, index) => index)));
		} else {
			setSelectedRows(new Set());
		}
	};

	return (
		<div className="table">
			{filterable && (
				<input
					type="text"
					className="table__filter"
					placeholder="Filter..."
					value={filter}
					onChange={(e) => setFilter(e.target.value)}
				/>
			)}

			{loading ? (
				<div className="table__loading">Loading...</div>
			) : filteredData.length === 0 ? (
				<div className="table__empty">No data available</div>
			) : (
				<table className="table__main" aria-label="Data Table">
					<thead className="table__header">
						<tr className="table__row">
							<th className="table__header-cell">
								<input type="checkbox" onChange={selectAllRows} />
							</th>
							{columns.map((col, index) => (
								<th
									key={col.accessor as string}
									className={`table__header-cell ${
										col.sortable ? "table__header-cell--sortable" : ""
									}`}
									style={{ width: col.width }}
									onClick={() =>
										col.sortable && handleSort(col.accessor as string)
									}
								>
									{col.header}
									{sortable && sortConfig?.key === col.accessor && (
										<span
											className={`table__sort-icon table__sort-icon--${sortConfig.direction}`}
										/>
									)}
								</th>
							))}
						</tr>
					</thead>
					<tbody className="table__body">
						{paginatedData.map((row, rowIndex) => (
							<tr key={rowIndex} className="table__row">
								<td className="table__cell">
									<input
										type="checkbox"
										checked={selectedRows.has(rowIndex)}
										onChange={() => handleRowSelect(rowIndex)}
									/>
								</td>
								{columns.map((col) => (
									<td key={col.accessor as string} className="table__cell">
										{col.renderCell
											? col.renderCell(row[col.accessor], row)
											: row[col.accessor]}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}

			{pagination && (
				<div className="table__pagination">
					<button
						className="table__pagination-button"
						disabled={currentPage === 1}
						onClick={() => setCurrentPage((prev) => prev - 1)}
					>
						Previous
					</button>
					<span className="table__pagination-info">
						Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
					</span>
					<button
						className="table__pagination-button"
						disabled={currentPage * rowsPerPage >= filteredData.length}
						onClick={() => setCurrentPage((prev) => prev + 1)}
					>
						Next
					</button>
				</div>
			)}
		</div>
	);
};
