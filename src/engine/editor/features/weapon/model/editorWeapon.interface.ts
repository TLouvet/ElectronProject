import { ObjectWithId } from "../../../../../declaration";

export interface IEditorWeapon {
  name: string;
  description: string;
  value: number;
  damage: number;
}

export type TEditorWeapon = ObjectWithId<IEditorWeapon>;
