import { TableHeaderCell } from "../../../../component/Table/TableHeader/TableHeader";

export const ARMOR_LIST_COLUMNS: ReadonlyArray<TableHeaderCell> = [
  {
    value: "Name",
    dataIndex: "name",
  },
  {
    value: "Description",
    dataIndex: "description",
  },
  {
    value: "Value",
    dataIndex: "value",
  },
  {
    value: "Protection",
    dataIndex: "protection",
  },
  {
    value: "Actions",
    dataIndex: "actions",
    colspan: 2,
  },
];
