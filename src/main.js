// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'
import store from './store'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
  path : '/',
  component: Home
},{
  path: '/home',
  component: Home
},{
  path: '/time-entries',
  component: TimeEntries,
  children: [{
    path: 'log-time',
    //利用webpack让它懒加载,减少首屏加载的流量
    component: resolve => require(['./components/LogTime.vue'],resolve),
  }]
}]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
