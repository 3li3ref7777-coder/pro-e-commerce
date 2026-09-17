import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Bootstrap & FontAwesome CSS
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

const app = createApp(App);
app.use(router);
app.mount('#app');