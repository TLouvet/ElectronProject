import { Character } from "../character/Character";

export class Party {
  characters: Character[];
  gold: number;

  constructor() {
    this.characters = [];
    this.gold = 0;
  }
}
