import { ipcMain } from "electron";
import { createOne } from "../crudUtils/create";
import { deleteOne } from "../crudUtils/delete";
import { findOne } from "../crudUtils/findOne";
import { updateOne } from "../crudUtils/update";
import { getCollection } from "../crudUtils/find";
import { DynamicTableItem } from "../../../renderer/component/Table";

export function loadEditorWeaponHandlers(COLLECTION_FILE_PATH: string) {
  ipcMain.handle("add-weapon", (event, payload: DynamicTableItem) =>
    createOne(payload, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("get-weapons", () => getCollection(COLLECTION_FILE_PATH));

  ipcMain.handle("get-weapon", (event, id: number | null) =>
    findOne(id, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("update-weapon", (event, payload: DynamicTableItem) =>
    updateOne(payload, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("delete-weapon", (event, id: number) =>
    deleteOne(id, COLLECTION_FILE_PATH)
  );
}
