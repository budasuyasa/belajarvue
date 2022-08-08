import { createApp } from 'vue'
import router from './router'
import Layout from './Layout.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./csssaya.css"

const app = createApp(Layout)
app.use(router)
app.mount('#app')
