import { Loot } from './Loot'
import { Hero } from '../Heroes/Hero'
import chalk = require('chalk')

export class RecoveryStone extends Loot {
  constructor() {
    super(
      'Stone of Half Decent Recovery',
      'It recovers you but only decently and only sometimes, half the time.',
      0,
      0,
    )
  }

  public applyEffect(hero: Hero) {
    const heroHp = hero.getHp()

    if (hero.getMaxHp() / 2 >= heroHp && heroHp > 0) {
      const recoveryAmount = hero.getMaxHp() * 0.1

      console.log(
        chalk.yellow(
          `Stone of Half Decent Recovery has activated and you've recovered ${recoveryAmount} health.\n\n`,
        ),
      )

      hero.setHp(heroHp + recoveryAmount)

      hero.printHp()
    }

    return
  }
}
