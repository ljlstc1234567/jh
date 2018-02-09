<template>
  <div>
    <swiper class="myswiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
    <!-- slides -->
    <swiper-slide><img src="http://www.jh-buy.com/appTpls/app/wapindex/banner/1/img/6fa518ff4fed11b705e53d45d2ce51ac.jpg?0.3154167084707382" alt=""></swiper-slide>
    <swiper-slide><img src="http://www.jh-buy.com/appTpls/app/wapindex/banner/1/img/51cc1fe2482aab10aaf40190bc8f5549.jpg?0.10799478418561459" alt=""></swiper-slide>
    <!-- Optional controls -->
  </swiper>
  </div>
</template>
<script>
  import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data() {
    return {
      swiperOption: {
        loop:true,
         autoplay: {
          delay:3000
         }
        }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
  created() {
    setTimeout(() => { this.$progress.hide() }, 0);
  },
  beforeCreate() {}
};

</script>
<style lang="less" scoped>
.myswiper{
  img{
    width: 100%;
  }
}
</style>
