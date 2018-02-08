<template>
  <div class="header">
  	<a href="javascript:;"><</a>
  	<span>{{title}}</span>
  	<div>
  	<slot name="rightMenu" />
    </div>
  </div>
</template>
<script>
export default {
	props:{
  	 title: {
      type: String,
      default: ''
    }
   },
   data(){
   	return {
   		//msg:"报错"
   	}
   },
  created(){
  	//this.msg = this.query.msg ;
  }
};
</script>
<style lang="less" scoped>
@import "../../static/variables.less";
.header{
	position: fixed;
	display: flex;
	display: -webkit-flex;
	top: 0;
	left: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	background-color: @main-color;
	a,div{
		width: 50px;
	}
	span{
		flex: auto;
		-webkit-flex: auto;
	}
}
</style>