import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes/indexRoute';

const app = createApp(App);
app.use(router).mount('#app');  
