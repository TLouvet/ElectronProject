import {
  ARMORS_FILE_PATH,
  WEAPONS_FILE_PATH,
} from "../../src/engine/editor/filePaths";
import { loadEditorWeaponHandlers } from "../../src/engine/editor/handlers/weapon";
import { loadEditorArmorHandlers } from "../../src/engine/editor/handlers/armors";

export function loadEditorEvents() {
  loadEditorWeaponHandlers(WEAPONS_FILE_PATH);
  loadEditorArmorHandlers(ARMORS_FILE_PATH);
}
