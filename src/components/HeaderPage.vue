<script>
import '../assets/header-page.css'
</script>

<template>
  <div class="row">
    <div class="col-md">
      <RouterLink to="/">
        <img id="logo-home-page" src="../../dist/assets/images/Logo_LightIcon.png" alt="" />
      </RouterLink>
    </div>
    <div class="col-auto row align-self-center">
      <div class="d-none d-md-block" id="header-links">
        <RouterLink to="/" class="text-decoration-none fw-bold text-center" id="home-page">
          Home
        </RouterLink>
        <RouterLink to="/about-me" class="text-decoration-none ms-5 fw-bold" id="about-me">
          About Me
        </RouterLink>
        <RouterLink to="/about-me" class="text-decoration-none ms-5 fw-bold" id="my-projects">
          My Projects
        </RouterLink>
        <RouterLink to="/about-me" class="text-decoration-none ms-5">
          <button id="get-in-touch" class="ps-5 pt-2 pb-2 pe-5 fw-bold">Get In Touch</button>
        </RouterLink>
      </div>
      <a class="col-auto d-block d-md-none position-absolute top-0 end-0 mt-3">
        <img id="menu-icon" src="../../dist/assets/svg/menu.svg" alt="" />
      </a>
    </div>
  </div>
</template>
