import { DynamicTableItem } from "../../../renderer/component/Table";
import { readEditorFile } from "../fileUtils/readFile";

export function getCollection<T = DynamicTableItem>(
  collectionFilePath: string
): T[] {
  return readEditorFile(collectionFilePath);
}
