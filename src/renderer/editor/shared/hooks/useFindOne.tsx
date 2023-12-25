import { useEffect, useState } from "react";

export function useFindOne<T>(apiName: keyof Window, id: number | null) {
  const [item, setItem] = useState<T>();

  useEffect(() => {
    async function getItem() {
      const response = await window[apiName].findOne(id);
      setItem(response);
    }

    getItem();
  }, [id]);

  return item;
}
