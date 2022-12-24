<template>
  <div class="card">
    <figure>
    <img :src="'/_nuxt/assets/images/' + image" alt="">
    </figure>
    <div class="content">
    <div class="heading">
    <ColouredHeading :text="text" type="secondary"/>
    </div>
    </div>
  </div>
</template>

<script>
import ColouredHeading from './ColouredHeading.vue';

let a = 'footer_home_imaskilledworker.jpg'
export default {
    props: {
        text: String,
        detail: String,
        link: String,
        image: String
    },
    components: { ColouredHeading }
}

</script>

<style lang="scss" scoped>

</style>