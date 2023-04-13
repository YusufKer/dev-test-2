<template>
    <div class="bg-white">
        <div class="contain flex justify-between items-center py-6 relative">
            <a href="" title="home" class="text-3xl laptop:text-5xl font-bold text-theme-red">LOGO</a>
            <ul class="hidden tablet:flex gap-4 laptop:gap-8 items-center">
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav hover:font-bold">link</a></li>
            </ul>
            <div class="tablet:hidden">
                <div @click="mobileMenuOpen = !mobileMenuOpen" class="flex flex-col gap-2">
                    <div :class="mobileMenuOpen && '-translate-x-4'" class="w-8 h-1 bg-black transition-transform duration-200"></div>
                    <div :class="mobileMenuOpen && '-translate-x-2'" class="w-8 h-1 bg-black transition-transform duration-100"></div>
                    <div class="w-8 h-1 bg-black"></div>
                </div>
            </div>
            <ul @click="mobileMenuOpen = !mobileMenuOpen" :class="mobileMenuOpen ? 'opacity-1' : 'opacity-0'" class="transition-opacity duration-200 tablet:hidden gap-4 laptop:gap-8 items-center absolute top-full right-0 bg-white px-4 py-2 z-50">
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
                <li class="min-w-[60px]"><a href="" title="link" class="text-nav">link</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data(){
            return {
                mobileMenuOpen: false
            }
        }
    }
</script>