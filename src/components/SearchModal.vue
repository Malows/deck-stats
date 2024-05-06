<script setup lang="ts">
import { computed, ref } from 'vue'

import { Card, Mana } from '../types'
import { colorOfMana } from '../utils/colors'
import { useDeckStore } from '../stores/deck.store'

const deckStore = useDeckStore()

const showSearchModal = ref(false)
const toSearch = ref([])

const toggles = [
  { search: 'Forest', mana: Mana.Green },
  { search: 'Plains', mana: Mana.White },
  { search: 'Mountain', mana: Mana.Red },
  { search: 'Island', mana: Mana.Blue },
  { search: 'Swamp', mana: Mana.Black }
]

const listItems = computed(() => {
  if (toSearch.value.length === 0) return []

  return deckStore.cardsOptions.filter(card => {
    return toSearch.value.every(search => card.value.typeText.includes(search))
  })
})

const onSelectCard = (card: Card) => {
  deckStore.selected = card
  showSearchModal.value = false
  toSearch.value = []
}
</script>

<template>
  <div class="row justify-center items-center">
    <q-btn
      color="primary"
      size="xl"
      label="Search"
      @click="showSearchModal = true"
    />
  </div>

  <q-dialog
    v-model="showSearchModal"
    backdrop-filter="blur(4px)"
  >
    <q-card>
      <q-card-section>
        <q-toggle
          v-for="{ search, mana } in toggles"
          :key="search"
          v-model="toSearch"
          :color="colorOfMana(mana)"
          :val="search"
          keep-color
        />
      </q-card-section>
      <q-card-section>
        <q-list>
          <q-item
            v-for="item in listItems"
            :key="item.value.id"
            clickable
            @click="onSelectCard(item.value)"
          >
            <q-item-section>
              <q-item-label>{{ item.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
