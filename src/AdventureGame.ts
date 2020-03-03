import chalk from 'chalk'

import { Dungeon } from './Dungeons/Dungeon'
import { DUNGEON_1 } from './Dungeons/Dungeon1'
import { Floor } from './Floors/Floor'
import { Monster } from './Monsters/Monster'
import { Hero } from './Heroes/Hero'
import { attackPrompt } from './Prompts/AttackPrompt'
import { classPrompt } from './Prompts/ClassPrompt'
import { Warrior } from './Heroes/Warrior'
import { Mage } from './Heroes/Mage'
import { Thief } from './Heroes/Thief'
import { Archer } from './Heroes/Archer'
import { Joker } from './Heroes/Joker'
import { Ninja } from './Heroes/Ninja'

export class AdventureGame {
  private player: Hero
  private dungeons: Dungeon[]

  constructor() {
    console.log(
      chalk.inverse(
        `\n\n\n*********************************\n*      Welcome to TextStory     *\n*********************************\n\n\n`,
      ),
    )

    classPrompt([
      'Mage',
      'Warrior',
      'Archer',
      'Thief',
      'Joker',
      'Ninja',
      'Brawler',
    ]).then(
      ({ classType }) => {
        switch (classType) {
          case 'Mage':
            this.player = new Mage()
            break
          case 'Warrior':
            this.player = new Warrior()
            break
          case 'Archer':
            this.player = new Archer()
            break
          case 'Thief':
            this.player = new Thief()
            break
          case 'Joker':
            this.player = new Joker()
            break
          case 'Ninja':
            this.player = new Ninja()
            break
          case 'Brawler':
          // Fill out
          default:
            this.player = new Hero()
            break
        }

        this.dungeons = [DUNGEON_1]
        this.startGame()
      },
      () => {},
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

      try {
        await this.fightMonster(monster)
        monster = floor.getNextMonster()
      } catch {
        break
      }
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
      const { attack } = await attackPrompt([
        'attack',
        'special attack',
        'block',
      ])

      if (attack === 'attack') {
        this.player.basicAttack(monster)
      } else if (attack === 'special attack') {
        this.player.specialAttack(monster)
      } else if (attack === 'block') {
        this.player.block(monster)
      } else {
        this.player.setHp(this.player.getHp() - 5)
        console.log(
          'There was an attempt but like everything else in your life, it resulted in failure.',
        )
      }

      if (monster.getHp() > 0) {
        monster.attack(this.player)
      }
    }
  }
}
