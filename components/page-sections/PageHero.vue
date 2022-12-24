<template>
  <section class="pagehero" :style="backImage">
      <figure>
        <!-- <img :src="'/_nuxt/static/' +card.media.image.uri.url.slice(21) " />       -->
      </figure>
      <div class="content">
      <div class="heading">
          <GlobalColouredHeading v-for="(data) in card.headings" :type="data.heading_type" :text="data.text" />
        </div>
        <div class="description">
          <p>
            {{ text.replace(/(<([^>]+)>)/ig, '') }}
          </p>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
    text: String
  },
  computed:{
    backImage(){
      return{
        backgroundImage: 'url(/_nuxt/static/' + this.card.media.image.uri.url.slice(21) + ')'
      }
    }
  }
}
let wid = 500
</script>

