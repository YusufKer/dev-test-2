<template>
    <footer class="bg-gray-900 py-8 tablet:py-10 laptop:py-20">
        <div class="contain footer-grid grid gap-4 tablet:grid-cols-2">
            <!-- column 1 -->
            <div>
                <p class="text-h3 text-white uppercase font-bold laptop:h-10 mb-4">our mission</p>
                <p class="text-p text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, libero sint! Porro, recusandae. Nulla, quam aliquid? Enim sunt quo voluptates excepturi aliquam necessitatibus reprehenderit soluta eum porro praesentium! Possimus, voluptatibus!</p>
                <p class="text-p text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, libero sint! Porro, recusandae. Nulla, quam aliquid? Enim sunt quo voluptates excepturi aliquam necessitatibus.</p>
            </div>
            <!-- column 2 -->
            <div>
                <p class="text-h4 text-white uppercase laptop:h-10 mb-4">Quick links</p>
                <ul>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                    <li><a href="" title="link" class="flex items-center gap-2 text-p text-white"><span class="right-arrow block w-4 h-4 rounded-full bg-white"></span><span>link</span></a></li>
                </ul>
            </div>
            <!-- column 3 -->
            <div>
                <p class="text-h4 text-white uppercase laptop:h-10 mb-4">Gallery</p>
                <div class="gallery-peview grid w-fit gap-2">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                    <img src="" alt="" class="w-20 h-20 bg-red">
                </div>
            </div>
            <!-- column 4 -->
            <div>
                <p class="text-h4 text-white uppercase laptop:h-10 mb-4">Contact us</p>
                <div class="flex gap-2 border-b border-white border-dashed pb-6 pt-2">
                    <div class="contact-icon location w-10 h-10 bg-theme-red rounded-full flex-shrink-0"></div>
                    <div>
                        <p class="text-p font-bold text-theme-red">Head Office</p>
                        <p class="text-p text-white">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="flex gap-2 border-b border-white border-dashed pb-6 pt-2">
                    <div class="contact-icon phone w-10 h-10 bg-theme-red rounded-full flex-shrink-0"></div>
                    <div>
                        <p class="text-p font-bold text-theme-red">Head Office</p>
                        <p class="text-p text-white">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
                <div class="flex gap-2 pb-6 pt-2">
                    <div class="contact-icon mail w-10 h-10 bg-theme-red rounded-full flex-shrink-0"></div>
                    <div>
                        <p class="text-p font-bold text-theme-red">Head Office</p>
                        <p class="text-p text-white">Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <!-- copywrite -->
            <p class="col-span-full text-p text-white text-center py-10">Copyright blah blah</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "FooterSection"
    }
</script>

<style scoped>

    .right-arrow{
        background-image: url("../assets/theme/ico_right-arrow.png");
        background-size: 10px;
        background-repeat: no-repeat;
        background-position: center;
    }

    @media (min-width:640px){
        .footer-grid{
            grid-template-columns: 1fr auto;
        }
    }
    @media (min-width:1024px){
        .footer-grid{
            grid-template-columns: 1fr auto auto 1fr;
        }
    }
    .gallery-peview{
        grid-template-columns: auto auto;
    }
    .contact-icon{
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px;
    }
    .contact-icon.location{
        background-image: url("../assets/theme/ico_location.png");
    }
    .contact-icon.phone{
        background-image: url("../assets/theme/ico_phone-white.png");
    }
    .contact-icon.mail{
        background-image: url("../assets/theme/ico_mail-white.png");
    }
</style>