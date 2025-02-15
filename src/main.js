import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
