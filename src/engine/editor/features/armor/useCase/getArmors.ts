import { IEditorArmor } from "../model/editorArmor.interface";
import { ARMORS_FILE_PATH } from "../../../filePaths";
import { readEditorFile } from "../../../fileUtils/readFile";

export function getArmors() {
  return readEditorFile<IEditorArmor[]>(ARMORS_FILE_PATH);
}
