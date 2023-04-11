<template>
    <ul class="contain flex justify-end gap-10 bg-gray-300 py-4">
        <li class="h-5 w-5"><a href="" target="_blank" title="facebook" class="w-4 h-4 hover:w-5 hover:h-5 block socials facebook"></a></li>
        <li class="h-5 w-5"><a href="" target="_blank" title="twitter" class="w-4 h-4 hover:w-5 hover:h-5 block socials twitter"></a></li>
        <li class="h-5 w-5"><a href="" target="_blank" title="linkedin" class="w-4 h-4 hover:w-5 hover:h-5 block socials linkedin"></a></li>
        <li class="h-5 w-5"><a href="" target="_blank" title="instagram" class="w-4 h-4 hover:w-5 hover:h-5 block socials instagram"></a></li>
    </ul>
</template>

<script>
    export default {
        name: "SocialBar"
    }
</script>

<style scoped>
    .socials{
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
    .facebook{
        background-image: url("../assets/socials/logo_facebook.png");
    }
    .twitter{
        background-image: url("../assets/socials/logo_twitter.png");
    }
    .linkedin{
        background-image: url("../assets/socials/logo_linkedin.png");
    }
    .instagram{
        background-image: url("../assets/socials/logo_instagram.png");
    }
</style>