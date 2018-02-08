<template>
  <div class="bottomBar">
  	<router-link to="/" :class="active==1?'active':''">
  		<i class="icon"></i>
  		首页
  	</router-link>
  	<router-link to="/league" :class="active==2?'active':''">
  		<i class="icon"></i>
  		加盟
  	</router-link>
  	<router-link to="/special" :class="active==3?'active':''">
  		<i class="icon"></i>
  		专题
  	</router-link>
  	<router-link to="/cart" :class="active==4?'active':''">
  		<i class="icon"></i>
  		购物车
  	</router-link>
  	<router-link to="/mine" :class="active==5?'active':''">
  		<i class="icon"></i>
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
  padding-top: 10px;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  background: #fff;
  white-space : nowrap ;
  a{
  	display: inline-block;
    float: left;
  	width: 20%;
  	color: #666;
  	font-size: 12px;
  	&.active,&:active{
  		color: @main-color;
  	}
  	i{
  		display:block;
  		margin: auto;
  		width: 20px;
  		height: 20px;
  		background-color: #ccc;

  	}
  }
}

</style>
