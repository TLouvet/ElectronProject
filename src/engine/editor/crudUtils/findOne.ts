import { getCollection } from "./find";

export function findOne(id: number | null, collectionFilePath: string) {
  if (!id) {
    return null;
  }

  const items = getCollection(collectionFilePath);
  return items.find((item) => item.id === id);
}
