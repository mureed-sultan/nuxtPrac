<template>
  <main :class="page_id">
    <PageSection v-for="(section, i) in page.sections" :section="section" :key="i" />
  </main>
</template>

<!-- <script>
import { getPage } from '~/scripts/entities/pages.js';
export default defineComponent({
  props: {
    page_id: String,
    sections: Array,
  },
  async setup() {
    return await getPage('home');
  },
})
</script> -->

<script setup>
import { getPage } from '~/scripts/entities/pages.js';
const props = defineProps({
  page_id:String,
  sections:Array
})
let page = await getPage('home')
// console.log(page , getPage)
</script>