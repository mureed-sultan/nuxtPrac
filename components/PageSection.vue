<template>

  <div v-if="section.type == 'card-hero-split'">
    <p>This is test{{ section }}</p>
  </div>
  <!-- page hero  -->
  <PageHero v-if="section.type == 'page_hero'" :card="section.card" :text="section.card.description" />
  <!-- where to next section  -->
  <WhereNext v-else-if="section.type == 'where_to_cards'" :card="section" />
  <!-- card and text section  -->
  <CardAndText v-else-if="section.type == 'card_and_text' & section.classes == 'light'" :card="section.card"
    :type="section.classes" :text="section.text" />
  <!-- card points sec  -->
  <CardPoint v-else-if="section.type == 'card_points' & section.classes == 'dark'" :card="section.cards"
    :heading="section.heading_text.headings[0].text"
    :type="section.classes"
    />
    <!-- card hero split section  -->
<CardHeroSplit v-else-if="section.type=='card_hero_split'"/>
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
import CardHeroSplit from './page-sections/CardHeroSplit.vue'
export default {
  components: {
    PageHero,
    WhereNext,
    CardAndText,
    CardPoint,
    CardHeroSplit
  },
  props: {
    section: Object,
    key: Object
  }
}
</script>
