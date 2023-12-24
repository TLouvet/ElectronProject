import { NotFoundError } from "../../../../../error/NotFoundError";
import { WEAPONS_FILE_PATH } from "../../../filePaths";
import { writeEditorFile } from "../../../fileUtils/writeEditorFile";
import { IEditorWeapon } from "../model/editorWeapon.interface";
import { getWeapons } from "./getWeapons";

export function updateWeapon(id: number, weapon: Partial<IEditorWeapon>) {
  const weapons = getWeapons();
  const weaponToUpdate = getWeaponToUpdate(weapons, id);
  const updatedWeapon = { ...weaponToUpdate, ...weapon };
  const updatedWeapons = weapons.map((w) => (w.id === id ? updatedWeapon : w));
  writeEditorFile(WEAPONS_FILE_PATH, updatedWeapons);
}

function getWeaponToUpdate(weapons: readonly IEditorWeapon[], id: number) {
  const weaponToUpdate = weapons.find((w) => w.id === id);
  if (!weaponToUpdate) {
    throw new NotFoundError(`Weapon with id ${id} not found`);
  }
  return weaponToUpdate;
}
