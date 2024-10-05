import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { transition: '' } // 'fade'
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
      meta: { transition: '' } // slide
    }
  ]
})

export default router
