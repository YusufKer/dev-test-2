<template>
    <div class="banner-main aspect-banner">
        <div class="grid grid-cols-2 contain z-50 relative h-full">
            <div class="flex flex-col justify-center h-full">
                <h2 class="text-4xl font-bold text-white">HEADING</h2>
                <p class="text-xl text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ipsa libero natus ullam illum numquam? Vero repellendus, culpa quo, commodi error quibusdam fugiat nemo modi, qui adipisci delectus. Fugiat, accusamus!</p>
                <button class="bg-green-300 w-max px-6 py-2 rounded-full fount-bold">Donate Now</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BannerSection"
    }
</script>

<style scoped>
    .banner-main{
        background-image: url("../assets/banners/main.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center right;
        position: relative;
    }
    .banner-main::before{
        content:"";
        position: absolute;
        width:60%;
        height: 100%;
        background-color: red;
        transform: skew(-30deg);
        transform-origin:top;
    }
</style>