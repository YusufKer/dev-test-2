<template>
    <section class="bg-white">
        <div class="contain py-20 relative">
            <h2 class="text-center font-bold text-h2 pb-20">HOW COULD <span class="text-red-700">YOU HELP ?</span></h2>
            <div class="grid grid-cols-4 gap-24">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
            <CTA v-if="cta" />
        </div>
    </section>
</template>

<script>
    import ArticleCard from './ArticleCard.vue';
    import CTA from './CTA.vue';

    export default {
        name: "ArticleListing",
        components: {
            ArticleCard,
            CTA
        },
        props:{
            cta:{
                type:Boolean,
                default(){
                    return false;
                }
            }
        }
    }
</script>