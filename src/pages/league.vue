<template>
  <div>
  	加盟
  </div>
</template>
<script>
export default {
   data(){
   	return {
   		
   	}
   },
  beforeCreate(){
  	//this.$store.commit('CHANGE_TITLE','加盟') ;
  },
  created(){
    //this.$loading.show();
    setTimeout(()=>{this.$progress.hide()},0);
  }
};
</script>
<style lang="less" scoped>
</style>