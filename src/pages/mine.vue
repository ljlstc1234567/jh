<template>
  <div style="padding:10px;">
  	个人中心
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
  	//this.$store.commit('CHANGE_TITLE','我的') ;
  }
};
</script>
<style lang="less" scoped>
</style>