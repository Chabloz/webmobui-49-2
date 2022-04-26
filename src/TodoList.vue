<script setup>


  import {useLocalstorage} from './composables/localstorage.js';
  import TheNav from './components/TheNav.vue';
  import {tasks} from './state.js';
  import { computed, ref } from 'vue';

  const { value: movies } = useLocalstorage('movies', []);

  function addTask() {
    tasks.value.push('Hello');
  }

  const filterBy = ref('');

  const tasksFiltered = computed(() => {
    return tasks.value.filter(task => {
      return task.toLowerCase().includes(filterBy.value.toLocaleLowerCase());
    });
  })

  const tasksOrdered = computed(() => {
    return tasksFiltered.value.sort((t1 , t2) => {
      return t1.localeCompare(t2);
    });
  })

</script>

<template>
  <the-nav/>
  <h1 @click="addTask()">Todo list</h1>

  <input v-model="filterBy" type="text" placeholder="filtrer par ...">

  <div v-for="task of tasksOrdered"> {{ task }}</div>

  <h1>Movies</h1>
  <div v-for="movie of movies"> {{ movie }}</div>
</template>

<style scoped>

</style>