<script setup>
  import { ref } from 'vue';
  import { page } from '../state.js';

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