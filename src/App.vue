<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './views/HeaderPage.vue'
import FooterPage from './views/FooterPage.vue'
import TestimonialBlock from './views/TestimonialBlock.vue'
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
    <div id="footer-block">
        <!-- Footer -->
        <FooterPage />
    </div>
</template>
