<template>
    <section class="where-next">
        <div class="card-container" v-for="(items, index) in result">
            <GlobalCard :text1="items.card.headings[0].text" :text2="items.card.headings[1].text"
                :textType1="items.card.headings[0].heading_type" :textType2="items.card.headings[1].heading_type"
                detail="Defence Industry needs you. Find out more about in-demand jobs and training opportunities."
                :link="items.card.cta_link.url" image="footer_home_imaskilledworker.jpg" btnText="Learn more" />
        </div>
    </section>
</template>

<script setup>
import { getLinkCards } from '~~/scripts/entities/link-cards';
const props = defineProps({
    card: Object
});
let result = await getLinkCards()
</script>