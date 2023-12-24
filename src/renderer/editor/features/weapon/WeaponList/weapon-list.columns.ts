import { TableHeaderCell } from "../../../../component/Table/TableHeader/TableHeader";

export const WEAPON_LIST_COLUMNS: ReadonlyArray<TableHeaderCell> = [
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
    value: "Damage",
    dataIndex: "damage",
  },
  {
    value: "Actions",
    dataIndex: "actions",
    colspan: 2,
  },
];
