import { VueElement, createApp } from 'vue';
import App from './App.vue';
import bootstrap from './bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle.js';



createApp(App).mount('#app')

VueElement.use(bootstrap);
