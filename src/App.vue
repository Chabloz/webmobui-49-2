<script setup>
  import { ref, watchEffect } from 'vue';
  import BaseButton from './components/BaseButton.vue';

  const distSi = ref(0.123);



  function round(val) {
    return Math.round(val);
  }

  function onBtnClick(evt) {
    console.log(evt)
  }

  const msg = "Click me !"

  const username = ref(null);



  function onUsernameChange(evt) {
    username.value = evt.target.value;
  }

  const password = ref(null);

  watchEffect(() => {
    console.log(username.value);
    console.log(password.value);
  })

  const error = ref(false);

   setTimeout(() => {
     error.value = true;
   }, 2000)
</script>

<template>
  <h1>Temperature converter</h1>
  <div> {{ round(distSi) }} </div>
  <input type="submit" :value="msg" @click="onBtnClick($event)">

  <base-button type="error">Error</base-button>

  <base-button type="info">Info</base-button>

  <base-button type="truc">Truc</base-button>


  <!-- <input
    type="text"
    name="username"
    placeholder="username"
    :value="username"
    @input="onUsernameChange($event)"
  > -->
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <div v-show="error">
      Wrong username or password
    </div>
  </template>

<style>
  input {
    display: block;
    padding: 0.5rem;
    margin: 1rem;
  }
</style>
