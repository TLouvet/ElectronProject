import { WEAPONS_FILE_PATH } from "../../../filePaths";
import { readEditorFile } from "../../../fileUtils/readFile";
import { IEditorWeapon } from "../model/editorWeapon.interface";

export function getWeapons() {
  return readEditorFile<IEditorWeapon[]>(WEAPONS_FILE_PATH);
}
