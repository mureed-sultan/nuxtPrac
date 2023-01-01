<template>
  <div class="two-cards" :class="card[0].classes">
    <div class="container mx-auto">
      <div class="two-card-inner">
        <div class="card-sect">
          <GlobalCard image="di-adjacent-industry-lg.jpg" :text1="card[0].card.headings[0].text"
            :textType1="card[0].card.headings[0].heading_type" :text2="card[0].card.headings[0].text"
            :textType2="card[0].card.headings[0].heading_type" />
        </div>
        <div class="para" v-html="card[0].text"></div>
        <GlobalIconCard v-for="(item, index) in card[0].cards" :key="index" :image="'/icons/Iconz' + index + '.png'"
          :detail="item.headings[0].text" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  card: Array,
});
</script>
