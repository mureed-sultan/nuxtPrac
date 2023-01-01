<template>
    <section class="tab-button">
        <div class="container mx-auto w-10/12">
            <div class="tab-button-text">
                <GlobalColouredHeading :text="card.headings[0].text" :type="card.headings[0].heading_type" />
                <div v-html="text"></div>
            </div>
            <div class="tab-buttons">
                <div class="tab-button-inner" v-for="(text, index) in card.buttons" :key="index">
                    <button :class="index == tabs ? 'act' : ''" @click="tabs = index">{{ text }}
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const tabs = useTab()
let props = defineProps({
    card: Object,
    text: String
})


</script>

<style scoped>

.act{
    border: 1px solid white;
    border-bottom: 3px solid white;
    padding: 2px 4px;
    border-radius: 5px;
}

</style>