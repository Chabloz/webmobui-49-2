<script setup>
  import { onMounted, onUnmounted } from '@vue/runtime-core';
  import { useFetch } from '../composables/fetch';
  import { apiLogout } from '../config/chat.js';

  const {data: resultLogout, fetchJson: doApiLogout} = useFetch(apiLogout);

  const emit = defineEmits([
    'logout'
  ]);

  onMounted(() => {
    console.log("je suis actif");
  })

  onUnmounted(() => {
    console.log("je suis inactif");
  })

  function doLogout() {
    doApiLogout();
    emit('logout');
  }
</script>

<template>
  Chat
  <button @click="doLogout">Logout</button>
</template>

<style scoped>

</style>