<template>
    <div class="bg-theme-red">
        <div class="contain py-20">
            <h2 class="text-center text-h3 tablet:text-h2 text-white font-bold pb-10">WHAT PEOPLE SAY</h2>
            <div class="laptop:px-20 pb-10 tablet:pb-0">
                <div class="quote bg-white rounded-3xl p-4 tablet:p-10">
                    <p class="quotation-marks w-10 h-10"></p>
                    <p ref="fadeInOut" class="fadeInOut text-p tablet:text-h4">{{ quotes[activeQuote].quoteBody }}</p>
                    <p class="text-h4 tablet:text-h3 text-center col-span-2 text-red-600 font-bold">Lorem Ipsum <span class="text-black">| NGO</span></p>
                </div>
            </div>
            <div class="relative w-fit m-auto flex gap-4 flex-wrap justify-center tablet:justify-start">
                <div v-for="(quote, index) in quotes" :key="quote.id" @click="changeQuote(index)" :class="activeQuote === index && 'quote-active'" class="tablet:pt-10">
                    <img
                        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                        alt=""
                        class="w-20 h-20 rounded-full border-4 shadow-lg object-cover object-center"
                        >
                </div>
            </div>
            <!-- CTA -->
        </div>
    </div>
</template>

<script>
    export default {
        name: "FeatureSection",
        data(){
            return {
                activeQuote:0,
                quotes:[
                    {
                        userImage:"https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
                        quoteBody:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                    },
                    {
                        userImage:"https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
                        quoteBody:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of ."
                    },
                    {
                        userImage:"https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
                        quoteBody:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden"
                    },
                    {
                        userImage:"https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
                        quoteBody:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                    },
                    {
                        userImage:"https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=",
                        quoteBody:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dol"
                    },
                ]
            }
        },
        methods:{
            changeQuote(index){
                this.$refs.fadeInOut.style.opacity = "0";
                setTimeout(()=>{
                    this.activeQuote = index;
                    this.$refs.fadeInOut.style.opacity = "1";
                },500)
            }
        }
    }
</script>

<style scoped>
    .quotation-marks{
        background-image: url("../assets/theme/left-quotes-sign.png");
        background-size: contain;
    }
    .quote{
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 16px;
    }
    .quote-active::before{
        content:"";
        position: absolute;
        top:0;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid #FFFFFF;
        @apply hidden tablet:block;
    }
    .fadeInOut{
        transition: opacity 0.5s ease-in-out;
    }
</style>