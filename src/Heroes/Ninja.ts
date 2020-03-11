import { Hero } from './Hero'

export class Ninja extends Hero {
  maxHp = 100
  hp = 100
  maxMp = 50
  mp = 50
  basicAttackDmg = 10
  specialAttackDmg = 15

  constructor() {
    super()
  }
}
