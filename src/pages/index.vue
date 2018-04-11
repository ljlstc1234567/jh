<template>
  <div>
    <swiper class="myswiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
    <!-- slides -->
    <swiper-slide><img src="http://www.jh-buy.com/appTpls/app/wapindex/banner/1/img/6fa518ff4fed11b705e53d45d2ce51ac.jpg?0.3154167084707382" alt=""></swiper-slide>
    <swiper-slide><img src="http://www.jh-buy.com/appTpls/app/wapindex/banner/1/img/51cc1fe2482aab10aaf40190bc8f5549.jpg?0.10799478418561459" alt=""></swiper-slide>
    <!-- Optional controls -->
  </swiper>
  <h3>羊绒外套<router-link to="/">更多></router-link></h3>
  <div>
    <goodsCard></goodsCard>
    <goodsCard></goodsCard>
    <goodsCard></goodsCard>
  </div>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import goodsCard from '@/components/goodsCard'
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
    swiperSlide,
    goodsCard
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
@import "../../static/variables.less";
.myswiper{
  img{
    width: 100%;
  }
}
.module{
  display: flex;
  display: -webkit-flex;
  text-align: center;
  a{
    flex-basis: 25%;
    padding: 10px;

    font-size: 14px;
    color: #555;
    i{
      box-sizing: content-box;
      -webkit-box-sizing: content-box;
      .bgreset();
      padding-top: 100%;
      display: block;
    }
    .icon1{
      background-image: url('../../static/imgs/80s.png')
    }
    .icon2{
      background-image: url('../../static/imgs/90s.png')
    }
  }
}
h3{
  padding:10px;
  font-weight: normal;
  text-align: left;
  color:@main-color;
  a{
    display:inline-block;
    padding:3px 0 0 20px;
    float:right;
    color:#888;
    font-size:14px;
  }
}
</style>
