import { ICreateArmor } from "../../src/engine/editor/features/armor/model/createArmor.interface";
import { ICreateWeapon } from "../../src/engine/editor/features/weapon/model/createWeapon";

const { contextBridge, ipcRenderer } = require("electron");

export function initContextBridge() {
  contextBridge.exposeInMainWorld("electronAPI", {
    sayHello: () => ipcRenderer.invoke("say-hello"),
  });

  contextBridge.exposeInMainWorld("editorWeapons", {
    create: (weapon: ICreateWeapon) => ipcRenderer.invoke("add-weapon", weapon),
    find: () => ipcRenderer.invoke("get-weapons"),
    findOne: (id: number | null) => ipcRenderer.invoke("get-weapon", id),
    update: (id: number, weapon: ICreateWeapon) =>
      ipcRenderer.invoke("update-weapon", id, weapon),
    delete: (id: number) => ipcRenderer.invoke("delete-weapon", id),
  });

  contextBridge.exposeInMainWorld("editorArmors", {
    create: (armor: ICreateArmor) => ipcRenderer.invoke("add-armor", armor),
    find: () => ipcRenderer.invoke("get-armors"),
    findOne: (id: number | null) => ipcRenderer.invoke("get-armor", id),
    update: (id: number, armor: ICreateArmor) =>
      ipcRenderer.invoke("update-armor", id, armor),
  });
}
