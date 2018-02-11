<template>
  <router-link to="" class="goodsCard" v-lazy-container="{ selector: 'img' }">
    <img data-src="http://www.jh-buy.com//upload_imgs/goods/f940d91c-d7b2-4957-8e52-1bceb6842339/logo/logo.png" alt="">
    <p><span>欸分阶级</span></p>
    <div>￥600元</div>
  </router-link>
</template>
<script>
export default {
  data() {
    return {
      //msg:"报错"
    }
  },
  created() {
    //this.msg = this.query.msg ;
  }
};

</script>
<style lang="less" scoped>
@import "../../static/variables.less";
.goodsCard {
  display: inline-block;
  width: 47%;
  margin-left: 2%;
  margin-bottom: 20px;
  float: left;
  text-align: left;
  img {
    width: 100%;
  }
  p {
    display: flex;
    display: -webkit-flex;
    align-items: center;
    height: 30px;

    span {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      line-height: 15px;
      font-size: 14px;
      color: #666;
      overflow: hidden;
    }
  }
  div {
	font-size: 16px;
    color: @main-color;
  }
}

</style>
