<script setup lang="ts">
import { useDeckStore } from '../stores/deck.store'

const deckStore = useDeckStore()
</script>

<template>
  <div class="row q-gutter-md items-center">
    <div class="col">
      <q-select v-model="deckStore.selected" label="Select" emit-value map-options :options="deckStore.cardsOptions">
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
    <div class="col col-auto">
      <q-btn color="primary" label="Play" @click="deckStore.playCard()" />
    </div>
  </div>
</template>
