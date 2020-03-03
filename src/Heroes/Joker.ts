import { Hero } from './Hero'
import { NoBlock } from '../Actions/NoBlock'

export class Joker extends Hero {
  hp = 125
  mp = 75
  basicAttackDmg = 18
  specialAttackDmg = 22

  constructor() {
    super()
    this.blockCommand = new NoBlock()
  }
}
