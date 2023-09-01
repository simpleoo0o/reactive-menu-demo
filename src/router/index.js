import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheTemplate from '../views/TheTemplate.vue'

const router = createRouter({
  history: createWebHashHistory(''),
  routes: [
    {
      path: '/',
      redirect: { name: 'elHome' },
      children: [
        {
          name: 'elHome',
          path: 'el',
          component: HomeView,
          children: [
            {
              path: '/template/:a?',
              name: 'template',
              component: TheTemplate
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
        },
        {
          name: 'naiveHome',
          path: 'naive',
          component: () => import('../views/NaiveHome.vue'),
          children: [
            {
              path: 'template/:a?',
              name: 'naiveTemplate',
              component: TheTemplate
            }
          ]
        },
        {
          name: 'antdvHome',
          path: 'antdv',
          component: () => import('../views/AntdvHome.vue'),
          children: [
            {
              path: 'template/:a?',
              name: 'antdvTemplate',
              component: TheTemplate
            }
          ]
        }
      ]
    }
  ]
})

export default router
