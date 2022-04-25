<script setup>
  import {useLocalstorage} from './composables/localstorage.js';
  import TheNav from './components/TheNav.vue';
  import {tasks} from './state.js';




  const { value: movies } = useLocalstorage('movies', []);

  function addTask() {
    tasks.push('test');
  }

</script>

<template>
  <the-nav/>
  <h1 @click="addTask()">Todo list</h1>
  <div v-for="task of tasks"> {{ task }}</div>

  <h1>Movies</h1>
  <div v-for="movie of movies"> {{ movie }}</div>
</template>

<style scoped>

</style>