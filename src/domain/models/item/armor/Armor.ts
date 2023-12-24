import { Item } from "../AbstractItem";
import { ItemType } from "../ItemType.enum";

export class Armor extends Item {
  constructor(
    name: string,
    description: string,
    value: number,
    public defense: number
  ) {
    super(name, description, value);
    this.type = ItemType.Armor;
  }

  public negateIncomingDamage(damage: number): number {
    return damage - this.defense;
  }
}
