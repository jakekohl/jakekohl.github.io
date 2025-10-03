import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import primevueConfig from './util/primevue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { ripple: true });
app.use(primevueConfig);
app.mount('#app');
