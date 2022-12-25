<template>
    <!-- {{ card[0].description }} -->

    <section class="card-hero-split">
        <div v-for="(cards, index) in card" class="spilit-card">
            <Card :text1="cards.headings[0].text" :text2="cards.headings[1].text" :text3="cards.headings[2].text"
                :textType1="cards.headings[0].heading_type" :textType2="cards.headings[1].heading_type"
                :textType3="cards.headings[2].heading_type" :description="cards.description"
                :image="'splitImg' + index + '.jpg'" />
        </div>
    </section>
    <!-- {{ card[0].headings[2] }} -->
</template>

<script>
import Card from '../global/Card.vue';

export default {
    props: {
        card: Object
    },
    components: { Card }
}
</script>

<style>

</style>