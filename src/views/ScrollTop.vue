<template>
    <div class="scroll-top scroll-top-out" id="scrollTopBtn">
        <a href="#" @click="scrollToTop()">
            <img class="img-fluid" src="/svg/ScrollTop.svg" alt="ScrollTop">
        </a>
    </div>
</template>
<script lang="ts" setup>
function scrollToTop() {
    window.scrollTo(0, 0);
}
</script>