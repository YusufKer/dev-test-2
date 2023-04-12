<template>
    <div class="bg-theme-red px-6 py-8 grid laptop:flex laptop:justify-between gap-4">
        <div class="flex gap-y-4 gap-x-4 flex-wrap justify-center bg-red-50">
            <p>ph</p>
            <p>Do you have <br>a question?</p>
            <p>+0123 456 789</p>
        </div>
        <div class="email-form flex tablet:grid items-center justify-center gap-x-4 gap-y-4 flex-wrap bg-green-50">
            <div class="h-10 rounded-full w-full laptop:w-[320px] bg-green-300">

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
    .email-form{
        grid-template-columns: 1fr auto;
    }
</style>