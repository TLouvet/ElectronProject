import { ipcMain } from "electron";
import { createOne } from "../crudUtils/create";
import { deleteOne } from "../crudUtils/delete";
import { findOne } from "../crudUtils/findOne";
import { updateOne } from "../crudUtils/update";
import { getCollection } from "../crudUtils/find";
import { DynamicTableItem } from "../../../renderer/component/Table";

export function loadEditorArmorHandlers(COLLECTION_FILE_PATH: string) {
  ipcMain.handle("add-armor", (_, payload: DynamicTableItem) =>
    createOne(payload, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("get-armors", () => getCollection(COLLECTION_FILE_PATH));

  ipcMain.handle("get-armor", (_, id: number | null) =>
    findOne(id, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("update-armor", (_, payload: DynamicTableItem) =>
    updateOne(payload, COLLECTION_FILE_PATH)
  );

  ipcMain.handle("delete-armor", (_, id: number) =>
    deleteOne(id, COLLECTION_FILE_PATH)
  );
}
