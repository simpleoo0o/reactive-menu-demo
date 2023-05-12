import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            children: [
                {
                    path: '/template/:a?',
                    name: 'template',
                    component: () => import('../views/TheTemplate.vue')
                },
                {
                    path: '/menu/editor',
                    name: 'menuEditor',
                    component: () => import('../views/MenuEditor.vue')
                },
                {
                    path: '/menu/tree',
                    name: 'menuTree',
                    component: () => import('../views/MenuTree.vue')
                },
                {
                    path: '/menu/config',
                    name: 'menuConfig',
                    component: () => import('../views/MenuConfig.vue')
                },
                {
                    path: '/read/me',
                    name: 'readMe',
                    component: () => import('../views/ReamMe.vue')
                },
                {
                    path: '/interface',
                    name: 'interface',
                    component: () => import('../views/Interface.vue')
                }
            ]
        }
    ]
})

export default router
