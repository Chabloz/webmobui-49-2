<script setup>
  import { computed, ref } from 'vue';
  import { round } from '../utils/math.js';

  const props = defineProps({
    modelValue: {
      type: Number,
      required: true
    },
    symbol: {
      type: String,
      required: false,
      default: ''
    }
  })

  const emits = defineEmits([
    'update:modelValue'
  ]);

  // const modelValue = ref(43);
  // const symbol = '°C';

  const value = computed({
    get: () => round(props.modelValue, 2),
    set: val => emits('update:modelValue', val)
  });

 /*
    :value="modelValue"
    @input="modelValue = $event.target.value"
  */
</script>

<template>

  <input
    type="number"
    v-model="value"
  >
  <span> {{ symbol }}</span>
</template>

<style scoped>

</style>