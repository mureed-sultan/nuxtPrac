<template>
  <section class="card-point" :class="type ? type : 'light'">
    <h1>
      <ColouredHeading :text="heading.text" :type="heading.heading_type" />
    </h1>
    <div class="top-para" v-if="toppara" v-html="toppara"></div>
    <div class="card-section">

      <div class="swiper">
        <div class="swiper-wrapper">
          <div v-for="(item, i) in card" :key="i" class="swiper-slide" :class="`slide--${i}`">
            <div class="slider-content">
              <IconCard :image="'/cardpoint/cardpoint' + i + '.jpg'" :detail="item.description"
                :heading="item.headings" />

            </div>
          </div>
        </div>
        <!-- <div class="swiper-pagination"></div> -->

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
    <div v-if="detail" class="para" v-html="htmlCode"></div>
  </section>
  <!-- {{ sec }} -->
</template>

<script>
import ColouredHeading from '../global/ColouredHeading.vue';
import IconCard from '../global/IconCard.vue';
import { Swiper, Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'MyComponent',
  props: {
    card: Object,
    heading: Object,
    type: String,
    toppara: String,
    detail: String,
    main: Object,
    sec: Object
  },
  components: { IconCard, ColouredHeading },

  data() {
    return {
      htmlCode: this.detail,
      topPara: this.toppara
    };
  },
  mounted() {
    Swiper.use([Navigation, Pagination, Autoplay])
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        }, 900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        }, 1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
      },

      direction: 'horizontal',
      loop: true,
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      // autoplay: {
      //   delay: 3000
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
  }
}

</script>
<style>
.swiper {
  @apply static;
  width: 90vw;
  height: 100%;
}

.swiper-slide {
  height: auto !important;
  text-align: center;
}

.slider-content {
  height: 100% !important;
}
</style>