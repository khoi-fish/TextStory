import { Hero } from './Hero'

export class Thief extends Hero {
  maxHp = 100
  hp = 100
  maxMp = 100
  mp = 100
  basicAttackDmg = 8
  specialAttackDmg = 11

  constructor() {
    super()
  }
}
