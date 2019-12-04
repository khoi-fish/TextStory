import { Hero } from './Hero'

export class Warrior extends Hero {
  hp = 200
  mp = 0
  basicAttackDmg = 15
  specialAttackDmg = 0

  constructor() {
    super()
  }
}
