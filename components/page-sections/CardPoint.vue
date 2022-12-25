<template>
    <section class="card-point" :class="type">
        <h1>
            <ColouredHeading :text="heading.text" :type="heading.heading_type" />
        </h1>
        <div class="top-para" v-if="toppara" v-html="toppara"></div>
        <div class="card-section">
            <div class="icon-cards" v-for="(item, index) in card">
                <IconCard :image="'/cardpoint/cardpoint' + index + '.jpg'" :detail="item.description"
                :heading="item.headings" />
            </div>
        </div>
        <div v-if="detail" class="para" v-html="htmlCode"></div>
    </section>
</template>

<script>
import ColouredHeading from '../global/ColouredHeading.vue';
import IconCard from '../global/IconCard.vue';

export default {
    props: {
        card: Object,
        heading: String,
        type: String,
        toppara: String,
        detail:String
    },
    components: { IconCard, ColouredHeading },
    data() {
        return {
            htmlCode: this.detail,
            topPara:this.toppara
        };
    },
}

</script>