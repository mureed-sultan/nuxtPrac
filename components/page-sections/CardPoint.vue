<template>
    <section class="card-point" :class="type">
        <h1>{{ heading }}</h1>
        <div class="card-section">

            <div class="icon-cards" v-for="(item, index) in card" :key="index">
                <IconCard :indexs="'icon' + index + '.png'" :detail="item.description" :heading="item.headings" />
            </div>
        </div>
    </section>
</template>

<script>
import IconCard from '../global/IconCard.vue';

export default {
    props: {
        card: Object,
        heading: String,
        type: String
    },
    components: { IconCard }
}

</script>