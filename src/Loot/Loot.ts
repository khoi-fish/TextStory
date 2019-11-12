export class Loot {
  private description: string
  private name: string
  private hpBoost: number
  private attackBoost: number

  constructor(
    name = 'rock',
    description = 'Literally just a regular rock',
    hpBoost = 0,
    attackBoost = 0,
  ) {
    this.name = name
    this.description = description
    this.hpBoost = hpBoost
    this.attackBoost = attackBoost
  }

  public getName() {
    return this.name
  }

  public getDescription() {
    return this.description
  }

  public getHpBoost() {
    return this.hpBoost
  }

  public getAttackBoost() {
    return this.attackBoost
  }
}
