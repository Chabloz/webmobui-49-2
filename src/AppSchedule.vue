<script setup>
  import { computed, ref, watchEffect } from '@vue/runtime-core';
  import { useFetch } from './composables/fetch.js';
  import TheNav from './components/TheNav.vue';


  const { data: schedules } = useFetch('https://chabloz.eu/files/horaires/all.json');


  const { data: result } = useFetch('https://chabloz.eu/ws/chat/user/login?user=Chabloz');
  const { data: messages } = useFetch('https://chabloz.eu/ws/chat/msg/get');

  const schedulesFutur = computed(() => {
    if(!schedules.value) return [];
    return schedules.value.filter(course => {
      return course.start > '2022-05-02' && course.start < '2022-05-03'
    })
  })

  const tmplRef = ref(null);
  watchEffect(() => console.log(tmplRef.value));

  function manageForm() {
    console.log('form is submited');
  }

  const myComp = ref(TheNav);
</script>

<template>
  <h1 ref="tmplRef">Horaire IM</h1>


  <component :is="myComp"></component>


  <form @submit.prevent="manageForm()">
    <input type="text">
  </form>

<div>
    {{ result }}
  </div>

  <div>
    {{ messages }}
  </div>

  <ul>
    <li v-for="course of schedulesFutur">
      {{ course.label }}, {{ course.room }} @ {{ course.start }}
    </li>
  </ul>
</template>

<style scoped>

</style>