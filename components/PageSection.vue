<template>
  <!-- <div v-if="section.type == 'card_and_text'">
    <p>This is test{{ section.classes }}</p>
  </div> -->
  <PageHero v-if="section.type == 'page_hero'" :card="section.card" :text="section.card.description" />
  <WhereNext v-else-if="section.type == 'where_to_cards'" :card="section" />
  <CardAndText v-else-if="section.type == 'card_and_text' & section.classes == 'light'" :card="section.card"
    :type="section.classes" :text="section.text" />
<CardPoint v-else-if="section.type=='card_points' & "/>
  <div v-else>
    <h1>
      {{ section.type }}
    </h1>
  </div>
</template>

<script>
import CardAndText from './page-sections/CardAndText.vue';
import CardPoint from './page-sections/CardPoint.vue';
import PageHero from './page-sections/PageHero.vue'
import WhereNext from './page-sections/WhereNext.vue';

export default {
  components: {
    PageHero,
    WhereNext,
    CardAndText,
    CardPoint
},
  props: {
    section: Object,
    key: Object
  }
}
</script>
