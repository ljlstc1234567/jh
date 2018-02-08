<template>
  <div>
  	模块
  </div>
</template>
<script>
  import mixin from './mixin'; 
export default {
   data(){
   	return {
   		msg:"报错"
   	}
   },
   mixins: [mixin],
  beforeCreate(){
  	this.msg = this.query.msg ;
  }
};
</script>
<style lang="less" scoped>
</style>