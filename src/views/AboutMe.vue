<script lang="ts" setup>
import '../assets/about-me.css'
</script>

<template>
  <div>
    <div class="desk-angle-1">
      <div class="container pb-5" id="about-me">
        <div class="row">
          <div class="col-md mb-5">
            <div class="position-relative d-flex justify-content-center">
              <img
                class="avatar img-fluid"
                src="/images/minh2-edited.png"
                alt="MinhDarkBG"
              />
              <h1
                class="position-absolute text-white fw-bold display-1 text-overlay text-center text-uppercase"
              >
                About me
              </h1>
            </div>
          </div>
          <div class="col-md me-5">
            <div class="text-white">
              <div class="text-end" id="nameHeader">
                <span class="fw-bold display-1" id="fullName">Minh Nguyen</span>
              </div>
              <div class="nav-bar mt-4 mb-5"></div>
              <div class="mb-5">
                <p class="h5 fw-bold">
                  Driven by a passion for digital branding, I am a 24-year-old self-taught social
                  media video editor.
                </p>
              </div>
              <div class="mb-5">
                <p class="h5">
                  My focus is on enhancing digital brands with creative professionalism rooted in
                  clients' original stories.
                </p>
              </div>
              <div class="mb-2">
                <p class="h5">I am proficient in the following tools:</p>
              </div>
              <div class="row col-auto d-flex justify-content-start mb-5" id="tools">
                <div class="col-auto">
                  <img
                    class="logo-tools img-fluid"
                    src="/images/PRIcons.png"
                    alt="PremierIcon"
                  />
                </div>
                <div class="col-auto ms-3">
                  <img
                    class="logo-tools img-fluid"
                    src="/images/AFIcons.png"
                    alt="PremierIcon"
                  />
                </div>
                <div class="col-auto ms-3">
                  <img
                    class="logo-tools img-fluid"
                    src="/images/CapCut_logoIcons.png"
                    alt="PremierIcon"
                  />
                </div>
              </div>
              <div class="mb-5 h5" id="experience">
                <p>Until 2024, I have gained 4 years of experience in the following areas:</p>
                <ul class="fw-bold">
                  <li class="mb-2">Video production & editing</li>
                  <li class="mb-2">Social media marketing</li>
                  <li class="mb-2">Filmmaking & backstage work</li>
                </ul>
              </div>
              <div class="border-top border-bottom border-start p-5">
                <img
                  class="certificate img-fluid"
                  src="/images/cert.png"
                  alt="certificate"
                  id="certificate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
