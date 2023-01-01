<template>
  <PageHero v-if="section.type == 'page_hero'" :card="section.card" :text="section.card.description"
    :detail="section.text" />
  <CardPoint v-else-if="section.type == 'card_points'" :card="section.cards" :sec="section"
    :heading="section.heading_text.headings[0]" :type="section.classes" />
  <WhereNext v-else-if="section.type == 'where_to_cards'" :card="section" />
  <CardAndText v-else-if="section.type == 'card_and_text'" :card="section.card" :type="section.classes"
    :text="section.text" />
  <CardHeroSplit v-else-if="section.type == 'card_hero_split'" :card="section.split_cards" />
  <FormatedText v-else-if="section.type == 'formatted_text'" :card="section.text" :type="section.classes" />
  <TabButton v-else-if="section.type == 'tab_buttons'" :card="section" :text="section.text"/>
  <TabContainer v-else-if="section.type=='tab_container'" :card="section"/>
  <Icons v-else-if="section.type == 'icons'" :card="section"/>
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
import FormatedText from './page-sections/FormatedText.vue';
import TabButton from './page-sections/TabButton.vue';
import TabContainer from './page-sections/TabContainer.vue';
import Icons from './page-sections/icons.vue';
export default {
  components: {
    PageHero,
    WhereNext,
    CardAndText,
    CardPoint,
    CardHeroSplit,
    FormatedText,
    TabButton,
    TabContainer,
    Icons
},
  props: {
    section: Object,
    key: Object
  }
}
</script>
