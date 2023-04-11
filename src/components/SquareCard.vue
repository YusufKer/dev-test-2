<template>
    <div class="bg-blue-200">
        <div class="aspect-video bg-red-50 relative">
            <img 
                src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
                alt=""
            >
            <div class="bg-blue-500 w-[90%] h-10 absolute bottom-0 translate-y-1/2"></div>
        </div>
        <div class="py-10 px-4">
            <div class="flex justify-between">
                <p>Raised: $300.00</p>
                <p>Goal: $800.00</p>
            </div>
            <p class="text-center w-3/4 m-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <button class="bg-red-500">Donate Now</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SquareCard"
    }
</script>