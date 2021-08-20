import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default function createRouter() {
    let router = new VueRouter({
        mode: 'history',
        routes: [
            {
                alias: '/',
                path: '/helloworld',
                component: require('./components/helloworld.vue')
            },
            {
                path: '/hellovue',
                component: require('./components/hellovue.vue')
            },
            {
                path: '/helloreact',
                component: require('./components/helloreact.vue')
            }
        ]
    })

    return router
}