import { useEffect, useState } from "react";
import { DynamicTableItem } from "../../../component/Table";

export function useCollection<T extends DynamicTableItem>(
  apiName: keyof Window
) {
  const [items, setItems] = useState<T[]>([]);

  useEffect(() => {
    async function getItems() {
      const response = await window[apiName].find();
      setItems(response);
    }

    getItems();
  }, []);

  async function addOne(item: T) {
    const response = await window[apiName].create(item);
    setItems([...items, response]);
    return response;
  }

  function updateOne(armor: T) {
    const index = items.findIndex((item) => item.id === armor.id);
    const newItems = [...items];

    window[apiName].update({ ...newItems[index], ...armor });
    newItems[index] = armor;
    setItems(newItems);
  }

  function deleteOne(id: number) {
    window[apiName].delete(id);
    const newArmors = items.filter((item) => item.id !== id);
    setItems(newArmors);
  }

  return {
    items,
    addOne,
    updateOne,
    deleteOne,
  };
}
