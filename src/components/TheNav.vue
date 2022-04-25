<script setup>
  import { ref } from 'vue';
  import { page, tasks } from '../state.js';

  import {useLocalstorage} from '../composables/localstorage.js';


  window.addEventListener('hashchange', () => {
    page.value = window.location.hash
  })



</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="#home">home</a>
      </li>
      <li>
        <a href="#temperature">temperature</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  li {
    display: inline-block;
    margin: 0 1rem;
  }
</style>