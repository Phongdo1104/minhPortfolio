import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../components/AboutMe.vue'
import HomePage from '../components/HomePage.vue'

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
