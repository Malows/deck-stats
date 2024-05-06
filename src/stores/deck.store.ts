import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Card, AvailableDeck } from '../types'

import { decks } from '../data/decks'

type CardOption = {
  label: string;
  value: Card;
}

export const useDeckStore = defineStore('deck', () => {
  const cards = ref<Card[] | null>(null)
  const selected = ref<Card | null>(null)
  const cardsInPlay = ref<Card[]>([])

  const cardsOptions = computed(() =>
    (cards.value ?? [])
      .filter(card => card.copies > 0)
      .map(card => ({ label: card.name, value: card }) as CardOption)
      .toSorted((a, b) => a.label.localeCompare(b.label, undefined, { sensitivity: 'base' }))
  )

  const manaPool = computed(() => cardsInPlay.value.length)

  const playCard = () => {
    if (!selected.value || !cards.value) return

    cards.value.find(c => c.id === selected.value!.id)!.copies--
    cardsInPlay.value.push(selected.value)
    selected.value = null
  }

  const selectDeck = (deck: AvailableDeck) => {
    cards.value = decks[deck].cards.map((card) => ({ ...card }) as Card)
  }

  return {
    cards,
    cardsOptions,
    cardsInPlay,
    selected,
    manaPool,
    playCard,
    selectDeck
  }
})
