import { DuplicateError } from "../../../../../error/DuplicateError";
import { WEAPONS_FILE_PATH } from "../../../filePaths";
import { writeEditorFile } from "../../../fileUtils/writeEditorFile";
import { ICreateWeapon } from "../model/createWeapon";
import { IEditorWeapon } from "../model/editorWeapon.interface";
import { getWeapons } from "./getWeapons";

export function createWeapon(weapon: ICreateWeapon) {
  const weapons = getWeapons();
  ensureWeaponNameIsUnique(weapons, weapon.name);
  const weaponId = getNextWeaponId(weapons);
  const newWeapon = { ...weapon, id: weaponId };
  writeEditorFile(WEAPONS_FILE_PATH, [...weapons, newWeapon]);
  console.log("newWeapon", newWeapon);
  return newWeapon;
}

function ensureWeaponNameIsUnique(
  weapons: readonly IEditorWeapon[],
  name: string
) {
  const weapon = weapons.find((weapon) => weapon.name === name);
  if (weapon)
    throw new DuplicateError(`Weapon with name ${name} already exists`);
}

function getNextWeaponId(weapons: readonly IEditorWeapon[]) {
  if (weapons.length === 0) return 1;
  return weapons[weapons.length - 1].id + 1;
}
