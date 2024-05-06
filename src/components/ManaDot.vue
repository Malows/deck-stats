<script setup lang="ts">
import { Mana } from '../types'
import { colorOfMana } from '../utils/colors'

interface ManaDotProps {
  mana: Mana
}

const props = defineProps<ManaDotProps>()
const color = colorOfMana(props.mana)
</script>

<template>
  <div class="mana-dot" :class="`bg-${color}`" />
</template>

<style lang="scss" scoped>
.mana-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
