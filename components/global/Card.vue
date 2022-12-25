<template>
  <div class="card">
    <figure>
      <img :src="'/_nuxt/assets/images/' + image" alt="">
    </figure>
    <div class="content">

      <div class="heading">
        <ColouredHeading :text="text1" :type="textType1" />
        <ColouredHeading :text="text2" :type="textType2" />
        <ColouredHeading v-if="text3" :text="text3" :type="textType3" />
      </div>
      <div v-if="detail" class="details">
        {{ detail }}
      </div>
      <div v-if="description" class="description" v-html="htmlCode"></div>
      <div v-if="link" class="btn-primary">
        <GlobalButtons btn-text="Learn More" :btnLink="link" btn-type="primary" />
      </div>
    </div>
  </div>
</template>

<script>
import ColouredHeading from './ColouredHeading.vue';

export default {
  props: {
    text1: String,
    text2: String,
    text3: String,
    detail: String,
    description: String,
    link: String,
    image: String,
    textType1: String,
    textType2: String,
    textType3: String,
  },
  components: { ColouredHeading },
  data() {
    return {
      htmlCode: this.description,
    };
  },
}

</script>