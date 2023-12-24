import { Item } from "../AbstractItem";
import { ItemType } from "../ItemType.enum";

export class Weapon extends Item {
  damage: number;

  constructor(
    name: string,
    description: string,
    value: number,
    damage: number
  ) {
    super(name, description, value);
    this.type = ItemType.Weapon;
    this.damage = damage;
  }
}
