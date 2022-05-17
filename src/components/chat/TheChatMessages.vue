<script setup>
  import { onUnmounted } from '@vue/runtime-core';
  import { useFetch } from '../../composables/fetch.js';
  import { apiGetMsg } from '../../config/chat.js';
  import { watchEffect, ref } from 'vue';

  const { data: newMsg, fetchJson: getNewMsg } = useFetch(apiGetMsg);

  getNewMsg();

  const timer = setInterval(getNewMsg, 1000);

  const allMsg = ref([]);

  watchEffect(() => {
    if (newMsg.value?.length > 0) {
      allMsg.value.push(...newMsg.value);
    }
  })

  onUnmounted(() => {
    clearInterval(timer);
  })


</script>

<template>
  <div>
    <div v-for="(msg, index) of allMsg">
      {{ msg.user.username }} :
      {{ msg.message }}
    </div>
  </div>
</template>

<style scoped>
  span {
    display: inline-block;
    padding: 0 0.2rem;
  }
</style>