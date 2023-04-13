<template>
  <div class="max-w-[2400px] m-auto bg-red-100">
      <SocialBar />
      <NavBar />
      <BannerSection :main="true" />
      <ArticleListing :main="true"/>
      <BannerSection :main="false"/>
      <CardSection />
      <FeatureSection />
      <ArticleListing :cta="true" :main="false"/>
      <FooterSection/>
  </div>
</template>

<script>
  import SocialBar from './components/SocialBar.vue';
  import NavBar from './components/NavBar.vue';
  import BannerSection from './components/BannerSection.vue';
  import ArticleListing from './components/ArticleListing.vue';
  import CardSection from './components/CardSection.vue';
  import FeatureSection from './components/FeatureSection.vue';
  import FooterSection from './components/FooterSection.vue';

  export default {
    name: 'App',
    components:{
      SocialBar,
      NavBar,
      BannerSection,
      ArticleListing,
      CardSection,
      FeatureSection,
      FooterSection,
    }
  }
</script>