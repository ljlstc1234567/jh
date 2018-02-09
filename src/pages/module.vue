<template>
  <div>
  	模块
  </div>
</template>
<script>
export default {
   data(){
   	return {
   		msg:"报错"
   	}
   },
  beforeCreate(){
  	this.msg = this.query.msg ;
  }
};
</script>
<style lang="less" scoped>
</style>