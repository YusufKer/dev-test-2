<template>
    <div class="contain bg-gray-100 py-10">
        <h2 class="text-center">WHAT PEOPLE SAY</h2>
        <div class="quote bg-white rounded-3xl p-6">
            <p class="w-fit">test</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia alias harum in beatae quaerat autem rem ducimus numquam repellat velit voluptates commodi reprehenderit, vitae corrupti. Eum tempore enim commodi molestiae!</p>
            <p class="text-center col-span-2 text-red-600 font-bold">Lorem Ipsum <span class="text-black">| NGO</span></p>
        </div>
        <div class="w-fit m-auto flex gap-4">
            <div class="bg-white pt-10">
                <img 
                    src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                    alt=""
                    class="w-10 h-10 rounded-full border-4 shadow-lg"
                    >
            </div>
            <div class="bg-white pt-10">
                <img 
                    src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                    alt=""
                    class="w-10 h-10 rounded-full border-4 shadow-lg"
                    >
            </div>
            <div class="bg-white pt-10">
                <img 
                    src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                    alt=""
                    class="w-10 h-10 rounded-full border-4 shadow-lg"
                    >
            </div>
            <div class="bg-white pt-10">
                <img 
                    src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                    alt=""
                    class="w-10 h-10 rounded-full border-4 shadow-lg"
                    >
            </div>
            <div class="bg-white pt-10">
                <img 
                    src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                    alt=""
                    class="w-10 h-10 rounded-full border-4 shadow-lg"
                    >
            </div>
        </div>
        <!-- CTA -->

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
</style>