import { Mana } from '../types'

export function colorOfMana(mana: Mana) {
  switch (mana) {
    case Mana.White:
      return 'warning'
    case Mana.Blue:
      return 'primary'
    case Mana.Black:
      return 'dark'
    case Mana.Red:
      return 'negative'
    case Mana.Green:
      return 'positive'
  }
}
