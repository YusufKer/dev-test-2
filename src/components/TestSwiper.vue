<template>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <!-- Your content for slide 1 -->
        </div>
        <div class="swiper-slide">
          <!-- Your content for slide 2 -->
        </div>
        <div class="swiper-slide">
          <!-- Your content for slide 3 -->
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </template>

<script>
    import Swiper from 'swiper';
    import 'swiper/css/swiper.css';

    export default {
        name: "SwiperTest",
        mounted() {
            const swiper = new Swiper('.swiper-container', {
                effect: 'fade',
                fadeEffect: {
                crossFade: true
                },
                pagination: {
                el: '.swiper-pagination',
                clickable: true
                }
            });
        }
    }
</script>