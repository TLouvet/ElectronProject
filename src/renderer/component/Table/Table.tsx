import { TableHeader, TableHeaderCell } from "./TableHeader";
import { TableBody } from "./TableBody";
import style from "./Table.module.scss";

export type DynamicTableItem = {
  id: number;
  name: string;
  [key: string]: any;
};

export type TableProps = {
  columns: ReadonlyArray<TableHeaderCell>;
  withActions?: boolean;
  rows: ReadonlyArray<DynamicTableItem>;
  actionsCallbacks: {
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
  };
};

export function Table({
  columns,
  withActions = false,
  rows,
  actionsCallbacks,
}: TableProps) {
  return (
    <table className={style.table}>
      <TableHeader columns={columns} />
      <TableBody
        columns={columns}
        rows={rows}
        withActions={withActions}
        actionsCallbacks={actionsCallbacks}
      />
    </table>
  );
}
