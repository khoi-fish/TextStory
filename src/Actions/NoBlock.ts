import chalk from 'chalk'
import { IBlock } from './IBlock'
import { Hero } from '../Heroes/Hero'
import { Monster } from '../Monsters/Monster'

export class NoBlock implements IBlock {
  constructor() {}

  performBlock(hero: Hero, monster: Monster) {
    hero.setHp(hero.getHp() - monster.getAttackDmg())

    console.log(
      `\nYou can't block! You ended up taking ${chalk.red(
        monster.getAttackDmg(),
      )} damage for being dumb.\n`,
    )
  }
}
