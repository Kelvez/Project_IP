import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/LoginView.vue'
import ForgotPassView from '../views/ForgotPassView.vue'
import MainPageView from '../views/MainPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPageView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginViewVue
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/forgotPass',
      name: 'forgotPass',
      component: ForgotPassView
    }
  ]
})

export default router
