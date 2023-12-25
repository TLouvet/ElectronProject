import { NotFoundError } from "../../../error/NotFoundError";
import { DynamicTableItem } from "../../../renderer/component/Table";
import { writeEditorFile } from "../fileUtils/writeEditorFile";
import { getCollection } from "./find";

export function updateOne<T extends DynamicTableItem>(
  item: Partial<T>,
  collectionFilePath: string
) {
  if (!item.id) {
    throw new Error("Item id is required");
  }

  const collection = getCollection<T>(collectionFilePath);
  const itemToUpdate = getWeaponToUpdate(collection, item.id);
  const updatedItem = { ...itemToUpdate, ...item };
  const updateCollection = collection.map((entry) =>
    entry.id === item.id ? updatedItem : entry
  );
  writeEditorFile(collectionFilePath, updateCollection);

  return updatedItem;
}

function getWeaponToUpdate(items: readonly DynamicTableItem[], id: number) {
  const itemToUpdate = items.find((i) => i.id === id);
  if (!itemToUpdate) {
    throw new NotFoundError(`Item with id ${id} not found`);
  }
  return itemToUpdate;
}
