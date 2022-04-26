<script setup>
  import { computed } from '@vue/runtime-core';
  import { useFetch } from './composables/fetch.js';

  const { data: schedules } = useFetch('https://chabloz.eu/files/horaires/all.json');

  const schedulesFutur = computed(() => {
    if(!schedules.value) return [];
    return schedules.value.filter(course => {
      return course.start > '2022-04-26'
    })
  })
</script>

<template>
  <h1>Horaire IM</h1>

  <ul>
    <li v-for="course of schedulesFutur">
      {{ course.label }}, {{ course.room }} @  {{ course.start }}
    </li>
  </ul>
</template>

<style scoped>

</style>