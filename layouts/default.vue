<template>
    <the-header />
    <LoadingBar :duration="1000" />
    <slot />
    <TheFooter />
</template>

<style>
.router-link-exact-active {
    @apply relative;
    padding-bottom: 3px;
    border-bottom: 1px solid white;
}
</style>