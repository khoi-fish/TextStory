import chalk from 'chalk'

import { Dungeon } from './Dungeons/Dungeon'
import { DUNGEON_1 } from './Dungeons/Dungeon1'
import { Floor } from './Floors/Floor'
import { Monster } from './Monsters/Monster'
import { Hero } from './Heroes/Hero'
import { attackPrompt } from './Prompts/AttackPrompt'
import { classPrompt } from './Prompts/ClassPrompt'

export class AdventureGame {
  private player: Hero
  private dungeons: Dungeon[]

  constructor() {
    console.log(
      chalk.inverse(
        `\n\n\n*********************************\n*      Welcome to TextStory     *\n*********************************\n\n\n`,
      ),
    )

    classPrompt(['Mage', 'Warrior', 'Archer', 'Thief']).then(
      ({ classType }) => {
        switch (classType) {
          case 'Mage':
            // TODO
            break
          case 'Warrior':
            // TODO
            break
          case 'Archer':
            // TODO
            break
          case 'Thief':
            // TODO
            break
        }

        this.dungeons = [DUNGEON_1]
        this.player = new Hero()
        this.startGame()
      },
    )
  }

  private async startGame() {
    for (let dungeon of this.dungeons) {
      console.log(dungeon.getDescription())
      await this.progressThroughDungeon(dungeon)
    }
  }

  private async progressThroughDungeon(dungeon: Dungeon) {
    let floor = dungeon.getNextFloor()
    console.log(floor.getDescription())

    while (floor) {
      await this.progressThroughFloor(floor)
      floor = dungeon.getNextFloor()
    }
  }

  private async progressThroughFloor(floor: Floor) {
    let monster = floor.getNextMonster()

    while (monster) {
      console.log(
        `You've encountered a ${chalk.hex('#f5ad42')(monster.getName())}!\n\n`,
      )
      console.log(monster.getDescription())

      await this.fightMonster(monster)
      monster = floor.getNextMonster()
    }

    const loot = floor.getLoot()
    this.player.equip(loot)

    console.log(
      `You've slain every monster on this floor and earned yourself a ${chalk.yellow(
        loot.getName(),
      )}!`,
    )
  }

  private async fightMonster(monster: Monster) {
    while (monster.getHp() > 0) {
      const { attack } = await attackPrompt(['attack', 'special attack'])

      if (attack === 'attack') {
        this.player.basicAttack(monster)
      } else if (attack === 'special attack') {
        this.player.specialAttack(monster)
      } else {
        this.player.setHp(this.player.getHp() - 5)
        console.log(
          'There was an attempt but like everything else in your life, it resulted in failure.',
        )
      }

      monster.attack(this.player)
    }
  }
}
