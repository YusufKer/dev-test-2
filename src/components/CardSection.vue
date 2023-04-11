<template>
    <div>
        <div class="contain bg-gray-200">
          <h2 class="text-center font-bold">FEATURED <span class="text-red-700">CAUSES</span></h2>
          <div class="grid grid-cols-3 gap-4">
            <SquareCard />
            <SquareCard />
            <SquareCard />
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