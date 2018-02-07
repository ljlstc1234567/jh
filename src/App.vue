<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
    <BottomBar :active="active"></BottomBar>
  </div>
</template>
<script>
import BottomBar from '@/components/BottomBar';
export default {
  name: 'App',
  data(){
    return {
      transitionName:"fade",
      active:1
    }
  },
  created(){
    console.log(this.$route.name);
  },
  components: {
    BottomBar
  },
  watch: {
    '$route' (to, from) {
      //console.log(to);
      if("index,module".includes(to.name)){
        this.active = 1 ;
      }
      if("league".includes(to.name)){
        this.active = 2 ;
      }
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}

</script>
<style lang="less">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  img {
    width: 600px;
  }
}

</style>
