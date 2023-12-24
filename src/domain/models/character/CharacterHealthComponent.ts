export class CharacterHealthComponent {
  constructor(private currentHealth: number, private maxHealth: number) {}

  public takeDamage(damage: number): number {
    return this.currentHealth - damage;
  }

  public heal(healing: number): number {
    if (healing < 0) {
      this.currentHealth = Math.max(this.currentHealth + healing, 0);
    } else {
      this.currentHealth = Math.min(
        this.currentHealth + healing,
        this.maxHealth
      );
    }

    return this.currentHealth;
  }

  public isAlive(): boolean {
    return this.currentHealth > 0;
  }
}
