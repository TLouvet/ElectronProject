import { useEffect, useState } from "react";
import { IEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";

export function useGetWeapons() {
  const [weapons, setWeapons] = useState<IEditorWeapon[]>([]);

  useEffect(() => {
    async function getWeapons() {
      const response = await window.editorWeapons.find();
      setWeapons(response);
    }

    getWeapons();
  }, []);

  function addWeaponToList(weapon: IEditorWeapon) {
    setWeapons([...weapons, weapon]);
  }

  function updateList(weapon: IEditorWeapon) {
    setWeapons((prev) =>
      prev.map((item) => (item.id === weapon.id ? weapon : item))
    );
  }

  function removeWeaponFromList(id: number) {
    setWeapons((prev) => prev.filter((item) => item.id !== id));
  }

  return {
    weapons,
    addWeaponToList,
    updateList,
    removeWeaponFromList,
  };
}
