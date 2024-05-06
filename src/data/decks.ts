import { Deck, AvailableDeck, Mana, CardType } from '../types'
import slivers from './slivers.cards'

export const decks: Record<AvailableDeck, Deck> = {
  [AvailableDeck.SeriousSlivers]: {
    name: 'Serious Slivers',
    cards: slivers,
    colors: new Set([Mana.Red, Mana.Green, Mana.White, Mana.Blue, Mana.Black]),
    commander: {
      id: 'EPMD9',
      name: 'The First Sliver',
      manaCost: new Set([Mana.Red, Mana.Green, Mana.White, Mana.Blue, Mana.Black]),
      type: CardType.Creature,
      typeText: 'Legendary Creature - Sliver',
      oracleText: 'Cascade. Sliver spells you cast have cascade.',
      produces: new Set(),
      copies: 1
    },
    image: 'https://assets.moxfield.net/cards/card-EPMD9-art_crop.webp'
  }
}
