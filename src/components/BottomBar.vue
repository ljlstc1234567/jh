<template>
  <div class="bottomBar">
  	<router-link to="/" replace :class="active==1?'active':''">
  		<i class=" icon-1"></i>
  		首页
  	</router-link>
  	<router-link to="/league" replace :class="active==2?'active':''">
  		<i class=" icon-2"></i>
  		加盟
  	</router-link>
  	<router-link to="/special" replace :class="active==3?'active':''">
  		<i class=" icon-3"></i>
  		专题
  	</router-link>
  	<router-link to="/cart" replace :class="active==4?'active':''">
  		<i class=" icon-4"></i>
  		购物车
  	</router-link>
  	<router-link to="/mine" replace :class="active==5?'active':''">
  		<i class=" icon-5"></i>
  		我的
  	</router-link>
  </div>
</template>
<script>
export default {
  props:{
  	 active: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      //active: 1
    }
  },
  created() {
    //this.msg = this.query.msg;
  }
};

</script>
<style lang="less" scoped>
@import "../../static/variables.less";
.bottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  background: #fff;
  white-space : nowrap ;
  z-index: 1000;
  a{
  	display: inline-block;
    float: left;
    padding-top: 10px;
  	width: 20%;
  	color: #666;
  	font-size: 12px;
    .icon-1{
      background-image: url(../../static/imgs/index.png);
    }
    .icon-2{
      background-image: url(../../static/imgs/tese.png);
    }
    .icon-3{
      background-image: url(../../static/imgs/piliang.png);
    }
    .icon-4{
      background-image: url(../../static/imgs/car.png);
    }
    .icon-5{
      background-image: url(../../static/imgs/user.png);
    }
    &:active{
      background: #eee;
    }
  	&.active{
  		color: @main-color;
      .icon-1{
        background-image: url(../../static/imgs/indexhover.png);
      }
      .icon-2{
        background-image: url(../../static/imgs/tesehover.png);
      }
      .icon-3{
        background-image: url(../../static/imgs/pilianghover.png);
      }
      .icon-4{
        background-image: url(../../static/imgs/carhover.png);
      }
      .icon-5{
        background-image: url(../../static/imgs/userhover.png);
      }
  	}

  	i{
  		display:block;
  		margin: auto;
  		width: 20px;
  		height: 20px;
  		.bgreset();

  	}
  }
}

</style>
