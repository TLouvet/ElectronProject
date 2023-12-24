import style from "../Table.module.scss";

export type TableHeaderCell = {
  value: string;
  dataIndex: string;
  colspan?: number;
};

export type TableHeaderProps = {
  columns: ReadonlyArray<TableHeaderCell>;
};

export function TableHeader({ columns }: TableHeaderProps) {
  return (
    <thead className={style.theader}>
      <tr>
        <th className={style.tcell}>ID</th>
        {columns.map((column) => (
          <th
            colSpan={column.colspan ?? 1}
            className={style.tcell}
            key={column.dataIndex}
          >
            {column.value}
          </th>
        ))}
      </tr>
    </thead>
  );
}
