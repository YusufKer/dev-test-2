<template>
    <div class="bg-white">
        <div class="contain bg-white  py-8 tablet:py-10 laptop:py-20 ">
          <h2 class="text-h2 text-center font-bold pb-8 tablet:pb-10 laptop:pb-20">FEATURED <span class="text-theme-red">CAUSES</span></h2>
          <div class="grid mobile-large:grid-cols-2 tablet:grid-cols-3 gap-4">
            <SquareCard progress="50%" url="card1.jpg"/>
            <SquareCard progress="30%" url="card2.jpg"/>
            <SquareCard class="mobile-large:hidden tablet:block" progress="80%" url="card3.jpg"/>
          </div>
        </div>
    </div>
</template>

<script>
    import SquareCard from './SquareCard.vue';

    export default {
        name: "CardSection",
        components: {
            SquareCard
        }
    }
</script>