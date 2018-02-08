<template>
  <div style="padding:10px;">
  	购物车
  </div>
</template>
<script>
import mixin from './mixin'; 
export default {
   data(){
   	return {
   		
   	}
   },
   mixins: [mixin],
   beforeCreate(){
    //this.$store.commit('CHANGE_TITLE','购物车') ;
   },
  created(){
    setTimeout(()=>{this.$progress.hide()},0);
  }
};
</script>
<style lang="less" scoped>
</style>