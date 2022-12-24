<template>
  <PageHero v-if="section.type=='page_hero'" :card="section.card" :text="section.card.description" />
  <WhereNext v-if="section.type=='where_to_cards'" :card="section"/>
  <div v-if="section.type=='where_to_cards'">
<!-- {{ section }} -->
  </div>
  <!-- <div v-else>
    <h1>
      {{ section }}
    </h1>
  </div> -->
</template>

<script>
import PageHero from './page-sections/PageHero.vue'
import WhereNext from './page-sections/WhereNext.vue';

export default {
  components: {
    PageHero,
    WhereNext
},
  props: {
    section: Object,
  }
}
</script>
