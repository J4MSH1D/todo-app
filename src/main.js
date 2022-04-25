import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "./tailwind/index.css"

import "./assets/base.css"

import { useDateBase } from "./stores/db"

const app = createApp(App)


app.use(createPinia())
app.use(router)

useDateBase().getData()

app.mount('#app')
