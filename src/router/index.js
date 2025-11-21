import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

     {
      path: '/gerenciamento',
      name: 'gerenciamento',
      component: () => import('../views/GerenciamentoView.vue'),
     },


  ],
})

export default router
