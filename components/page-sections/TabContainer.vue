<template>
    <section class="tab-container light">
        <PageSectionsCardTwoColumn v-if="tabs == 0" :card="card.tab_sections[0].sections" />
        <PageSectionsCardPoint v-else-if="tabs == 1" :card="card.tab_sections[1].sections[0].cards"
            :sec="card.tab_sections[1].sections[0]" :heading="card.tab_sections[1].sections[0].heading_text.headings[0]"
            :type="card.tab_sections[1].sections[0].classes"
            :toppara="card.tab_sections[1].sections[0].heading_text.text" />
        <PageSectionsCardPoint v-else-if="tabs == 2" :card="card.tab_sections[2].sections[0].cards"
            :sec="card.tab_sections[2].sections[0]" :heading="card.tab_sections[2].sections[0].heading_text.headings[0]"
            :type="card.tab_sections[2].sections[0].classes"
            :toppara="card.tab_sections[2].sections[0].heading_text.text" />



        <!-- <p v-else-if="tabs==1">{{ card.tab_sections[1].sections[0].heading_text.text }}</p> -->
    </section>
</template>

<script setup>
const tabs = useTab()

let prop = defineProps({
    card: Object
})
// function everyTime() {
// console.log(tabs.value);
// }

// setInterval(everyTime, 1000);


</script>

<style lang="scss" scoped>

</style>