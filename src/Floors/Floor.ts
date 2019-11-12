import { Monster } from '../Monsters/Monster'
import { Loot } from '../Loot/Loot'

export class Floor {
  private description: string
  private monsters: Monster[]
  private loot: Loot

  constructor(description: string, monsters?: Monster[], loot?: Loot) {
    this.description = description
    this.monsters = monsters
    this.loot = loot
  }

  public setMonsters(monsters: Monster[]) {
    this.monsters = monsters
  }

  public setLoot(loot: Loot) {
    this.loot = loot
  }

  public getNextMonster() {
    return this.monsters.shift()
  }

  public getLoot() {
    return this.loot
  }

  public getDescription() {
    return this.description
  }
}
