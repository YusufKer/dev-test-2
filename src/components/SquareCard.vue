<template>
    <div class="bg-theme-red backdrop">
        <div class="aspect-video relative">
            <img 
                :src="require(`@/assets/featured/${url}`)" 
                alt=""
            >
            <div class="progress-bar-outer bg-white w-[90%] h-12 rounded-full absolute bottom-0 translate-y-1/2 ml-[5%]">
                <div class="progress-bar">
                    <div :style="`width:${progress}`" class="progress bg-theme-red"></div>
                </div>
                <p>{{ progress }}</p>
            </div>
        </div>
        <div class="py-10 px-4">
            <div class="flex justify-between py-2 mobile-large:py-4 tablet:py-6">
                <p class="p text-white font-bold">Raised: $300.00</p>
                <p class="p text-white font-bold">Goal: $800.00</p>
            </div>
            <p class="text-p laptop:text-h4 text-white text-center w-3/4 m-auto pb-4 tablet:pb-10 laptop:pb-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <ThemeButton class="m-auto" small="true"/>
        </div>
    </div>
</template>

<script>
    import ThemeButton from './ThemeButton.vue';

    export default {
        name: "SquareCard",
        components:{
            ThemeButton
        },
        props:{
            progress:{
                type:String,
                default(){
                    return "0%";
                }
            },
            url:{
                type:String,
                default(){
                    return ""
                }
            }
        }
    }
</script>

<style scoped>
    .backdrop{
        background-image: url("../assets/theme/background2.jpg");
        background-color: #222625;
        background-size: contain;
    }
    .progress-bar-outer{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-gap: 16px;
        align-items: center;
        padding: 0 16px;
    }
    .progress-bar{
        height:10px;
        width: 100%;
        background-color: lightgrey;
        border-radius: 5000px;
        overflow: hidden;
    }
    .progress{
        height: 100%;
        border-radius: 5000px;
    }

</style>