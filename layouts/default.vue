<template>
    <!-- <div> -->
        <!-- <header>
        <div class="logo">THIS IS LOGO</div>
        <ul>
        <li><NuxtLink to="/">Homepage</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/services/andoid">Android</NuxtLink></li>
        <li><NuxtLink to="/services/web">Website</NuxtLink></li>
        
        </ul>
        </header>
        <div> -->
        <slot/>
    <!-- </div> -->
</template>

<style>
header{
@apply flex justify-between;
}
.router-link-exact-active{
    color: rebeccapurple;
}
</style>