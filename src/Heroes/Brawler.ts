import { Hero } from './Hero'

export class Brawler extends Hero {
  maxHp = 150
  hp = 150
  maxMp = 50
  mp = 50
  basicAttackDmg = 12
  specialAttackDmg = 10

  constructor() {
    super()
  }
}
