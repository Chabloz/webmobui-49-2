<script setup>
  import { ref, watchEffect } from 'vue';
  import BaseButton from './components/BaseButton.vue';
  import BaseInputNumber from './components/BaseInputNumber.vue';

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

  function foo(evt) {
    console.log(evt);
  }

  const password = ref(null);



  const error = ref(false);
  const age = ref(1);

  watchEffect(() => console.log(age.value))
</script>

<template>
  <h1>Temperature converter</h1>
  <div> {{ round(distSi) }} </div>

  <base-input-number
    min="0"
    max="150"
    units="an(s)"
    :value="age"
    @input="age = $event.target.value - 0"
  ></base-input-number>

  <input type="submit" :value="msg" @click="onBtnClick($event)">

  <base-button type="error" @click="foo()">Error</base-button>

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
      Age cannot be less than 0
    </div>
  </template>

<style>
  input {

    padding: 0.5rem;
    margin: 1rem;
  }
</style>
