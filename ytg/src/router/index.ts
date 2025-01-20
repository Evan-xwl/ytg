import { createRouter, createWebHistory} from 'vue-router'
import type { RouterOptions } from 'vue-router';
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/detail',
            component: () => import('@/pages/detail/index.vue')
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
} as RouterOptions)