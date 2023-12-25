import { ensureNameIsUnique, getNextID } from "../../../crudUtils/create";
import { getCollection } from "../../../crudUtils/find";
import { ARMORS_FILE_PATH } from "../../../filePaths";
import { writeEditorFile } from "../../../fileUtils/writeEditorFile";
import { ICreateArmor } from "../model/createArmor.interface";
import { IEditorArmor } from "../model/editorArmor.interface";

export function createArmor(armor: ICreateArmor) {
  const armors = getCollection<IEditorArmor>(ARMORS_FILE_PATH);
  ensureNameIsUnique(armors, armor.name);
  const armorID = getNextID(armors);
  const newArmor = { ...armor, id: armorID };
  writeEditorFile(ARMORS_FILE_PATH, [...armors, newArmor]);
  return newArmor;
}
