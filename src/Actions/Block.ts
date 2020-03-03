import chalk from 'chalk'
import { IBlock } from './IBlock'
import { Hero } from '../Heroes/Hero'
import { Monster } from '../Monsters/Monster'

export class Block implements IBlock {
  constructor() {}

  performBlock(hero: Hero, monster: Monster) {
    const damage = Math.round(monster.getAttackDmg() * 0.75)
    hero.setHp(hero.getHp() - damage)

    console.log(
      `\nYou blocked the incoming attack but still took ${chalk.red(
        damage,
      )} damage.\n`,
    )
  }
}
