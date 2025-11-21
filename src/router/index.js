import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

     {
      path: '/test',
      name: 'test',
      component: () => import('../views/Gerenciamento.vue'),
     },
     {
      path: '/Menu',
      name: 'Menu',
      component: () => import('../views/MenuMuseuView.vue'),
     }


  ],
})

export default router
