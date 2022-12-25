<template>
  <main :class="page_id">
    <PageSection v-for="(section, i) in sections" :section="section" :key="i" />
  </main>
</template>

<script>
import { getPage } from '~/scripts/entities/pages.js';

export default defineComponent({
  props: {
    page_id: String,
    sections: Array,
  },
  async setup() {
    return await getPage('about');
  }
})
</script>
