import 'babel-polyfill'
import Vue from 'vue'
import store from './store'
import App from './App.vue'

var app = new Vue({
  store,
  el: '#app',
  render: h => h(App)
})