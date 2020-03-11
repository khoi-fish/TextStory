import { Hero } from './Hero'

export class Warrior extends Hero {
  maxHp = 200
  hp = 200
  maxMp = 0
  mp = 0
  basicAttackDmg = 15
  specialAttackDmg = 0

  constructor() {
    super()
  }
}
