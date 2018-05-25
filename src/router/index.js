import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/person',
      hidden: true,
      name: '个人中心',
      component: resolve => (require(['../frame/person.vue'], resolve)),
      children: [
        {
          path: '/person/message',
          name: '我的消息',
          hidden: true,
          component: resolve => (require(['../page/person/message.vue'], resolve))
        },
        {
          path: '/person/test_card',
          name: '测评卡',
          hidden: true,
          component: resolve => (require(['../page/person/test_card.vue'], resolve))
        },
        {
          path: '/person/invited',
          name: '我邀请的',
          hidden: true,
          component: resolve => (require(['../page/person/invited.vue'], resolve))
        }
      ]
    }
  ]
})
