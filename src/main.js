import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import './scss/app.scss'

createApp(App)
    .use(store)
    .mount('#app')