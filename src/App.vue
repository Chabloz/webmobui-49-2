<script setup>
  import TheNav from './components/TheNav.vue';
  import { page } from './state.js';
  import BaseInputNumber from './components/BaseInputNumber.vue';
  import { ref, computed } from 'vue';

  const baseUnit = ref(0);
  const celsius = computed({
    get: () => baseUnit.value - 273.15,
    set: val => baseUnit.value = val + 273.15,
  });

  const kelvin = computed({
    get: () => baseUnit.value,
    set: val => baseUnit.value = val,
  });
</script>

<template>
  <the-nav></the-nav>
  <h1 v-show="page === '#home'">
    Welcome to the converters Web app
  </h1>

  <base-input-number
    v-model="celsius"
    symbol="°C"
  />
  <base-input-number
    v-model="kelvin"
    symbol="K"
  />

</template>

<style scoped>

</style>