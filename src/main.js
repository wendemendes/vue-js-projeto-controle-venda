import Vue from 'vue'
import App from './App'
import ComponentMensagem from './components/mensagem/index.vue'
import router from './router'
import jQuery from 'jquery'
import axios from 'axios'

import {HTTP} from './util/http-common.js'
import {RetornadorMensagem} from './util/retornadorMensagem.js'

global.jQuery = jQuery
global.axios = axios
global.RetornadorMensagem = RetornadorMensagem
global.HTTP = HTTP

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
Vue.component('ComponentMensagem', ComponentMensagem)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
})
