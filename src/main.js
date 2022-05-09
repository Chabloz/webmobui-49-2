import { createApp } from 'vue';
import App from './AppChat.vue';

createApp(App).mount('#app');


// import {ref, computed, watchEffect} from 'vue';

// const x = ref(1);

// const y = computed({
//   get: () => x.value * 2,
//   set: val => x.value = 10
// })

// watchEffect(() => console.log(y.value));

// y.value = 4;