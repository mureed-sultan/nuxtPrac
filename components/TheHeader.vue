<template>
    <section class="header">
        <header>
            <button @click="menuToogle" class="menu-button" :class="isActive && 'crossActive'">
            </button>
            <div class="logo">
                <NuxtLink to="/">
                    <img src="~/assets/images/logo-white-defence-augov-consolidated.svg" alt="">
                </NuxtLink>
            </div>
            <div class="menu-container">
                <div class="menu" :class="isActive && 'block' || 'hidden'">
                    <ul>
                        <li><nuxt-link to="/about">About Defence Industry</nuxt-link>
                        </li>
                        <li><nuxt-link to="/students">For students</nuxt-link>
                        </li>
                        <li><nuxt-link to="/workers">For workers</nuxt-link>
                        </li>
                        <li><nuxt-link to="/businesses">For Business</nuxt-link>
                        </li>
                        <li><nuxt-link to="/contact">Contact Us</nuxt-link></li>
                    </ul>
                </div>
            </div>
        </header>
    </section>
</template>

<script setup>
let isActive = ref(false);
const menuToogle = () => {
    isActive.value = !isActive.value

}
</script>