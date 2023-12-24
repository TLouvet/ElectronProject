import { ICreateArmor } from "./engine/editor/features/armor/model/createArmor.interface";
import { IEditorArmor } from "./engine/editor/features/armor/model/editorArmor.interface";
import { ICreateWeapon } from "./engine/editor/features/weapon/model/createWeapon";
import { IEditorWeapon } from "./engine/editor/features/weapon/model/editorWeapon.interface";
import { IUpdateWeapon } from "./engine/editor/features/weapon/model/updateWeapon.interface";

declare global {
  interface Window {
    editorArmors: {
      create: (armor: ICreateArmor) => Promise<void>;
      find: () => Promise<IEditorArmor[]>;
      findOne: (id: number | null) => Promise<IEditorArmor | null>;
      update: (id: number, armor: ICreateArmor) => Promise<void>;
      delete: (id: number) => Promise<void>;
    };

    editorWeapons: {
      create: (weapon: ICreateWeapon) => Promise<IEditorWeapon>;
      find: () => Promise<IEditorWeapon[]>;
      findOne: (id: number | null) => Promise<IEditorWeapon | null>;
      update: (weapon: IUpdateWeapon) => Promise<IEditorWeapon>;
      delete: (id: number) => Promise<void>;
    };
  }
}
