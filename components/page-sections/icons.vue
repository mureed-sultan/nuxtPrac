<template>
  <section class="icons" :class="card.classes">
    <div class="icon-heading" v-html="card.text"></div>
    <div class="icon-image">

      <figure v-for="(item) in card.icons">
        <img :src="'/_nuxt/assets/images/' + item.media.image.filename" alt="">
      </figure>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  card: Object
})


</script>

<style lang="scss" scoped>

</style>