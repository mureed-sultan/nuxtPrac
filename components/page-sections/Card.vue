<template>
  <div class="card">
    <figure>
      <img :src="propGet.image" alt="" />
    </figure>
      <div class="content">
      <p>{{propGet.heading1}}</p>
      <p>{{propGet.heading2}}</p>
      <p>{{propGet.heading3}}</p>
      </div>
  </div>
</template>

<script setup>
const propGet = defineProps({
    image:String,
    heading1:String,
    heading2:String,
    heading3:String,
})
</script>

<style scoped>
.card{
    @apply h-full relative m-5;
    width: max(30rem);
    figure{
        @apply w-11/12 float-right h-full;   
    } 
    .content{
        /* @apply bg-green-300; */
        @apply absolute bottom-2;
        @screen md{
            @apply bottom-5;
        };
        @apply flex flex-col;
        p{
            background: #F4CA54;
            color:#375C79;
            width:fit-content;
            @apply p-1 m-1 text-sm font-bold ;
            @screen lg{
                @apply text-xl m-2;
            }
            @screen md{
                @apply p-2 m-1 text-lg font-bold;
            }

        }
    }
}

</style>
