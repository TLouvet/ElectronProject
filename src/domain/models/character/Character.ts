import { Armor } from "../item/armor/Armor";
import { Weapon } from "../item/weapon/Weapon";
import { CharacterHealthComponent } from "./CharacterHealthComponent";
import { CharacterLevelComponent } from "./CharacterLevelComponent";

const p = {
  armor: {
    name: "No armor",
    description: "You are naked",
    value: 0,
    defense: 0,
  },
  weapon: {
    name: "Fists",
    description: "Your fists",
    value: 0,
    damage: 3,
  },
};

export class NPC {
  armor: Armor;
  weapon: Weapon;
  healthComponent: CharacterHealthComponent;

  constructor() {
    this.armor = new Armor("No armor", "You are naked", 0, 0);
    this.weapon = new Weapon("Fists", "Your fists", 0, 3);
    this.healthComponent = new CharacterHealthComponent(100, 100);
  }
}

export class Character {
  armor: Armor;
  weapon: Weapon;
  levelComponent: CharacterLevelComponent;
  healthComponent: CharacterHealthComponent;

  constructor() {
    this.armor = new Armor("No armor", "You are naked", 0, 0);
    this.weapon = new Weapon("Fists", "Your fists", 0, 3);
    this.healthComponent = new CharacterHealthComponent(100, 100);
    this.levelComponent = new CharacterLevelComponent(1, 0, 100);
  }

  /**
   * A healing operation. Depending on the value of healing, the character will either be healed or damaged.
   * For example, if the status effect causes healing to actually be negative, the character will take damage.
   * @param healing
   * @returns
   */
  heal(healValue: number) {
    this.healthComponent.heal(healValue);
  }

  takeDamage(damage: number) {
    return this.armor.negateIncomingDamage(damage);
  }
}
