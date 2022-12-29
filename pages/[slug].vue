<template>
  <main :class="page_id">
    <PageSection v-for="(section, i) in page.sections" :section="section" :key="i" />
  </main>
</template>

<script setup>
import { getPage } from '~/scripts/entities/pages.js';
const route = useRoute();
const props = defineProps({
  page_id:String,
  sections:Array
})
let page = await getPage(route.params.slug)

// console.log(page)
</script>
