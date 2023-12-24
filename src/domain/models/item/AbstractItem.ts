import { ItemType } from "./ItemType.enum";

export abstract class Item {
  protected type: ItemType;

  constructor(
    protected name: string,
    protected description: string,
    protected value: number
  ) {
    this.type = ItemType.Misc;
  }
}
