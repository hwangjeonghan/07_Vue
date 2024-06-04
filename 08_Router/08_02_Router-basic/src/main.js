import { createApp } from 'vue';
import App from './App.vue';
import router from './router/01_router';
import nestedRoute from './router/02_nestedRoute';

const app = createApp(App)

app.use(nestedRoute)

app.mount('#app')
