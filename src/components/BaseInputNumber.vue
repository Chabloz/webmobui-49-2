<script setup>import { computed, ref, watchEffect } from 'vue';

  const props = defineProps({
    units: {
      type: String,
      required: false,
      default: ''
    }
  });

</script>

<template>
  <input type="number" v-bind="$attrs">
  <span>{{ units }}</span>
</template>

<style scoped>

</style>