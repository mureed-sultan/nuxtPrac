<template>
    <div class="icons-card" >
        <figure>
            <img :src="'/_nuxt/assets/images' + image" alt="">
        </figure>
        <div class="content">
            <div class="heading">
                <ColouredHeading v-for="(item) in heading" :text="item.text" :type="item.heading_type" />
            </div>
            <div class="icon-text" v-if="detail" v-html="htmlCode"></div>
        </div>
        <GlobalButtons v-if="cardButton" :btnText="cardButton.text" />
    </div>

</template>


<script>
import ColouredHeading from './ColouredHeading.vue';

export default {
    props: {
        detail: String,
        heading: Object,
        image: String,
        cardButton:Object
    },
    components: { ColouredHeading },
    data() {
        return {
            htmlCode: this.detail,
        };
    },
}

</script>