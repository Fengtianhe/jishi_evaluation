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

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// 将API方法绑定到全局
Vue.prototype.$api = api
/* eslint-disable no-new */
// 验证是否是手机端
Vue.prototype._isMobile = function (){
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag;
}
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
