import { Hero } from '../Heroes/Hero'

export interface IHeroObserver {
  onHpChange?(): void

  onMpChange?(): void

  onAttack?(): void

  onSpecialAttack?(): void

  onBlock?(): void
}
