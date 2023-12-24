import { IUpdateWeapon } from "../../../../../engine/editor/features/weapon/model/updateWeapon.interface";

export function useUpdateWeapon() {
  async function updateWeapon(weapon: IUpdateWeapon) {
    const response = await window.editorWeapons.create(weapon);
    return response;
  }

  return {
    updateWeapon,
  };
}
