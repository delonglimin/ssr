import Vue from 'vue'
import createRouter from './router.js'
import App from './App.vue'
import store from './store'

export function createApp() {
    const router = createRouter()
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return app
}