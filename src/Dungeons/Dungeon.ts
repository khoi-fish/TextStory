import { Floor } from '../Floors/Floor'

export class Dungeon {
  private description: string
  private floors: Floor[]

  constructor()
  constructor(description?: string)
  constructor(description?: string, floors?: Floor[]) {
    this.description = description || ''
    this.floors = floors || []
  }

  public getDescription() {
    return this.description
  }

  public getFloor(index: number) {
    return this.floors[index]
  }

  public getNextFloor() {
    return this.floors.shift()
  }

  public setDescription(description: string) {
    this.description = description
  }

  public addFloor(floor: Floor) {
    this.floors.push(floor)
  }

  public setFloors(floors: Floor[]) {
    this.floors = floors
  }
}
