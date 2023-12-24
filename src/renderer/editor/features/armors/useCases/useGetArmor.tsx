import { useEffect, useState } from "react";
import { IEditorArmor } from "../../../../../engine/editor/features/armor/model/editorArmor.interface";

export function useGetArmor(id: number | null): IEditorArmor | null {
  const [armor, setArmor] = useState<IEditorArmor | null>(null);

  useEffect(() => {
    async function getArmor() {
      if (id) {
        const weapon = await window.editorArmors.findOne(id);
        setArmor(weapon);
      } else {
        setArmor(null);
      }
    }
    getArmor();
  }, [id]);

  return armor;
}
