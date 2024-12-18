<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './views/HeaderPage.vue'
import FooterPage from './views/FooterPage.vue'
import TestimonialBlock from './views/TestimonialBlock.vue'
import ScrollTop from './views/ScrollTop.vue'

window.onscroll = () => {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.classList.add("scroll-top-in");
        scrollTopBtn.classList.remove("scroll-top-out");
    } else {
        scrollTopBtn.classList.add("scroll-top-out");
        scrollTopBtn.classList.remove("scroll-top-in");
    }
}
</script>
<template>
    <div id="header-block">
        <!-- Header -->
        <HeaderPage />
    </div>
    <!-- body -->
    <div class="before-header" id="body">
        <router-view v-slot="{ Component, route }">
            <!-- Use a custom transition or fallback to `fade` -->
            <transition :name="route.meta.transition || ''">
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
    <div id="testimonial-block">
        <TestimonialBlock />
    </div>
    <div id="scroll-top">
        <ScrollTop />
    </div>
    <div id="footer-block">
        <!-- Footer -->
        <FooterPage />
    </div>
</template>
