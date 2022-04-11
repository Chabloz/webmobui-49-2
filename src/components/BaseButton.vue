<script setup>
  const props = defineProps({
    type: {
      type: String,
      required: false,
      default: 'info'
    }
  });

  
</script>

<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<style scoped>
  .info {
    color: blue;
  }
  .error {
    color: red;
  }
  .truc {
    color: brown;
  }
</style>