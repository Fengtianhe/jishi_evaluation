import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: resolve => (require(['../page/main.vue'], resolve))
    },
    {
      path: '/person',
      name: '个人中心',
      component: resolve => (require(['../frame/person.vue'], resolve)),
      children: [
        // {
        //   path: '/person/message',
        //   name: '我的消息',
        //   component: resolve => (require(['../page/person/message.vue'], resolve))
        // },
        {
          path: '/person/test_card',
          name: '测评卡',
          component: resolve => (require(['../page/person/test_card.vue'], resolve))
        },
        {
          path: '/person/invited',
          name: '我邀请的',
          component: resolve => (require(['../page/person/invited.vue'], resolve))
        }
      ]
    },
    {
      path: '/case',
      name: '案例',
      component: resolve => (require(['../frame/case.vue'], resolve)),
      children: [
        {
          path: '/case/enterprise',
          name: '企业案例',
          component: resolve => (require(['../page/case/enterprise.vue'], resolve))
        },
        {
          path: '/case/enterprise_detail',
          name: '企业案例详情',
          component: resolve => (require(['../page/case/enterprise_detail.vue'], resolve))
        },
        {
          path: '/case/individual',
          name: '个人案例',
          component: resolve => (require(['../page/case/individual.vue'], resolve))
        },
        {
          path: '/case/individual_detail',
          name: '个人案例详情',
          component: resolve => (require(['../page/case/individual_detail.vue'], resolve))
        },
        {
          path: '/case/education',
          name: '授课案例',
          component: resolve => (require(['../page/case/education.vue'], resolve))
        },
        {
          path: '/case/education_detail',
          name: '授课案例详情',
          component: resolve => (require(['../page/case/education_detail.vue'], resolve))
        }
      ]
    },
    {
      path: '/product',
      name: '产品',
      component: resolve => (require(['../frame/blank.vue'], resolve)),
      children: [
        {
          path: '/product/product',
          name: '产品列表',
          component: resolve => (require(['../page/product/product.vue'], resolve))
        }
      ]
    },
    {
      path: '/news',
      name: '文章',
      component: resolve => (require(['../frame/blank.vue'], resolve)),
      children: [
        {
          path: '/news/news',
          name: '文章列表',
          component: resolve => (require(['../page/news/news.vue'], resolve))
        },
        {
          path: '/news/:id',
          name: '文章详情',
          component: resolve => (require(['../page/news/detail.vue'], resolve))
        }
      ]
    }
  ]
})
