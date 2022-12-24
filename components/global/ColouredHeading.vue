<template>
<span :class="type">{{ text }}</span>
    <!-- <p>{{ type }}</p>
    <p>{{ text }}</p> -->
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
}
.secondary{
  background-color: var(--blue);
  color: white;
}
</style>
