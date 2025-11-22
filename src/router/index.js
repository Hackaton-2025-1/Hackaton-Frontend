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
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuMuseuView.vue'),
     },
     {
      path: '/teste',
      name: 'teste',
      component: () => import('../views/teste.vue'),
     },
     {

      path: '/controle',
      name: 'control',
      component: () => import('../views/controleDeUsuario.vue'),
     },
     {
      path: '/cadastroAcervo',
      name: 'cadastroAcervo',
      component: () => import('../views/CadastroAcervo.vue'),
     },
     {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
     },
     {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue'),
     }

  ],
})

export default router
