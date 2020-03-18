import chalk from 'chalk'

import { Monster } from '../Monsters/Monster'
import { Loot } from '../Loot/Loot'
import { IBlock } from '../Actions/IBlock'
import { Block } from '../Actions/Block'
import { IHeroSubject } from './IHeroSubject'
import { IHeroObserver } from '../Loot/IHeroObserver'

export class Hero implements IHeroSubject {
  protected maxHp = 50
  protected hp = 50
  protected maxM = 50
  protected mp = 50
  protected basicAttackDmg = 5
  protected specialAttackDmg = 20
  protected specialAttackCost = 15
  protected blockCommand: IBlock
  protected observers: Set<IHeroObserver> = new Set()

  constructor() {
    this.blockCommand = new Block()
  }

  public setHp(hp: number) {
    this.hp = Math.min(Math.max(hp, 0), this.maxHp)
  }

  public getHp() {
    return this.hp
  }

  public getMaxHp() {
    return this.maxHp
  }

  public setMp(mp: number) {
    this.mp = Math.max(mp, 0)
  }

  public getMaxMp() {
    return this.mp
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
        )} damage.\n\nIt has ${chalk.green(monster.getHp())} hp left.\n`,
      ),
    )
  }

  public specialAttack(monster: Monster) {
    if (this.getMp() < this.specialAttackCost) {
      console.log(chalk.hex('#B9C0CB')(`\nYou do not have enough mp.\n`))
      return
    }

    monster.setHp(monster.getHp() - this.specialAttackDmg)
    this.setMp(this.getMp() - this.specialAttackCost)

    console.log(
      chalk.hex('#B9C0CB')(
        `\nYou unleash a powerful magic attack, dealing ${chalk.red(
          this.specialAttackDmg,
        )} damage to ${monster.getName()}. It has ${chalk.green(
          monster.getHp(),
        )} hp left.\n\nYou have ${chalk.blue(this.getMp())} mp left.\n`,
      ),
    )
  }

  public block(monster: Monster) {
    this.blockCommand.performBlock(this, monster)
  }

  public equip(loot: Loot) {
    this.loot.push(loot)
  }

  public printHp() {
    console.log(
      chalk.hex('#B9C0CB')(`You have ${chalk.green(this.getHp())} hp left\n\n`),
    )
  }
}
