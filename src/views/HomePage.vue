<template>
    <div class="profile-block">
        <div class="container">
            <div class="row">
                <div class="col-auto text-white d-flex align-items-center profile-parent-block">
                    <div class="position-relative w-100">
                        <div class="position-absolute info-profile">
                            <div>
                                <p>I am here to delivers high-quality social media videos for businesses looking to
                                    enhance
                                    their online
                                    presence with a focus on creativity and professionalism</p>
                            </div>
                            <div class="row col-auto d-flex justify-content-start mt-3">
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
                        <div class="showreel-btn-parent">
                            <img class="showreel-btn" src="/svg/Showreel.svg" alt="Showreel-btn">
                        </div>
                    </div>
                </div>
                <div class="img-profile-block col-sm">
                    <img class="img-fluid profile-img" src="/images/Profile.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="selected-works-block">
        <div class="title">
            <div class="text-center">
                <div id="title-works" class="d-none d-md-block">My Selected Works</div>
                <div id="sub-description" class="d-none d-md-block">The great mission comes with its unique stories</div>
            </div>
        </div>
        <div class="container m-0 p-0 works-collection">
            <div class="row m-0">
                <div class="col p-0">
                    <div id="bg-img-block">
                        <img src="/images/PointerClicker.png" alt="PointerClicker">
                    </div>
                </div>
                <div class="col p-0 h-100">
                    <div class="description-works">
                        <div class="info-project-block">
                            <div class="text-uppercase display-3 pb-5" id="title-work">Pointer Clicker</div>
                            <div class="h4">
                                <div class="text-uppercase">Visual Storytelling / Creative</div>
                                <div class="text-uppercase">Direction / Video Production</div>
                            </div>
                            <div class="pt-5 sub-description-works h4">
                                Produce edutaining YouTube videos from website AV tech content
                            </div>
                        </div>
                        <div class="read-more-block">
                            <img class="img-fluid w-100" src="/images/PointerClicker_Team_nodim.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import '../assets/home-page.css'
</script>