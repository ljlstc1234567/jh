<template>
  <div style="padding-bottom: 60px;">
    <swiper class="myswiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in banner" :key="index"><img :src="item" alt=""></swiper-slide>
      <!-- Optional controls -->
    </swiper>
    <div class="goods-header">
    	<div class="title"><span v-if="goodsInfo.isJhSelf==1">[自营]</span>{{goodsInfo.goodsName}}</div>
    	<a href="javascript:;" class="goods-favirate"><i></i></a>
    </div>
    <h2 class="goods-price">￥{{goodsInfo.goodsPrice}}</h2>
	<flexbox class="goods-sale">
      <flexbox-item><span>编码&nbsp;:</span>{{goodsInfo.goodsSn}}</flexbox-item>
      <flexbox-item><span>销量&nbsp;:</span>{{goodsInfo.sellCount}}件</flexbox-item>
    </flexbox>
    <group >
      <cell-box is-link class="goods-select">
        选择商品:点击选择商品规格
      </cell-box>
    </group>
    <pre class="detail" v-html="goodsDetail"></pre>
  </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import goodsCard from '@/components/goodsCard'
import { Group, Cell, CellBox,Flexbox ,FlexboxItem } from 'vux'
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
      goodsInfo:{},
      goodsDetail:""
    }
  },
  components: {
    swiper,
    swiperSlide,
    Group,
    Cell,
    CellBox,
    Flexbox,
    FlexboxItem
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  created() {
  	setTimeout(() => { this.$progress.hide() }, 0);
  },
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

    //获取商品详细信息
    this.$model.goodsDetail({goodsId: this.$route.params.id}).then(data => {
      //this.banner = data.dataset.path ;
      this.goodsDetail = data.dataset.detail ;
    })
    
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
.goods-header{
	display: flex;
	display: -webkit-flex;
	align-items: center ;
	padding: 10px 10px;
	.title{
		flex: 1;
		text-align: left;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		font-size: 16px;
		vertical-align: middle;
		span{
			color:@main-color;
			margin-right: 5px;
		}
	}
	.goods-favirate{
		width: 60px;
		display: inline-block;
		i{
			display: inline-block;
			vertical-align: middle;
			width: 25px;
			height: 25px;
			.bgreset();
			background-image:  url('../../static/imgs/sc0.png');
			&.active{
				background-image:  url('../../static/imgs/sc1.png');
			}
		}
	}
}

.goods-price{
	padding:0 10px;
	text-align: left;
	color: @main-color;
}
.goods-select{
	font-size: 14px;
}
.goods-sale{
	margin-top: 10px;
	padding: 10px 10px 0;
	font-size: 14px;
	color: #333;
	border-top: 1px solid #efefef;
	span{
		color: #aaa;
		margin-right: 5px;
	}
}
.detail {
	word-wrap: break-word;
    word-break: break-all;
}

</style>
<style lang="less">
.detail img{
	max-width: 100%;
}
</style>
