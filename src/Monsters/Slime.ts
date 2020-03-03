import { Monster } from './Monster'

export class Slime extends Monster {
  constructor() {
    super(
      'Slime',
      10,
      "It's blind, slow, pretty weak, but very colorful. It's almost cute in a way.\n\n",
      10,
    )
  }
}
