<script setup>
  import { useFetch } from '../../composables/fetch.js';
  import {apiAddMsg} from '../../config/chat.js';
  import {computed, ref} from 'vue';

  const msg = ref('');

  const urlAddMsg = computed(() => apiAddMsg + msg.value);
  const {fetchJson: postMsg} = useFetch(urlAddMsg);

  function addMsg() {
    postMsg();
    msg.value = '';
  }

</script>

<template>
  <form @submit.prevent="addMsg()">
    <input type="text" v-model="msg" required>
    <button>envoyer</button>
  </form>
</template>

<style scoped>

</style>