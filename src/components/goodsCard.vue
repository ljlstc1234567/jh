<template>
  <div class="goodsCard" v-lazy-container="{ selector: 'img' }">
    <img :data-src="src" alt="">
    <p><span>{{name}}</span></p>
    <div></div>
  </div>
</template>
<script>
export default {
  props: {
      name:"",
      src:""
    },
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
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
  div {
	font-size: 16px;
    color: @main-color;
  }
}

</style>
