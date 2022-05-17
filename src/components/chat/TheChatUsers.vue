<script setup>
  import { onUnmounted } from '@vue/runtime-core';
  import { useFetch } from '../../composables/fetch.js';
  import {apiUsers} from '../../config/chat.js';

  const { data: users, fetchJson: getUsers } = useFetch(apiUsers);

  getUsers();

  const timer = setInterval(getUsers, 5000);

  onUnmounted(() => {
    clearInterval(timer);
  })


</script>

<template>
  <div>
    online:
    <span v-for="(user, index) of users">
      {{ user.username }}
    </span>
  </div>
</template>

<style scoped>
  span {
    display: inline-block;
    padding: 0 0.2rem;
  }
</style>