<template>
    <section class="formated-text" :class="type">
        <div class="container mx-auto">
            <div v-html="card"></div>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({
    card: String,
    type: String
})

</script>