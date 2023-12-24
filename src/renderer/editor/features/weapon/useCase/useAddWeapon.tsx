import { ICreateWeapon } from "../../../../../engine/editor/features/weapon/model/createWeapon";

export function useAddWeapon() {
  async function addWeapon(weapon: ICreateWeapon) {
    const response = await window.editorWeapons.create(weapon);
    return response;
  }

  return {
    addWeapon,
  };
}
