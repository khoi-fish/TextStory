import { Dungeon } from './Dungeon'
import { Slime } from '../Monsters/Slime'
import { WoodenSword } from '../Loot/WoodenSword'
import { Floor } from '../Floors/Floor'

const DUNGEON_1 = new Dungeon()
DUNGEON_1.setDescription(
  "You wander into an open meadow, filled with perfect, emerald green grass and sunset colored flowers. There are cute little creatures hopping around in the distance, but you know better. They're dangerous monsters that must be slain so you can attempt to douse your insatiable thirst for loot. Many have died by mistaking this idyllic pasture as a safe haven when it is actually...the first dungeon!\n\n",
)

const monsters = []
monsters.push(new Slime())

const loot = new WoodenSword()

const floors = []
floors.push(
  new Floor(
    'You step onto the plush grass as bubbly creatures hop your way with wide eyes and smiles on their face. You could sense their murderous intent from a mile away. You think to yourself, this is it. The first floor of the easiest dungeon!\n\n',
    monsters,
    loot,
  ),
)

DUNGEON_1.setFloors(floors)

export { DUNGEON_1 }
