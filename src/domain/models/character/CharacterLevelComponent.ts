import { GameRules } from "../../GameRules";

export class CharacterLevelComponent {
  constructor(
    private level: number,
    private experience: number,
    private experienceToNextLevel: number
  ) {}

  public getLevel(): number {
    return this.level;
  }

  public getExperience(): number {
    return this.experience;
  }

  public getExperienceToNextLevel(): number {
    return this.experienceToNextLevel;
  }

  public gainExperience(experience: number): void {
    this.experience += experience;

    if (this.experience >= this.experienceToNextLevel) {
      this.levelUp();
    }
  }

  private levelUp(): void {
    this.level = Math.min(this.level + 1, GameRules.MAX_LEVEL);
  }
}
