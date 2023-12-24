import { WEAPONS_FILE_PATH } from "../../../filePaths";
import { writeEditorFile } from "../../../fileUtils/writeEditorFile";
import { IEditorWeapon } from "../model/editorWeapon.interface";
import { getWeapons } from "./getWeapons";

export function deleteWeapon(id: number) {
  const weapons = getWeapons();
  writeEditorFile(WEAPONS_FILE_PATH, getFilteredWeapons(weapons, id));
}

function getFilteredWeapons(weapons: readonly IEditorWeapon[], id: number) {
  return weapons.filter((weapon) => weapon.id !== id);
}
