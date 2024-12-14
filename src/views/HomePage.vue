<template>
    <div class="profile-block">
        <div class="container profile-block-mobile">
            <div class="row d-md-none-max d-flex-block-max">
                <div class="col-xl text-white d-flex align-items-center profile-parent-block">
                    <div class="position-relative w-100">
                        <div class="position-absolute info-profile">
                            <div>
                                <p>I am here to delivers high-quality social media videos for businesses looking to
                                    enhance
                                    their online
                                    presence with a focus on creativity and professionalism</p>
                            </div>
                            <div class="row col-sm-auto d-flex justify-content-start mt-3">
                                <div class="col-sm">
                                    <RouterLink to="/about-me" class="text-decoration-none">
                                        <button id="about-me-btn" class="pt-2 pb-2 w-100 fw-bold border border-2">
                                            About Me
                                        </button>
                                    </RouterLink>
                                </div>
                                <div class="col-sm">
                                    <RouterLink to="/contact-me" class="text-decoration-none">
                                        <button id="contact-btn-profile"
                                            class="pt-2 pb-2 w-100 fw-bold border border-2 border-dark">
                                            Get In Touch
                                        </button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                        <div class="showreel-btn-parent d-none d-md-block">
                            <img class="showreel-btn" src="/svg/Showreel.svg" alt="Showreel-btn">
                        </div>
                    </div>
                </div>
                <div class="col-md img-profile-block">
                    <img class="img-fluid" src="/images/Profile.png" alt="">
                </div>
            </div>
            <div class="mobile-introduction-block d-none-block-mobile d-md-block-max">
                <div class="w-100">
                    <div class="info-profile">
                        <div>
                            <p>I am here to delivers high-quality social media videos for businesses looking to
                                enhance
                                their online
                                presence with a focus on creativity and professionalism</p>
                        </div>
                        <div class="container">
                            <div class="row d-flex justify-content-start mt-3">
                                <div class="col">
                                    <RouterLink to="/about-me" class="text-decoration-none">
                                        <button id="about-me-btn" class="pt-2 pb-2 w-100 fw-bold border border-2">
                                            About Me
                                        </button>
                                    </RouterLink>
                                </div>
                                <div class="col">
                                    <RouterLink to="/contact-me" class="text-decoration-none">
                                        <button id="contact-btn-profile"
                                            class="pt-2 pb-2 w-100 fw-bold border border-2 border-dark">
                                            Get In Touch
                                        </button>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="showreel-btn-parent d-none d-md-block">
                        <img class="showreel-btn" src="/svg/Showreel.svg" alt="Showreel-btn">
                    </div>
                </div>
                <div class="col-md img-profile-block position-relative">
                    <img class="img-fluid" src="/images/Minh_Mobile_Profile.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="selected-works-block">
        <div class="title d-none d-md-block">
            <div class="text-center">
                <div id="title-works-works">My Selected Works</div>
                <div id="sub-description">The great mission comes with its unique stories
                </div>
            </div>
        </div>
        <div class="container-fluid m-0 p-0 works-collection">
            <!-- Pointer Click -->
            <swiper :effect="'flip'" :grabCursor="true" :pagination="{
                dynamicBullets: true,
            }" :navigation="true" :modules="modules" :id="id" class="swiper-wrapper">
                <swiper-slide>
                    <div class="row m-0 h-100">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max">
                            <div class="bg-img-block">
                                <img class="img-fluid" src="/images/PointerClicker.png" alt="PointerClicker">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="pointer-clicker-info-project-block mobile-info-block">
                                <div class="text-uppercase display-3 pb-5 title-work">Pointer Clicker</div>
                                <div class="h4 genre-description-pointer">
                                    <div class="text-uppercase">Visual Storytelling / Creative Direction / Video
                                        Production
                                    </div>
                                </div>
                                <div class="pt-5 sub-description-works h4">
                                    Produce edutaining YouTube videos from website AV tech content
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="row m-0 h-100">
                        <div class="col-sm-7 p-0 d-md-none-max d-md-block-max">
                            <div id="pointer-click-brief-info-block">
                                <img class="img-fluid" src="/images/PointerClicker_brief_1.75x.jpg"
                                    alt="PointerClicker">
                            </div>
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm-5 p-0 description-works">
                            <div class="pointer-clicker-info-project-block mobile-info-block">
                                <div class="text-uppercase display-3 black-text-color-title">Brief</div>
                                <div class="pt-5 sub-description-works h4">
                                    Effectively conveys blog content into the edutaining YouTube videos
                                </div>
                                <div class="pt-5 h4 genre-description-pointer">
                                    <div>And this is how I execute it
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="row m-0 h-100">
                        <div class="col-sm p-0 d-md-none-max d-md-block-max" id="pointer-review-info-bg">
                        </div>
                        <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                            <img class="img-fluid w-100" src="/images/PointerClicker.png" alt="PointerClicker">
                        </div>
                        <div class="col-sm p-0 description-works">
                            <div class="review-info-project-block mobile-info-block-review">
                                <div class="text-uppercase display-3 pb-5 black-text-color-title">Tutorial / Review
                                </div>
                                <div class="h4 genre-description-pointer">
                                    <span>Mood & Tone:</span> Energetic, Edutaining
                                </div>
                                <div class="h4 genre-description-pointer">
                                    <span>Editing Style:</span> Fast-Paced, Montage-Driven
                                </div>
                                <div class="h4 genre-description-pointer">
                                    <span>Channel:</span> YouTube
                                </div>
                            </div>
                            <div class="read-more-block">
                                <img class="img-fluid" src="/images/PointerClicker_Team.png" alt="POINTER CLICKER TEAM">
                                <a href="#"
                                    class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                                    More</a>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <!-- ARCHES -->
            <div class="row m-0">
                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                    <img class="img-fluid w-100" src="/images/ARCHES.png" alt="PointerClicker">
                </div>
                <div class="col-sm p-0 description-works">
                    <div class="arches-project">
                        <div class="text-uppercase display-4 pb-5 title-work">Arches | Employee's Voice</div>
                        <div class="h4 genre-description-arches">
                            <div class="text-uppercase">Brand Promotion / Video Production / Content Creation</div>
                        </div>
                        <div class="pt-5 sub-description-works h4">
                            Highlight Arches employees' stories visually to enhance brand presence on LinkedIn
                        </div>
                    </div>
                    <div class="read-more-block">
                        <img class="img-fluid" src="/images/ARCHES_TEAM.png" alt="ARCHES TEAM">
                        <a href="#" class="read-more-button read-more-button-center read-more-button-right-mobile">Read
                            More</a>
                    </div>
                </div>
                <div class="col-sm p-0 d-md-none-max d-md-block-max">
                    <div class="bg-img-block">
                        <img class="img-fluid" src="/images/ARCHES.png" alt="PointerClicker">
                    </div>
                </div>
            </div>
            <!-- JHGO Channel -->
            <div class="row m-0">
                <div class="col-sm p-0 d-md-none-max d-md-block-max">
                    <div class="bg-img-block">
                        <img class="img-fluid" src="/images/JHGO.png" alt="PointerClicker">
                    </div>
                </div>
                <div class="col-xl p-0 d-md-block-mobile d-none-block-mobile logo-project-mobile">
                    <img class="img-fluid w-100" src="/images/JHGO.png" alt="PointerClicker">
                </div>
                <div class="col-sm p-0 description-works">
                    <div class="info-project-block">
                        <div class="text-uppercase display-3 pb-5 title-work">JHGO Channel</div>
                        <div class="h4 genre-description">
                            <div class="text-uppercase">Content Creation / Video Production / Scriptwriting</div>
                        </div>
                        <div class="pt-5 sub-description-works h4">
                            Produce engaging historical and discovery videos to build JHGO's YouTube community
                        </div>
                    </div>
                    <div class="read-more-block">
                        <img class="img-fluid" src="/images/JHGO_TEAM.png" alt="JHGO CHANNEL TEAM">
                        <a href="#" class="read-more-button read-more-button-left read-more-button-right-mobile">Read
                            More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.swiper-wrapper .swiper-slide {
    height: auto;
}

.swiper-wrapper .swiper-button-prev {
    /* margin-left: 5%; */
    /* margin-top: 15%; */
    display: none;
}

.swiper-wrapper .swiper-button-next {
    /* margin-right: 5%; */
    /* margin-top: 50%; */
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
import '../assets/home-page.css'
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
    }
};
</script>