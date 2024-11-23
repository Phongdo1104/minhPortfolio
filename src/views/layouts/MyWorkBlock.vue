<template>
    <div>
        <swiper :effect="'flip'" :grabCursor="true" :pagination="{
            dynamicBullets: true,
        }" :navigation="true" :modules="modules" :id="id" class="swiper-wrapper">
            <swiper-slide :class="roleBgClass">
                <div class="h-100">
                    <div id="title-works" class="container">
                        <span v-html="workTitle"></span>
                    </div>
                    <div class="description-work">
                        <div class="container showreel-work">
                            <div class="row justify-content-between">
                                <div class="col-sm my-background-block">
                                    <div id="my-background-title">
                                        <span>Background</span>
                                    </div>
                                    <div id="my-background-description">
                                        <span v-html="myBgDescription"></span>
                                    </div>
                                </div>
                                <div class="col-sm" id="my-role-block">
                                    <div id="my-role-title">
                                        <span>My Role</span>
                                    </div>
                                    <div id="my-role-description">
                                        <span v-html="myRoleDescription"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide id="challenge-objective">
                <div id="video-showreel-block" class="container text-center">
                    <img class="img-fluid business-obj-img-size" :src="businessObjBgSrc" alt="showreel-video">
                </div>
                <div class="challenge-objective-block">
                    <div class="container">
                        <div class="row justify-content-end">
                            <div class="col-auto" id="my-role-block">
                                <div id="my-role-title">
                                    <span>Business Objective</span>
                                </div>
                                <div class="text-end" id="my-role-description">
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
                                    <div id="video-type">
                                        <span>Video Type</span>
                                    </div>
                                    <div id="my-background-description">
                                        <span v-html="videoTypeDesc"></span>
                                    </div>
                                    <div id="mood-tone">
                                        <span>Mood & Tone</span>
                                    </div>
                                    <div id="my-background-description">
                                        <span v-html="moodToneDesc"></span>
                                    </div>
                                </div>
                                <div class="col-auto" id="my-role-block">
                                    <div id="editing-style">
                                        <span>Editing style</span>
                                    </div>
                                    <div id="my-background-description">
                                        <span v-html="editingStyleDesc"></span>
                                    </div>
                                    <div id="platform">
                                        <span>Platform</span>
                                    </div>
                                    <div id="my-background-description">
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

.swiper-wrapper .swiper-button-prev {
    margin-left: 5%;
    margin-top: 15%;
}

.swiper-wrapper .swiper-button-next {
    margin-right: 5%;
    margin-top: 15%;
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
import '../../assets/show-reel.css'

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
    method: {
        scroll() {
            const element = document.getElementsByClassName('showreel');
            element.scrollIntoView({ behavior: 'smooth' });
        }
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