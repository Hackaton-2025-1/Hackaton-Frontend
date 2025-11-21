import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

     {
      path: '/gerenciamento',
      name: 'gerenciamento',
      component: () => import('../views/GerenciamentoView.vue'),
     },
     {
      path: '/Menu',
      name: 'Menu',
      component: () => import('../views/MenuMuseuView.vue'),
     },
     {
      path: '/Colecao',
      name: 'Colecao',
      component: () => import('../views/ColecoesAcervo.vue'),
     }


  ],
})

export default router
