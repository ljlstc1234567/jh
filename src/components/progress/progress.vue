<template>
  <div class="progress" v-show="visible" :class="visible?'animate':''">
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible:false
    }
  },
  created() {
    
  },
  methods:{
    show(){
      this.visible = true;
    },
    hide(){
      this.visible = false;
    }
  }
};

</script>
<style lang="less" scoped>
@import "../../../static/variables.less";
.progress {
  position: fixed;
  height: 4px;
  top: 50px;
  left: 0;
  width: 0%;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: -webkit-linear-gradient(left, lighten(@main-color, 30%), lighten(@main-color, 20%));
  background: -o-linear-gradient(right, lighten(@main-color, 30%), lighten(@main-color, 20%));
  background: -moz-linear-gradient(right, lighten(@main-color, 30%), lighten(@main-color, 20%));
  background: linear-gradient(to right, lighten(@main-color, 30%), lighten(@main-color, 20%));
  &.animate{
    -webkit-animation: going 1s forwards;
    -o-animation: going 1s forwards; 
    animation: going 1s forwards;
  }
}
@-webkit-keyframes going {
  from {
    width: 0%;
  }

  to {
    width: 99%;
  }
}

@keyframes going {
  from {
    width: 0%;
  }

  to {
    width: 99%;
  }
}
</style>
