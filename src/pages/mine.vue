<template>
  <div style="padding:10px;">
  	个人中心
  </div>
</template>
<script>
export default {
   data(){
   	return {
   		
   	}
   },
  beforeCreate(){
  	//this.$store.commit('CHANGE_TITLE','我的') ;
  },
  created(){
    setTimeout(()=>{this.$progress.hide()},0);
  }
};
</script>
<style lang="less" scoped>
</style>