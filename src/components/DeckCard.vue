<script setup lang="ts">
import { computed } from 'vue'
import { Deck } from '../types'
import ManaDot from './ManaDot.vue'

interface DeckCardProps {
  deck: Deck;
}

const props = defineProps<DeckCardProps>()
const emits = defineEmits(['click'])

const image = computed(() => props.deck.image ? `url(${props.deck.image})` : '')
</script>

<template>
  <div class="deck-card cursor-pointer q-hoverable" @click="emits('click')">
    <q-card class="fit" :class="{ 'deck-card--with-background': !!image }">
      <q-card-section class=" deck-card__section full-height">
        <p class="q-ma-none q-pa-sm text-h6 rounded-borders bg-white deck-card__title">
          {{ deck.name }}
        </p>
        <div v-if="deck.commander" class="deck-card__colors rounded-borders bg-white">
          <mana-dot v-for="mana in deck.commander?.manaCost" :key="mana" :mana />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
.deck-card {
  height: 240px;
  width: clamp(320px, 100%, 600px);
  flex-direction: column;

  &--with-background {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: v-bind(image);
  }

  &__section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title {
    width: max-content;
  }

  &__colors {
    align-self: flex-end;
    width: max-content;
    padding: .5rem;
    display: flex;
    gap: .5rem;
  }
}
</style>
