<template>
    <div class="bg-white">
        <div class="contain bg-white py-20">
          <h2 class="text-h2 text-center font-bold pb-20">FEATURED <span class="text-red-700">CAUSES</span></h2>
          <div class="grid grid-cols-3 gap-4">
            <SquareCard progress="50%"/>
            <SquareCard progress="30%"/>
            <SquareCard progress="80%"/>
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