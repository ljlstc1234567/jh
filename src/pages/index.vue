<template>
  <div>
  	首页
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
  	//this.$store.commit('CHANGE_TITLE','首页') ;
  }
};
</script>
<style lang="less" scoped>
</style>