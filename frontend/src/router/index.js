import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '../views/Login.vue'
import ForgotPassView from '../views/ForgotPass.vue'
import MainPageView from '../views/MainPage.vue'
import About from '../views/About.vue'

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
      component: () => import('../views/Register.vue')
    },
    {
      path: '/forgotPass',
      name: 'forgotPass',
      component: ForgotPassView
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})

export default router
