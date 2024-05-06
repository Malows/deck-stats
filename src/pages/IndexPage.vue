<script setup lang="ts">
import { useRouter } from 'vue-router'
import { decks } from '../data/decks'
import { AvailableDeck } from '../types'
import { useDeckStore } from '../stores/deck.store'
import DeckCard from '../components/DeckCard.vue'

const deckStore = useDeckStore()
const router = useRouter()

const onClick = (key: AvailableDeck) => {
  deckStore.selectDeck(key)
  router.push({ name: 'deck', params: { deck: key } })
}
</script>

<template>
  <q-page padding>
    <deck-card v-for="(deck, key) in decks" :key :deck @click="onClick(key)" />
  </q-page>
</template>
