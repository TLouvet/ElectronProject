import { ipcMain } from "electron";
import { ICreateWeapon } from "../../src/engine/editor/features/weapon/model/createWeapon";
import { createWeapon } from "../../src/engine/editor/features/weapon/useCase/createWeapon";
import { getWeapons } from "../../src/engine/editor/features/weapon/useCase/getWeapons";
import { getWeapon } from "../../src/engine/editor/features/weapon/useCase/getWeapon";
import { updateWeapon } from "../../src/engine/editor/features/weapon/useCase/updateWeapon";
import { getArmors } from "../../src/engine/editor/features/armor/useCase/getArmors";
import { deleteWeapon } from "../../src/engine/editor/features/weapon/useCase/deleteWeapon";

export function loadEvents() {
  loadEditorWeaponEvents();
  loadEditorArmorEvents();
}

function loadEditorWeaponEvents() {
  ipcMain.handle("add-weapon", (event, payload: ICreateWeapon) => {
    return createWeapon(payload);
  });

  ipcMain.handle("get-weapons", () => {
    return getWeapons();
  });

  ipcMain.handle("get-weapon", (event, id: number | null) => {
    return getWeapon(id);
  });

  ipcMain.handle(
    "update-weapon",
    (event, id: number, payload: ICreateWeapon) => {
      return updateWeapon(id, payload);
    }
  );

  ipcMain.handle("delete-weapon", (event, id: number) => {
    return deleteWeapon(id);
  });
}

function loadEditorArmorEvents() {
  ipcMain.handle("add-armor", (event, payload: ICreateWeapon) => {
    return null;
  });

  ipcMain.handle("get-armors", () => {
    return getArmors();
  });

  ipcMain.handle("get-armor", (event, id: number | null) => {
    return null;
  });

  ipcMain.handle(
    "update-armor",
    (event, id: number, payload: ICreateWeapon) => {
      return null;
    }
  );
}
