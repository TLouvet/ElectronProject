import { useEffect, useState } from "react";
import { IEditorWeapon } from "../../../../../engine/editor/features/weapon/model/editorWeapon.interface";

export function useGetWeapon(id: number | null): IEditorWeapon | null {
  const [weapon, setWeapon] = useState<IEditorWeapon | null>(null);

  useEffect(() => {
    async function getWeapon() {
      if (id) {
        const weapon = await window.editorWeapons.findOne(id);
        setWeapon(weapon);
      } else {
        setWeapon(null);
      }
    }
    getWeapon();
  }, [id]);

  return weapon;
}
