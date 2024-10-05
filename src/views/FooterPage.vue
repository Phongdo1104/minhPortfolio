<template>
    <swiper :effect="'flip'" :grabCursor="true" :pagination="{
        dynamicBullets: true,
    }" :navigation="true" :modules="modules" class="swiper-wrapper pt-5 pb-5" id="testimonial-swiper">
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh's creative touch made our AV tech content engaging on
                    YouTube, which helps contributing to our channel's growth. His energy and ownership were
                    outstanding.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Huu_Van.png"
                    alt="Mr. Tran Huu Van">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author">Mr. Tran Huu Van</a>
                <p class="mt-3">Founder of Pointer Clicker</p>
            </div>
        </swiper-slide>
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh excels in engaging script-building and demonstrates creativity in editing and visual
                    animation. His dedication and problem-solving skills are commendable.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Hung_Z.png"
                    alt="Mr. Hoang Mach Hung (Hung Z)">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author">Mr. Hoang Mach Hung (Hung Z)</a>
                <p class="mt-3">Founder of JHGO Channel</p>
            </div>
        </swiper-slide>
        <swiper-slide class="testimonial-block">
            <div class="text-center testimonial-text mb-4">
                <p class="fw-bold testimonial-block-text">
                    “Minh’s team produced a neat, visually detailed video from ideation to completion. The content
                    is ideal for lead generation. His dynamic and supportive approach was invaluable.”
                </p>
            </div>
            <div class="d-flex justify-content-center">
                <img class="rounded-circle testimonial-avatar img-fluid" src="/images/Ngoc_Minh.png"
                    alt="Mr. Doan Ngoc Minh">
            </div>
            <div class="text-center mt-4">
                <a href="#" class="author">Mr. Doan Ngoc Minh</a>
                <p class="mt-3">Founder of Pointer Clicker</p>
            </div>
        </swiper-slide>
    </swiper>
    <div class="footer-bg">
        <div class="position-relative d-flex justify-content-center footer-info-block">
            <img class="img-fluid footer-img" src="/images/Footer-resize.png" alt="Minh_with_header.png">
            <div
                class="position-absolute h1 d-flex border-bottom border-dark border-3 justify-content-between d-none slogan-top">
                <div class="slogan-text">let's make</div>
                <div class="slogan-text">a spectacular</div>
            </div>
            <div
                class="position-absolute h1 d-flex border-bottom border-dark border-3 justify-content-between d-none slogan-bottom">
                <div>
                    <img class="gif-slogan img-fluid" src="/images/YouTube_videos_edited.gif" alt="">
                </div>
                <div class="slogan-text">together!</div>
            </div>
            <div class="position-absolute info-btn contact-info-block">
                <div class="row d-flex justify-content-evenly">
                    <a href="#" class="col-auto btn-prop d-none responsive-icon-black">
                        <img class="icon-contact" src="/svg/Instagram.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop d-flex responsive-icon-white invert-color-icon">
                        <img class="icon-contact" src="/svg/Instagram.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop invert-color-icon">
                        <img class="icon-contact" src="/svg/Linkedin.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop invert-color-icon">
                        <img class="icon-contact" src="/svg/Mail.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop d-none responsive-icon-black">
                        <img class="icon-contact" src="/svg/Icon.svg" alt="">
                    </a>
                    <a href="#" class="col-auto btn-prop d-flex responsive-icon-white invert-color-icon">
                        <img class="icon-contact" src="/svg/Icon.svg" alt="">
                    </a>
                </div>
            </div>
            <div class="position-absolute bottom-0 text-white copyright">
                <p>© Design by Minh Nguyen 2024</p>
            </div>
        </div>
    </div>
</template>
<style>
#testimonial-swiper .swiper-button-prev {
    padding-left: 20%;
}

#testimonial-swiper .swiper-button-next {
    padding-right: 20%;
}

#testimonial-swiper .swiper-button-disabled {
    display: none !important;
}

@media (max-width: 768px) {
    #testimonial-swiper .swiper-button-prev,
    #testimonial-swiper .swiper-button-next {
        display: none !important;
    }
}
</style>
<script lang="ts">
import '../assets/footer-page.css';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination, Navigation],
        };
    },
};
</script>