import { ICreateArmor } from "./engine/editor/features/armor/model/createArmor.interface";
import { IEditorArmor } from "./engine/editor/features/armor/model/editorArmor.interface";
import { ICreateWeapon } from "./engine/editor/features/weapon/model/createWeapon";
import { IEditorWeapon } from "./engine/editor/features/weapon/model/editorWeapon.interface";
import { IUpdateWeapon } from "./engine/editor/features/weapon/model/updateWeapon.interface";

export type ObjectWithId<T> = T & { id: number };

type IEditorCrudMethods<T> = {
  create: (item: Partial<T>) => Promise<ObjectWithId<T>>;
  find: () => Promise<ObjectWithId<T>[]>;
  findOne: (id: number | null) => Promise<ObjectWithId<T> | null>;
  update: (item: ObjectWithId<T>) => Promise<ObjectWithId<T>>;
  delete: (id: number) => Promise<void>;
};

declare global {
  interface Window {
    editorArmors: IEditorCrudMethods<IEditorArmor>;
    editorWeapons: IEditorCrudMethods<IEditorWeapon>;
  }
}
