// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import api from './api'
import router from './router';
import loading from './components/loading';
import "../static/style.less";
import mixin from "./mixin";
import FastClick from 'fastclick'
import progress from './components/progress';

//移动端点击延迟补丁
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false;

Vue.prototype.$progress = progress;
Vue.prototype.$loading = loading;
Vue.prototype.$model = api;
// api.getTest({optCode:"getNotice"}).then(data=>{
// 	console.log(data) ;
// })
mixin(Vue) ;

router.beforeEach((to, from, next) => {
	//改变标题
	document.title = to.meta.title||"憬弘" ;
	store.commit('CHANGE_TITLE',to.meta.title||"憬弘") ;
	progress.show() ;
    next() ;
});

// Vue.component('jheader', jheader) ;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>',
  store
})
