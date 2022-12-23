<template>
  <PageHero v-if="section.type=='page_hero'" :card="section.card" :text="section.text" />
  <div v-else>
    <h1>
      {{ section.type }}
    </h1>
  </div>
</template>

<script>
import PageHero from './page-sections/PageHero.vue'

export default {
  components: {
    PageHero,
  },
  props: {
    section: Object,
  }
}
</script>
