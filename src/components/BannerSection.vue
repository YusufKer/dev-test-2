<template>
    <section :class="main ? 'banner-main' : 'banner-secondary'" class="banner full-screen:aspect-banner">
        <div class="grid tablet:grid-cols-2 contain z-40 relative h-full">
            <div v-if="!main"></div>
            <div class="flex flex-col justify-center h-full py-10">
                <h2 class="text-h2 laptop:text-h1 font-bold text-white uppercase laptop:max-w-[60%]">Heading that takes up two lines</h2>
                <p class="text-p laptop:text-banner text-white laptop:max-w-[80%] pt-4 pb-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias ipsa libero natus ullam illum numquam? Vero repellendus, culpa quo, commodi error quibusdam fugiat nemo modi, qui adipisci delectus. Fugiat, accusamus!</p>
                <ThemeButton/>
            </div>
        </div>
    </section>
</template>

<script>
    import ThemeButton from './ThemeButton.vue';

    export default {
        name: "BannerSection",
        components: {
            ThemeButton
        },
        props:{
            main:{
                type:Boolean,
                default(){
                    return false;
                }
            }
        }
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
        height: 100%;
        background-color: #881d1d;
        /* background-image:url("../assets/theme/background4.jpg"); */
        background-size: 200px;
        transform: skew(-30deg);
        transform-origin:top;
        z-index: 10;
        @apply w-[60%] tablet:w-[60%]
    }
    .banner-main::after{
        content:"";
        position: absolute;
        width:30%;
        height: 100%;
        background-color: #222625;
        /* background-image:url("../assets/theme/background3.jpg"); */
        background-size: 200px;
        transform: skew(30deg);
        transform-origin:top;
        top: 0;
        z-index: 5;
        @apply hidden tablet:block

    }

    .banner-secondary{
        background-image: url("../assets/banners/secondary2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center right;
        position: relative;
    }
    .banner-secondary::before{
        content:"";
        position: absolute;
        right: 0;
        width:55%;
        height: 100%;
        background-color: #881d1d;
        /* background-image:url("../assets/theme/background4.jpg"); */
        background-size: 200px;
        transform-origin:top;
        z-index: 10;
        @apply hidden tablet:block;
    }
</style>