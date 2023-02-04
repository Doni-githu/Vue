import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import uiComponents from './ui-components'
import store from "./store"

const app = createApp(App)

app.use(router)
app.use(store)

uiComponents.map(e => app.component(e.name, e))

app.mount('#app')
