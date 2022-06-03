import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import ForgotPass from '../views/ForgotPass.vue'
import MainPage from '../views/MainPage.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Register from '../views/Register.vue'
import Store from '../views/Store.vue'
import ProfileUpdate from '../views/ProfileUpdate.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/Register.vue')
      component: Register
    },
    {
      path: '/forgotPass',
      name: 'forgotPass',
      component: ForgotPass
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/profile-update',
      name: 'profileUpdate',
      component: ProfileUpdate
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }
  ]
})

export default router
