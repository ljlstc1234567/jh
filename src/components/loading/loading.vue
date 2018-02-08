<template>
  <div class="mark" v-show="visible">
    <div class="loading">
      <div><span></span></div>
      <div><span></span></div>
      <div><span></span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  created() {

  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};

</script>
<style lang="less" scoped>
@import "../../../static/variables.less";
.mark{
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5) ;
}
.loading {
  width: 30px;
  height: 30px;
  margin: 0 auto;
  margin-top: 150px;
  position: relative;
  -webkit-animation: load 3s linear infinite;
  animation: load 3s linear infinite;
}

.loading div {
  width: 100%;
  height: 100%;
  position: absolute;
}

.loading span {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #99CC66;
  position: absolute;
  left: 50%;
  margin-top: -5px;
  margin-left: -5px;
  -webkit-animation: changeBgColor 3s ease infinite;
  animation: changeBgColor 3s ease infinite;
}

@-webkit-keyframes load {
  0% {
    -webkit-transform: rotate(0deg);
  }
  33.3% {
    -webkit-transform: rotate(120deg);
  }
  66.6% {
    -webkit-transform: rotate(240deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  33.3% {
    transform: rotate(120deg);
  }
  66.6% {
    transform: rotate(240deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes changeBgColor {
  0%,
  100% {
    background: #99CC66;
  }
  33.3% {
    background: #FFFF66;
  }
  66.6% {
    background: #FF6666;
  }
}

@keyframes changeBgColor {
  0%,
  100% {
    background: #99CC66;
  }
  33.3% {
    background: #FFFF66;
  }
  66.6% {
    background: #FF6666;
  }
}

.loading div:nth-child(2) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
}

.loading div:nth-child(3) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
}

.loading div:nth-child(2) span {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.loading div:nth-child(3) span {
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
}

</style>
