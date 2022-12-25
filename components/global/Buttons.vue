<template>
  <!-- v-bind:class = "btnType == primary?'yellow':'blue'" -->
  <div class="task_priority" :class="btnType">
    <div class="buttons">
      <a :href="btnLink">{{ btnText }}</a>
    </div>
  </div>
</template>

<script setup>
const buttonsProps = defineProps({
  btnText: String,
  btnLink: String,
  btnType: String,
});
</script>

<style>
.buttons {
  @apply bg-no-repeat flex items-center justify-between relative h-8;
  transition-duration: 500ms;

  &:hover {
    background-position: 90% 50%;

    &::after {
      transition-duration: 500ms;
      transform: translate(5px, 0px);
    }
  }

  &::after {
    transition-duration: 500ms;
    content: ">";
    font-size: 25px;
    @apply relative;
    right: 10px;
  }

  /* background-image: url("~/assets/images/next-arrow.svg"); */
  a {
    @apply bg-no-repeat cursor-pointer font-semibold py-2 px-2 rounded-sm flex items-center w-32;
    @apply relative bottom-0;
  }
}

.task_priority.primary {
  background-color: #f4ca54;

  .buttons {
    color: #3d6179;
  }
}

.task_priority.secondary {
  background-color: #3d6179;

  .buttons {
    color: white;
  }
}

.task_priority.transparnt {
  color: transparent;

  .buttons {
    color: #3d6179;
  }
}
</style>
