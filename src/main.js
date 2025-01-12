// Vue / PrimeVue
import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';

// Utils
import primeVueConfig from './utils/primevue';


const app = createApp(App);
const config = primeVueConfig.config;
console.debug(config);

app.use(PrimeVue, config);

// Mount the app
app.mount('#app');
