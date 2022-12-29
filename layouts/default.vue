<template>
<the-header/>
<LoadingBar :duration="1000" />

    <slot />
</template>

<style>
.router-link-exact-active {
    color: rebeccapurple;
}
</style>