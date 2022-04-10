<script setup>
  import {ref, computed, watchEffect} from 'vue';
import HelloWorld from './components/HelloWorld.vue';

  const x = ref(0);

const y = computed({
  get: () => x.value * 2,
  set: val => x.value = 10
})

const msg = computed(() => {
  const msg = x.value > 30 ? 'il fait chaud' : '';
  return msg;
})

setTimeout(() => {
  x.value = 40;
}, 3000)
</script>

<template>
  <hello-world></hello-world>
  <v-menu></v-menu>
  <p>kelvin: {{ x }} </p>
  <p>celcius: {{ y }}</p>

  <div>{{ msg }}</div>

</template>

<style>
  p {
    color: red;
  }
</style>
