<template>
  <div class="header">
  	<a href="javascript:;" @click="back" class="back"><i v-if="visible"></i></a>
  	<span v-if="title=='首页'"><img :src="imgsrc" alt="">2</span>
    <span v-else>{{title}}</span>
  	<div>
  	<slot name="rightMenu" />
    </div>
  </div>
</template>
<script>
import imgsrc from '../../static/imgs/logo.png'
export default {
	props:{
  	 title: {
      type: String,
      default: ''
    }
   },
   computed: {
      visible(){
        return this.$route.path.split("/").length>2 ;
      }
   },
   data(){
   	return {
   	  imgsrc
    }
   },
  created(){
    //console.log(this.$route.path.split("/")) ;
  	//this.msg = this.query.msg ;
  },
  methods:{
    back(){
      this.$router.go(-1) ;

    }
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
  z-index: 1000;
	a,div{
		width: 50px;
    line-height: 50px;
	}
  img{
    margin-top: 10px;
    height: 30px;
  }
  .back{
    &:active{
      background-color: darken(@main-color, 10%);
    }
    i{
      .bgreset();
      display: inline-block;
      margin-top: 10px;
      width: 30px;
      height: 30px;
      background-image: url(../../static/imgs/back.png);
    }
    
  }
	span{
    color: #fff;
		flex: auto;
		-webkit-flex: auto;
	}
}
</style>