import { DynamicTableItem } from "../../../renderer/component/Table";
import { writeEditorFile } from "../fileUtils/writeEditorFile";
import { getCollection } from "./find";

export function deleteOne(id: number, collectionFilePath: string) {
  const items = getCollection(collectionFilePath);
  writeEditorFile(collectionFilePath, filterCollection(items, id));
}

function filterCollection<T extends DynamicTableItem>(
  collection: T[],
  id: number
): T[] {
  return collection.filter((item) => item.id !== id);
}
