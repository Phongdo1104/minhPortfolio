<template>
    <div>
        <swiper :effect="'flip'" :grabCursor="true" :pagination="{
            dynamicBullets: true,
        }" :navigation="true" :modules="modules" :id="id" class="swiper-wrapper">
            <swiper-slide :class="roleBgClass">
                <div class="h-100">
                    <div class="container title-works">
                        <span v-html="workTitle"></span>
                    </div>
                    <div class="description-work">
                        <div class="container showreel-work">
                            <div class="row justify-content-between">
                                <div class="col-sm my-background-block">
                                    <div class="my-background-title">
                                        <span>Background</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="myBgDescription"></span>
                                    </div>
                                </div>
                                <div class="col-sm my-role-block">
                                    <div class="my-role-title">
                                        <span>My Role</span>
                                    </div>
                                    <div>
                                        <span v-html="myRoleDescription"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide class="challenge-objective">
                <div class="video-showreel-block container text-center">
                    <img class="img-fluid business-obj-img-size" :src="businessObjBgSrc" alt="showreel-video">
                </div>
                <div class="challenge-objective-block">
                    <div class="container">
                        <div class="row my-role-description">
                            <div class="col-auto">
                                <div class="my-role-title">
                                    <span>Business Objective</span>
                                </div>
                                <div class="text-end">
                                    <span v-html="businessObj"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide :class="workInfoBgClass">
                <div class="editing-work-block">
                    <div class="description-work-last">
                        <div class="container">
                            <div class="row justify-content-around">
                                <div class="col-auto my-background-block">
                                    <div class="video-type">
                                        <span>Video Type</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="videoTypeDesc"></span>
                                    </div>
                                    <div class="mood-tone">
                                        <span>Mood & Tone</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="moodToneDesc"></span>
                                    </div>
                                </div>
                                <div class="col-auto my-role-block">
                                    <div class="editing-style">
                                        <span>Editing style</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="editingStyleDesc"></span>
                                    </div>
                                    <div class="platform">
                                        <span>Platform</span>
                                    </div>
                                    <div class="my-background-description">
                                        <span v-html="platformDesc"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<style>
.swiper-wrapper .swiper-slide {
    height: auto;
}

.swiper-wrapper .swiper-button-prev,
.swiper-wrapper .swiper-button-next {
    display: none;
}

.swiper-wrapper .swiper-button-disabled {
    display: none !important;
}

@media (max-width: 646px) {

    .swiper-wrapper .swiper-button-prev,
    .swiper-wrapper .swiper-button-next {
        bottom: 0;
        height: 60%;
    }
}
</style>
<script lang="ts">
import '../assets/show-reel.css'

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
    props: [
        'workTitle',
        'roleBgClass',
        'workInfoBgClass',
        'businessObjBgSrc',
        'id',
        'myBgDescription',
        'myRoleDescription',
        'businessObj',
        'videoTypeDesc',
        'moodToneDesc',
        'editingStyleDesc',
        'platformDesc',
    ]
};
</script>