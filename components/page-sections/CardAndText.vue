<template>
  <div class="card-and-text" :class="type">
    <GlobalCard image="image_agrowingworkfoce.jpg" 
    :text1="card.headings[0].text" 
    :text2="card.headings[1].text"
    :textType1="card.headings[0].heading_type" 
    :textType2="card.headings[1].heading_type" />
    <div class="text-section">
      <div v-html="htmlCode"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    text: String,
    type:String
  },
  data() {
    return {
      htmlCode: this.text,
    };
  },
}
</script>