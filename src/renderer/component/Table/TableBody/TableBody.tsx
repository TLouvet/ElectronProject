import { DynamicTableItem } from "../Table";
import { TableActions } from "../TableActions";
import { TableHeaderCell } from "../TableHeader";
import { useTableBodyLogic } from "./useTableBodyLogic";
import style from "../Table.module.scss";

export type TableBodyProps = {
  columns: ReadonlyArray<TableHeaderCell>;
  rows: ReadonlyArray<DynamicTableItem>;
  withActions?: boolean;
  actionsCallbacks: {
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
  };
};

export function TableBody({
  columns,
  rows,
  withActions,
  actionsCallbacks: { onEdit, onDelete },
}: TableBodyProps) {
  const mappedData = useTableBodyLogic(columns, rows);

  return (
    <tbody className={style.tbody}>
      {mappedData.map((item) => (
        <tr key={`${item.id}-${item.name}`}>
          {Object.keys(item).map((key) => (
            <td key={`td-${key}`} className={style.tcell}>
              {item[key]}
            </td>
          ))}
          <TableActions
            active={withActions}
            onEdit={() => onEdit(item.id)}
            onDelete={() => onDelete(item.id)}
          />
        </tr>
      ))}
    </tbody>
  );
}
