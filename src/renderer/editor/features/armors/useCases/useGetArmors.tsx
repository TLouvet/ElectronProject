import { useEffect, useState } from "react";
import { IEditorArmor } from "../../../../../engine/editor/features/armor/model/editorArmor.interface";

export function useGetArmors() {
  const [armors, setArmors] = useState<IEditorArmor[]>([]);

  useEffect(() => {
    async function getArmors() {
      const response = await window.editorArmors.find();
      setArmors(response);
    }

    getArmors();
  }, []);

  function addWeaponToList(armor: IEditorArmor) {
    setArmors([...armors, armor]);
  }

  function updateList(armor: IEditorArmor) {
    const index = armors.findIndex((item) => item.id === armor.id);
    const newArmors = [...armors];
    newArmors[index] = armor;
    setArmors(newArmors);
  }

  function removeWeaponFromList(id: number) {
    const newArmors = armors.filter((item) => item.id !== id);
    setArmors(newArmors);
  }

  return {
    armors,
    addWeaponToList,
    updateList,
    removeWeaponFromList,
  };
}
