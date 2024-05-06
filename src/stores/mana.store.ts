import { computed } from 'vue'
import { defineStore } from 'pinia'

import { Mana } from '../types'
import { useDeckStore } from './deck.store'

export const useManaStore = defineStore('mana', () => {
  const deckStore = useDeckStore()

  const manaBase = computed(() => {
    const mana = new Map<Mana, number>()
    mana.set(Mana.White, 0)
    mana.set(Mana.Blue, 0)
    mana.set(Mana.Black, 0)
    mana.set(Mana.Red, 0)
    mana.set(Mana.Green, 0)

    for (const card of deckStore.cardsInPlay) {
      for (const manaType of card.produces) {
        const value = mana.get(manaType) as number
        mana.set(manaType, value + 1)
      }
    }

    return mana
  })

  return {
    manaBase
  }
})
