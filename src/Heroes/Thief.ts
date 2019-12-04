import { Hero } from './Hero'

export class Thief extends Hero {
  hp = 100
  mp = 100
  basicAttackDmg = 8
  specialAttackDmg = 11

  constructor() {
    super()
  }
}
