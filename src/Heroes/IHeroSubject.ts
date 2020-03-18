import { IHeroObserver } from '../Loot/IHeroObserver'
import { Hero } from './Hero'

export interface IHeroSubject {
  registerObserver(observer: IHeroObserver): void

  removeObserver(observer: IHeroObserver): void
}
