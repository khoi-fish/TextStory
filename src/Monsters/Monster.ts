import chalk from 'chalk'

import { Hero } from '../Heroes/Hero'

export class Monster {
  private name: string
  private hp: number
  private attackDmg: number
  private description: string

  constructor(
    name: string,
    hp: number,
    description: string,
    attackDmg: number,
  ) {
    this.hp = hp
    this.name = name
    this.description = description
    this.attackDmg = attackDmg
  }

  public attack(target: Hero) {
    console.log(
      chalk.hex('#B9C0CB')(
        `${chalk.hex('#f5ad42')(this.name)} attacks you, dealing ${chalk.red(
          this.attackDmg,
        )} damage.\n`,
      ),
    )

    target.setHp(target.getHp() - this.attackDmg)

    console.log(
      chalk.hex('#B9C0CB')(
        `You have ${chalk.green(target.getHp())} hp left.\n\n`,
      ),
    )
  }

  public getHp() {
    return this.hp
  }

  public setHp(hp: number) {
    this.hp = Math.max(0, hp)
  }

  public getDescription() {
    return this.description
  }

  public getName() {
    return this.name
  }

  public getAttackDmg() {
    return this.attackDmg
  }
}
