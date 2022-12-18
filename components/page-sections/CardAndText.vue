<template>
  <div class="card">
    <figure>
      <img :src="'/_nuxt' + propsGet.image" alt="" />
    </figure>
    <div class="content">
      <h4 class="heading">{{ propsGet.title }}</h4>
      <p class="description">{{ propsGet.text }}</p>
      <div v-if="propsGet.buttonText!= null">
      <GlobalButtons
        :btnText="propsGet.buttonText"
        :link="'https://github.com/stateempire/animted'"
        btnType="transparnt"
      />
      </div>
    </div>
  </div>
</template>

<script setup>
const propsGet = defineProps({
  title: String,
  text: String,
  image: String,
  buttonText: String,
});
</script>

<style scoped>
.card {
  width: min(16rem, 90%);
  position: relative;
  height: max(30rem, auto);
  @apply m-5;
  figure {
    @apply overflow-hidden;
  }
  .content {
    @apply p-5 pt-0;
    .heading {
      color: #3d6179;
      @apply font-semibold my-5 text-center text-2xl;
    }
    .description {
      @apply text-gray-800 text-left mb-10;
    }
  }
}
</style>
