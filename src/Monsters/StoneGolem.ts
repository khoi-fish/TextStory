import { Monster } from './Monster'

export class StoneGolem extends Monster {
  constructor() {
    super(
      'Stone Golem',
      15,
      "It's a golem...made of stone. Like some people, it's just naturally violent.\n\n",
      3,
    )
  }
}
