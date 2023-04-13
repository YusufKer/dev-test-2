<template>
    <div class="bg-theme-red px-6 py-8 grid laptop:flex laptop:justify-between gap-4 laptop:absolute laptop:bottom-0 laptop:translate-y-1/2 w-calc">
        <div class="flex gap-y-4 gap-x-4 flex-wrap justify-center items-center">
            <p class="phone-icon w-10 h-10"></p>
            <p class="text-p text-white leading-tight">Do you have <br>a question?</p>
            <p class="text-h2 mobile-large:text-h1 font-bold text-white">+0123 456 789</p>
        </div>
        <div class="email-form flex tablet:grid items-center justify-center gap-x-4 gap-y-4 flex-wrap ">
            <div class="h-12 rounded-full w-full laptop:w-[320px] bg-gray-300 flex items-center gap-4 px-4">
                <div class="mail-icon h-6 w-6"></div>
                <input type="mail" class="w-full bg-transparent focus-within:outline-none">
            </div>
            <ThemeButton />
        </div>
    </div>
</template>

<script>
    import ThemeButton from './ThemeButton.vue';

    export default {
        name: "CTA",
        components: {
            ThemeButton
        }
    }
</script>

<style scoped>
    @media (min-width: 1024px){
        .w-calc{
        width:calc(100% - 32px)
        }   
    }

    .phone-icon{
        background-image: url("../assets/theme/ico_phone-white.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .email-form{
        grid-template-columns: 1fr auto;
    }
    .mail-icon{
        background-image: url("../assets/theme/ico_mail-white.png");
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>