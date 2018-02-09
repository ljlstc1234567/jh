<template>
  <div id="app">
    <jheader :title="title">
      <a href="" slot="rightMenu"></a>
    </jheader>
    <transition :name="transitionName" mode="out-in">
      <router-view/>
    </transition>
    <BottomBar :active="active"></BottomBar>
  </div>
</template>
<script>
import BottomBar from '@/components/BottomBar';
import jheader from '@/components/jheader';
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  data(){
    return {
      transitionName:"fade",
      active:1
    }
  },
  computed: {
    ...mapGetters([
      'title'
    ])
  },
  created(){
    this.changeActive(this.$route.name) ;
  },
  components: {
    BottomBar,
    jheader
  },
  watch: {
    '$route' (to, from) {
      this.changeActive(to.name) ;
    }
  },
  methods:{
    changeActive(name){
      if("index,module".indexOf(name)!=-1){
        this.active = 1 ;
      }
      if("league".indexOf(name)!=-1){
        this.active = 2 ;
      }
      if("special".indexOf(name)!=-1){
        this.active = 3 ;
      }
      if("cart".indexOf(name)!=-1){
        this.active = 4 ;
      }
      if("mine".indexOf(name)!=-1){
        this.active = 5 ;
      }
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
  margin-top: 50px;
}

</style>
