import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../page/Page1'
import Page2 from '../page/Page2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'page1',
      component: Page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: Page2
    }
  ]
})
