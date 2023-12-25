import { ObjectWithId } from "../../../../../declaration";

export interface IEditorArmor {
  name: string;
  description: string;
  value: number;
  protection: number;
}

export type TEditorArmor = ObjectWithId<IEditorArmor>;
