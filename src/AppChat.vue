<script setup>
  import { ref, computed, watchEffect } from 'vue';
  import { useFetch } from './composables/fetch';
  import { apiLogin } from './config/chat.js';
  import TheChat from './components/TheChat.vue';

  const showError = ref(false);
  const isLogged = ref(false);
  const username = ref('')
  const urlLogin = computed(() => apiLogin + username.value);
  const {data: resultLogin, fetchJson: doApiLogin} = useFetch(urlLogin);

  function doLogin() {

    doApiLogin();
  }

  watchEffect(() => {
    if (resultLogin.value?.status == 'error') {
      showError.value = true;
    } else if (resultLogin.value?.status == 'success') {
      showError.value = false;
      isLogged.value = true;
    }
  })

</script>

<template>
  <the-chat v-if="isLogged" @logout="isLogged = false"></the-chat>
  <template v-if="!isLogged">
    <p v-if="showError">Erreur de connexion</p>
    <form @submit.prevent="doLogin()">
      <input
        v-model="username"
        type="text"
        required
      >
      <button>login</button>
    </form>
  </template>
</template>

<style scoped>

</style>