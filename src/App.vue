<template>
  <div class="max-w-[2400px] m-auto bg-red-100">
      <!-- SOCIAL BAR -->
      <SocialBar />

      <!-- NAV BAR -->
      <NavBar />
      <!-- BANNER MAIN-->
      <BannerSection />
      <!-- HOW COULD YOU HELP -->
      <div class="bg-green-100">
        <div class="contain bg-gray-400">
          <h2>HOW COULD <span>YOU HELP ?</span></h2>
          <div class="grid grid-cols-4">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>

      <!-- BANNER SECONDARY-->
      <div class="bg-blue-100">
        <div class="contain bg-gray-300 grid grid-cols-2">
          <div class="">
            <h2>THIS IS A SECONDARY HEADING</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis facilis voluptas tempore exercitationem ducimus rerum at placeat fuga neque assumenda delectus rem odit, est eos amet dolorem molestias consequuntur?</p>
            <button>donate now</button>
          </div>
        </div>
      </div>

      <!-- FEATURE CASUES-->
      <div>
        <div class="contain bg-gray-200">
          <h2>FEATURED <span>CAUSES</span></h2>
          <div class="grid grid-cols-3">
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>

      <!-- WHAT PEOPLE SAY-->
      <div>
        <div class="contain bg-gray-100">
          <h2>WHAT PEOPLE SAY</h2>
          <div>QUOTE STUFF GOES HERE</div>
        </div>
      </div>

      <!-- BEST VOLUNTEER --><!-- HOW COULD YOU HELP TEMPLATE -->
      <!-- HOW COULD YOU HELP -->
      <div class="bg-green-100">
        <div class="contain bg-gray-200">
          <h2>BEST <span>VOLUNTEER</span></h2>
          <div class="grid grid-cols-4">
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
          </div>
        </div>
      </div>

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

  export default {
    name: 'App',
    components:{
      SocialBar,
      NavBar,
      BannerSection
    }

  }
</script>