<template>
  <div>
  	专题
  </div>
</template>
<script>
export default {
   data(){
   	return {
   	}
   },
  beforeCreate(){
  	//this.$store.commit('CHANGE_TITLE','专题') ;
  },
  created(){
    setTimeout(()=>{this.$progress.hide()},0);
  }
};
</script>
<style lang="less" scoped>
</style>