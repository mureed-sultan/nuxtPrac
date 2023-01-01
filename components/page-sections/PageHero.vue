<template>

  <section class="pagehero">
    <figure>
      <img :src="'/_nuxt/static/' + card.media.image.uri.url.slice(21)" />
    </figure>
    <div class="content">
      <div class="heading">
        <GlobalColouredHeading v-for="(data) in card.headings" :type="data.heading_type" :text="data.text" />
      </div>
      <div class="description" v-if="text">
        <p>
          {{ text.replace(/(<([^>]+)>)/ig, '') }}
        </p>
      </div>
    </div>
    <div v-if="detail" class="details" v-html="htmlCode"></div>
  </section>
</template>

<script>
export default {
  props: {
    card: Object,
    text: String,
    detail: String
  },
  data() {
    return {
      htmlCode: this.detail,
    };
  },
}

</script>
