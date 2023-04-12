<template>
    <div>
        <img 
            src="https://media.istockphoto.com/id/1353379172/photo/cute-little-african-american-girl-looking-at-camera.jpg?s=612x612&w=0&k=20&c=RCOYytwS2nMGfEb80oyeiCcIiqMQu6wnTluAaxMBye4=" 
            alt=""
            class="w-full aspect-square object-cover object-center rounded-full border-8 border-white shadow-custom"
            >
            <p class="text-center uppercase font-bold text-h4 pt-4 pb-2">Lorem Ipsum</p>
            <p class="text-center leading-none text-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quidem, magnam ea ipsum nostrum earum libero, temporibus omnis repellendus</p>
    </div>
</template>

<script>
    export default {
        name: "ArticleCard"
    }
</script>

<style scoped>
    .shadow-custom{
        box-shadow: -3px 2px 31px 8px rgba(115,112,112,0.4);
        -webkit-box-shadow: -3px 2px 31px 8px rgba(115,112,112,0.4);
        -moz-box-shadow: -3px 2px 31px 8px rgba(115,112,112,0.4);
    }
</style>