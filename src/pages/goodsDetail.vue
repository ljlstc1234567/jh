<template>
  <div>
    <swiper class="myswiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in banner" :key="index"><img :src="item" alt=""></swiper-slide>
      <!-- Optional controls -->
    </swiper>
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
        loop: true,
        autoplay: {
          delay: 3000
        }
      },
      banner:[],
      goodsInfo:{}
    }
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {},
  beforeCreate() {
  	//获取banner信息
    this.$model.getImg({ imgType: 'appMain', goodsId: this.$route.params.id }).then(data => {
      this.banner = data.dataset.path ;
    });
    //获取商品基本信息
    this.$model.goodsInfo({optCode:'get', goodsId: this.$route.params.id }).then(data => {
      //this.banner = data.dataset.path ;
      this.goodsInfo = data.dataset ;
    });
    
  }
};

</script>
<style lang="less" scoped>
@import "../../static/variables.less";
.myswiper {
  img {
    width: 100%;
  }
}

</style>
