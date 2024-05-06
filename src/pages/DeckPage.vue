<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useDeckStore } from '../stores/deck.store'
import { useManaStore } from '../stores/mana.store'

import PlaySelector from '../components/PlaySelector.vue'
import SearchModal from '../components/SearchModal.vue'
import ManaBar from '../components/ManaBar.vue'

const deckStore = useDeckStore()
const manaStore = useManaStore()
const router = useRouter()

onMounted(() => {
  if (!deckStore.cards) {
    router.push('/')
  }
})
</script>

<template>
  <q-page padding>
    <play-selector />

    <q-separator class="q-my-lg" />

    <search-modal />

    <h4>Mana pool: {{ deckStore.manaPool }}</h4>
    <mana-bar v-for="[mana, amount] in manaStore.manaBase" :key="mana" :mana :amount :total="deckStore.manaPool" />
  </q-page>
</template>
