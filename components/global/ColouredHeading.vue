<template>
<span :class="type">{{ text }}</span>
</template>

<script>
export default {
  props:{
    text:String,
    type:String
  }
}
</script>
<style>
.primary{
  background-color: var(--yellow);
  color: var(--blue);
  @apply p-1;
}
.secondary{
  background-color: var(--blue);
  color: white;
  @apply p-1;
}
</style>
