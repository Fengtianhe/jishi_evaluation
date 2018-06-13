// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

require('./vue-filter')
Vue.config.productionTip = false
import ElementUI from 'element-ui'

Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css'
// 引用API文件
import api from './axios'
// 将API方法绑定到全局
Vue.prototype.$api = api
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
