import { Hero } from '../Heroes/Hero'
import { Monster } from '../Monsters/Monster'

export interface IBlock {
  performBlock(hero: Hero, monster: Monster): void
}
