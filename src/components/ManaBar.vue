<script setup lang="ts">
import { computed } from 'vue'

import type { Mana } from '../types'
import { colorOfMana } from '../utils/colors'

interface ManaBarProps {
  mana: Mana;
  amount: number;
  total: number;
}

const props = defineProps<ManaBarProps>()

const value = computed(() => props.amount ? (props.amount / props.total) : 0)
const color = computed(() => colorOfMana(props.mana))
</script>

<template>
  <div class="mana-bar">
    <q-linear-progress
      class="q-mb-md"
      size="xl"
      :color
      :value
    />
    <p class="mana-bar__amount text-h5">
      {{ amount }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.mana-bar {
  display: flex;
  align-items: center;
  gap: 1rem;

  &__amount {
    flex-shrink: 1;
  }
}
</style>
