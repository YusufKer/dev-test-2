<template>
    <section class="bg-white">
        <div class="contain py-8 tablet:py-10 laptop:py-20 relative">
            <h2 class="text-center font-bold text-h3 tablet:text-h1 pb-8 tablet:pb-10 laptop:pb-20">HOW COULD <span class="text-theme-red">YOU HELP ?</span></h2>
            <div class="grid mobile-large:grid-cols-2 laptop:grid-cols-4 gap-12 full-screen:gap-24">
                <template v-if="main"><ArticleCard v-for="(url,index) in mainUrls" :key="index" :url="url"/></template>
                <template v-else><ArticleCard v-for="(url,index) in secondaryUrls" :key="index" :url="url"/></template>
            </div>
            <div v-if="cta" class="py-10"><!-- spacer --></div> 
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
            },
            main:{
                type:Boolean,
                default(){
                    return false;
                }
            }
        },
        data(){
            return {
                mainUrls:["child1","child2","child3","child4"],
                secondaryUrls:["adult1","adult2","adult3","adult4"]
            }
        }
    }
</script>