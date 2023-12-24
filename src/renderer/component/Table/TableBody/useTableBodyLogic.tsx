import { DynamicTableItem } from "../Table";
import { TableHeaderCell } from "../TableHeader";

export function useTableBodyLogic(
  columns: ReadonlyArray<TableHeaderCell>,
  rows: ReadonlyArray<DynamicTableItem>
) {
  const isActionColumn = (column: TableHeaderCell) =>
    column.dataIndex === "actions";

  return rows.map((row) => {
    const rowReducedToColumnData: DynamicTableItem = {
      id: row.id,
      name: row.name,
    };

    columns.forEach((column) => {
      if (isActionColumn(column)) {
        return;
      }

      const keyName = column.dataIndex;
      rowReducedToColumnData[keyName] = row[keyName];
    });

    return rowReducedToColumnData;
  });
}
