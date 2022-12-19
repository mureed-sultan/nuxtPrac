<template>
  <!-- v-bind:class = "btnType == primary?'yellow':'blue'" -->
  <div class="task_priority" :class="btnType">
    <div class="button">
      <a :href="btnLink">{{ btnText }}</a>
    </div>
  </div>
  <!-- <div class="task_priority" :class="btnType">Hellow</div>
  </div> -->
</template>

<script setup>
const buttonProps = defineProps({
  btnText: String,
  btnLink: String,
  btnType: String,
});
</script>

<style>
.button {
  @apply w-full bg-no-repeat flex justify-between relative;
  transition-duration: 500ms;

  &:hover {
    background-position: 90% 50%;
    &::after {
      transition-duration: 500ms;
      transform: translate(20px, 0px);
    }
  }
  &::after {
    transition-duration: 500ms;

    content: ">";
    font-size: 45px;
    @apply relative;
    right: 30px;
  }
  /* background-image: url("~/assets/images/next-arrow.svg"); */
  a {
    @apply bg-no-repeat cursor-pointer font-semibold px-8 py-2 rounded-sm flex items-center w-full;
    @apply relative bottom-0;
  }
}
.task_priority.primary {
  background-color: #f4ca54;
  .button {
    color: #3d6179;
  }
}
.task_priority.secondary {
  background-color: #3d6179;
  .button {
    color: white;
  }
}
.task_priority.transparnt {
  color: transparent;
  .button {
    color: #3d6179;
  }
}
</style>
