<template>
  <div class="button">
    <a href="">{{ btnText }}</a>
  </div>
</template>

<script setup>
const buttonProps = defineProps({
  btnText: String,
  buttonText: String,
});
</script>

<style scoped lang="postcss">
.button {
  @apply w-full bg-no-repeat;
  color: #3d6179;
  background-position: 85% 50%;
  background-size: 10px;
  transition-duration: 500ms;
  &:hover {
    background-position: 90% 50%;
  }
  background-image: url("~/assets/images/next-arrow.svg");
  a {
    @apply bg-no-repeat cursor-pointer text-lg font-semibold inline-block;
    @apply p-1 relative bottom-0;
  }
}
</style>
