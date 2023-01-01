<template>
    <div class="icons-card">
        <figure>
            <img :src="'/_nuxt/assets/images' + image" alt="">
        </figure>
        <div class="content">
            <div class="heading">
                <ColouredHeading v-for="(item) in heading" :text="item.text" :type="item.heading_type" />

            </div>
            <div class="icon-text" v-if="detail" v-html="htmlCode"></div>
        </div>
    </div>

</template>


<script>
import ColouredHeading from './ColouredHeading.vue';

export default {
    props: {
        detail: String,
        heading: Object,
        image: String
    },
    components: { ColouredHeading },
    data() {
        return {
            htmlCode: this.detail,
        };
    },
}

</script>