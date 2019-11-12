import { Loot } from './Loot'

export class WoodenSword extends Loot {
  constructor() {
    super(
      'Wooden Sword',
      'A sad excuse for a sword. Constructed from a 2x4.',
      0,
      3,
    )
  }
}
