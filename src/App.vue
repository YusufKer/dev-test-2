<template>
  <div class="max-w-[2400px] m-auto bg-red-100">
      <!-- SOCIAL BAR -->
      <SocialBar />

      <!-- NAV BAR -->
      <NavBar />
      <!-- BANNER MAIN-->
      <BannerSection />
      <!-- HOW COULD YOU HELP -->
      <ArticleListing />

      <!-- BANNER SECONDARY-->
      <BannerSection />

      <!-- FEATURE CASUES-->
      <CardSection />

      <!-- WHAT PEOPLE SAY-->
      <FeatureSection />

      <!-- BEST VOLUNTEER --><!-- HOW COULD YOU HELP TEMPLATE -->
      <!-- HOW COULD YOU HELP -->
      <ArticleListing />

      <!-- CONTACT BANNER -->
      <div>
        <!-- WILL FIGURE YOU OUT EVENTUALLY -->
      </div>
      
      <!-- FOOTER -->
      <div>
        <div class="contain bg-gray-300 grid grid-cols-4">
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div class="col-span-4">copywrite</div>
        </div>
      </div>

  </div>
</template>

<script>
  import SocialBar from './components/SocialBar.vue';
  import NavBar from './components/NavBar.vue';
  import BannerSection from './components/BannerSection.vue';
  import ArticleListing from './components/ArticleListing.vue';
  import CardSection from './components/CardSection.vue';
  import FeatureSection from './components/FeatureSection.vue';

  export default {
    name: 'App',
    components:{
      SocialBar,
      NavBar,
      BannerSection,
      ArticleListing,
      CardSection,
      FeatureSection
    }

  }
</script>