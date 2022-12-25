<template>
  <div class="card">
    <figure>
      <img :src="'/_nuxt/assets/images/' + image" alt="">
    </figure>
    <div class="heading">
      <ColouredHeading :text="text1" :type="textType1" />
      <ColouredHeading :text="text2" :type="textType2" />
    </div>
    <div v-if="detail" class="details">
      {{ detail }}
    </div>
    <div v-if="link" class="btn-primary">
      <GlobalButtons btn-text="Learn More" :btnLink="link" btn-type="primary" />
    </div>
  </div>
</template>

<script>
import ColouredHeading from './ColouredHeading.vue';

let a = 'footer_home_imaskilledworker.jpg'
export default {
  props: {
    text1: String,
    text2: String,
    detail: String,
    link: String,
    image: String,
    textType1:String,
    textType2:String
  },
  components: { ColouredHeading }
}

</script>