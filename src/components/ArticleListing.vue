<template>
    <section class="bg-green-100">
        <div class="contain bg-gray-400">
          <h2 class="text-center font-bold">HOW COULD <span class="text-red-700">YOU HELP ?</span></h2>
          <div class="grid grid-cols-4 gap-4">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>
    </section>
</template>

<script>
    import ArticleCard from './ArticleCard.vue';

    export default {
        name: "ArticleListing",
        components: {
            ArticleCard
        }
    }
</script>