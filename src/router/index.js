import { createRouter, createWebHistory } from "vue-router";

import App from '../App.vue'
import About from '../About.vue'
import Photo from '../Photo.vue'

const routes = [
    {
      path     : '/',
      name     : 'Home',
      component: App
    },
    {
      path     : '/about',
      name     : 'Tentang',
      component: About
    },
    {
      path    : '/photo',
      name    : 'Photo',
      component    : Photo,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

