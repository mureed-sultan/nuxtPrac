<template>
    <section class="where-next">
    <div v-for="(items) in card.linked_cards">
    <Card v-if="items.title=='worker-card'" 
    text="I am a Skilled Worker" 
    detail="Defence Industry needs you. Find out more about in-demand jobs and training opportunities." link="https://stateempire.com" image="footer_home_imaskilledworker.jpg"/>
    
    <!-- <Card :text="items.title"/> -->
    </div>
    <!-- {{ card.linked_cards[0].title }} -->
    </section>
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

<style lang="scss" scoped>

</style>