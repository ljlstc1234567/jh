<template>
  <div>
  	专题
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
  	//this.$store.commit('CHANGE_TITLE','专题') ;
  }
};
</script>
<style lang="less" scoped>
</style>