import chalk = require('chalk')

import { Monster } from '../Monsters/Monster'
import { Loot } from '../Loot/Loot'

export class Hero {
  private hp: number = 50
  private mp: number = 50
  private basicAttackDmg = 5
  private specialAttackDmg = 20

  constructor() {}

  public setHp(hp: number) {
    this.hp = Math.max(hp, 0)
  }

  public getHp() {
    return this.hp
  }

  public setMp(mp: number) {
    this.mp = Math.max(mp, 0)
  }

  public getMp() {
    return this.mp
  }

  public basicAttack(monster: Monster) {
    monster.setHp(monster.getHp() - this.basicAttackDmg)
    console.log(
      chalk.hex('#B9C0CB')(
        `\nYou attacked ${monster.getName()}, dealing ${chalk.red(
          this.basicAttackDmg,
        )} damage.\nIt has ${chalk.green(monster.getHp())} hp left.\n`,
      ),
    )
  }

  public specialAttack(monster: Monster) {
    console.log(
      chalk.hex('#B9C0CB')(
        `\nYou don't have a special attack!\n${monster.getName()} has ${chalk.green(
          monster.getHp(),
        )} hp left.\n`,
      ),
    )
  }

  public equip(loot: Loot) {
    //todo
  }
}
