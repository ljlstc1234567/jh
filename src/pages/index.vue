<template>
  <div>
    <!-- <swiper class="myswiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
    <swiper-slide v-if="index.indexOf('banner')!=-1" v-for="(item,index) in goods" :key="index"><img @click="go('/goodsDetail/'+index)" :src="item.cover" alt=""></swiper-slide>
  </swiper> -->
  <h3>新款到店</h3>
  <div class="clearfix waterfall">
    <router-link :to="'/goodsDetail/'+index" v-if="index.indexOf('banner')==-1&&index.replace('id','')<7" v-for="(item,index) in goods"  :key="index">
    <goodsCard  :src="item.cover" :name="item.goodsInfo.goodsName"></goodsCard>
    </router-link>
  </div>
  <h3>每日特惠</h3>
  <div class="clearfix waterfall">
    <router-link :to="'/goodsDetail/'+index" v-if="index.indexOf('banner')==-1&&index.replace('id','')>6" v-for="(item,index) in goods"  :key="index">
    <goodsCard  :src="item.cover" :name="item.goodsInfo.goodsName"></goodsCard>
    </router-link>
  </div>
  <div class="map">
     <img src="../../static/imgs/onecode.png" alt="" /> 
      <div>店铺地址：<br />北京市丰台区南苑路15号</div>
      
  </div>
  </div>
  
</template>
<script>
import 'swiper/dist/css/swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import goodsCard from '@/components/goodsCard'
import goods from '../../data/goods.json'
export default {
  data() {
    return {
      swiperOption: {
        loop:true,
         autoplay: {
          delay:5000
         }
        },
      goods:goods
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
  beforeCreate() {},
  methods:{
    go(url){
      this.$router.push({ path: url })
    }
  }
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
.waterfall{
  -webkit-column-count: 2;
  -moz-column-count: 2;
  column-count: 2;
  -moz-column-gap:10px;
  -webkit-column-gap:10px;
  column-gap:10px;
  padding: 10px;
  a{
    display: block;
    img{
      width: 100%;
    }
  }
}
.map{
  border-top:1px dotted #ccc;
  padding:10px;
  display:flex;
  display:-webkit-flex;
  div{
    text-align:left;
    flex: 1;
    -webkit-flex: 1;
  }

  img{
    width:100px;
    height:100px;
    margin-right:20px;
  }
}
</style>
