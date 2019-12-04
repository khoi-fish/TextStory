import { Monster } from './Monster'

export class PossessedTreeStump extends Monster {
  constructor() {
    super(
      'Possessed Tree Stump',
      15,
      'A tree that was cut down in its prime. It possessed its own stump and vowed to take revenge on all humans by acorning them to death.\n\n',
      3,
    )
  }
}
