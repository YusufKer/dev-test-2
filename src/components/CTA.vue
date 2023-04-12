<template>
    <div class="bg-theme-red p-10 absolute bottom-0 w-full translate-y-1/2 grid grid-cols-2">
        <div class="question grid bg-blue-500">
            <p>phone</p>
            <p class="text-h4 text-white leading-none">Do you have <br> a question</p>
            <p class="text-h2 text-white font-bold">+0123 456 789</p>
        </div>
        <div class="grid grid-cols-2 bg-green-50">
            <div>input</div>
            <button>test</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CTA"
    }
</script>

<style scoped>
    .question{
        display:flex;
        align-items: center;
        gap:16px
    }
</style>