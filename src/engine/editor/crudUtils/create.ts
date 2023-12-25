import { DuplicateError } from "../../../error/DuplicateError";
import { DynamicTableItem } from "../../../renderer/component/Table";
import { writeEditorFile } from "../fileUtils/writeEditorFile";
import { getCollection } from "./find";

export function createOne<T extends DynamicTableItem = DynamicTableItem>(
  item: T,
  collectionFilePath: string
): T {
  const items = getCollection(collectionFilePath);
  ensureNameIsUnique(items, item.name);
  const newItemID = getNextID(items);
  const newItem = { ...item, id: newItemID };
  writeEditorFile(collectionFilePath, [...items, newItem]);
  return newItem;
}

function ensureNameIsUnique(items: readonly DynamicTableItem[], name: string) {
  const item = items.find((item) => item.name === name);
  if (item) throw new DuplicateError(`Item with name ${name} already exists`);
}

function getNextID(item: readonly DynamicTableItem[]) {
  if (item.length === 0) return 1;
  return item[item.length - 1].id + 1;
}
