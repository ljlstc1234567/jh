<template>
  <div>
  	专题
  </div>
</template>
<script>
export default {
   data(){
   	return {
   		msg:"报错"
   	}
   },
  created(){
  	this.msg = this.query.msg ;
  }
};
</script>
<style lang="less" scoped>
</style>