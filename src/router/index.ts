import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import HomePage from '../views/HomePage.vue'
import ContactMe from '../views/ContactMe.vue'
import MyWorks from '../views/MyWorksPage.vue'

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
        },
        {
            path: '/my-works',
            name: 'my-works',
            component: MyWorks,
            meta: { transition: '' } // slide
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe,
            meta: { transition: '' } // slide
        }
    ]
})

router.beforeEach((to: any, from, next) => {
    let title = to.name;
    title = title.replace("-", " ");
    title = title.toLowerCase()
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    document.title = title;
    next();
});

export default router
