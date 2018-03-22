import Vue from 'vue'
import App from './App'
import ComponentMensagem from './components/mensagem/index.vue'
import router from './router'
import jQuery from 'jquery'
import axios from 'axios'

import {RetornadorMensagem} from '../static/retornadorMensagem.js'
import {Path} from '../static/path.js'

global.jQuery = jQuery
global.axios = axios
global.RetornadorMensagem = RetornadorMensagem
global.Path = Path

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
