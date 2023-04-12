<template>
    <div class="bg-theme-red">
        <div class="contain py-20">
            <h2 class="text-center text-h3 tablet:text-h2 text-white font-bold pb-10">WHAT PEOPLE SAY</h2>
            <div class="laptop:px-20 pb-10 tablet:pb-0">
                <div class="quote bg-white rounded-3xl p-4 tablet:p-10">
                    <p class="w-fit">test</p>
                    <p class="text-p tablet:text-h4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias harum in beatae quaerat autem rem ducimus numquam repellat velit voluptates commodi reprehenderit, vitae corrupti. Eum tempore enim commodi molestiae!</p>
                    <p class="text-h4 tablet:text-h3 text-center col-span-2 text-red-600 font-bold">Lorem Ipsum <span class="text-black">| NGO</span></p>
                </div>
            </div>
            <div class="quote-active relative w-fit m-auto flex gap-4 flex-wrap justify-center tablet:justify-start">
                <div class="tablet:pt-10 ">
                    <img 
                        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                        alt=""
                        class="w-20 h-20 rounded-full border-4 shadow-lg object-cover object-center"
                        >
                </div>
                <div class="tablet:pt-10 ">
                    <img 
                        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                        alt=""
                        class="w-20 h-20 rounded-full border-4 shadow-lg object-cover object-center"
                        >
                </div>
                <div class="tablet:pt-10 ">
                    <img 
                        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                        alt=""
                        class="w-20 h-20 rounded-full border-4 shadow-lg object-cover object-center"
                        >
                </div>
                <div class="tablet:pt-10 ">
                    <img 
                        src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                        alt=""
                        class="w-20 h-20 rounded-full border-4 shadow-lg object-cover object-center"
                        >
                </div>
                <div class="tablet:pt-10 ">
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
        name: "FeatureSection"
    }
</script>

<style scoped>
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
</style>