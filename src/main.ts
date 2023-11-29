import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './routes/indexRoute';
import { createPinia } from 'pinia';
import VueCookies from 'vue3-cookies';

const app = createApp(App);
app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None"
})
    .use(router)
    .use(createPinia())
    .mount('#app');  
