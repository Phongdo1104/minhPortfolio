<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderPage from './views/HeaderPage.vue'
import FooterPage from './views/FooterPage.vue'
</script>

<template>
  <div id="header-block">
    <div class="container-sm">
      <!-- Header -->
      <HeaderPage />
    </div>
  </div>

  <!-- body -->
  <div id="body">
    <router-view v-slot="{ Component, route }">
      <!-- Use a custom transition or fallback to `fade` -->
      <transition :name="route.meta.transition || ''">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  <div id="footer-block">
      <!-- Footer -->
      <FooterPage />
  </div>
</template>
