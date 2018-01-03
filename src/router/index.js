import Vue from 'vue'
import Router from 'vue-router'
import CurationView from '@/components/CurationView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'CurationView',
      component: CurationView
    }
  ]
})
