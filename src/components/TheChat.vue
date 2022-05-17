<script setup>
  import { useFetch } from '../composables/fetch';
  import { apiLogout } from '../config/chat.js';
  import TheChatUsers from './chat/TheChatUsers.vue';
  import TheChatAddForm from './chat/TheChatAddForm.vue';
  import TheChatMessages from './chat/TheChatMessages.vue';

  const {data: resultLogout, fetchJson: doApiLogout} = useFetch(apiLogout);

  const emit = defineEmits([
    'logout'
  ]);

  function doLogout() {
    doApiLogout();
    emit('logout');
  }
</script>

<template>
  <the-chat-users />
  <the-chat-messages />
  <the-chat-add-form />
  <button @click="doLogout">Logout</button>
</template>

<style scoped>

</style>