import { Hero } from './Hero'

export class Ninja extends Hero {
  hp = 100
  mp = 50
  basicAttackDmg = 10
  specialAttackDmg = 15

  constructor() {
    super()
  }
}
