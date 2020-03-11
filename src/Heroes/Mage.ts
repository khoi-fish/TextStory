import { Hero } from './Hero'
import { Monster } from '../Monsters/Monster'
import chalk = require('chalk')

export class Mage extends Hero {
  maxHp = 50
  hp = 50
  maxMp = 200
  mp = 200
  basicAttackDmg = 5
  specialAttackDmg = 25
  private readonly SPECIAL_ATTACK_COST: number = 20

  constructor() {
    super()
  }

  public specialAttack(monster: Monster) {
    if (this.mp >= this.SPECIAL_ATTACK_COST) {
      this.setMp(this.mp - this.SPECIAL_ATTACK_COST)

      monster.setHp(monster.getHp() - this.specialAttackDmg)

      console.log(
        chalk.hex('#B9C0CB')(
          `\nYou blast ${monster.getName()} with a magic missile dealing ${chalk.red(
            this.specialAttackDmg,
          )}.\nIt has ${chalk.green(monster.getHp())} hp left.\n`,
        ),
      )
    } else {
      console.log(
        chalk.hex('#B9C0CB')(
          `\nYou don't have enough MP!\n${monster.getName()} has ${chalk.green(
            monster.getHp(),
          )} hp left.\n`,
        ),
      )
    }
  }
}
