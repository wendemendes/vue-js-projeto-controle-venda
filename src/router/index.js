import Vue from 'vue'
import Router from 'vue-router'
import Menu from '@/components/menu'
import Home from '@/components/home'
import PaginaNaoEncontrada from '@/components/paginaNaoEncontrada'
import Cliente from '@/components/cliente'
import Produto from '@/components/produto'
import LancamentoPedido from '@/components/lancamentoPedido'
import RelatorioCliente from '@/components/relatorioCliente'
import CadastroCliente from '@/components/cadastroCliente'
import EditarCliente from '@/components/editarCliente'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Cliente',
      name: 'Cliente',
      component: Cliente,
      buscaAutomatica: false
    },
    {
      path: '/CadastroCliente',
      name: 'CadastroCliente',
      component: CadastroCliente
    },
    {
      path: '/EditarCliente',
      name: 'EditarCliente',
      component: EditarCliente,
      clienteKey: ''
    },
    {
      path: '/Produto',
      name: 'Produto',
      component: Produto
    },
    {
      path: '/LancamentoPedido',
      name: 'LancamentoPedido',
      component: LancamentoPedido
    },
    {
      path: '/RelatorioCliente',
      name: 'RelatorioCliente',
      component: RelatorioCliente
    },
     {path: '*', name: 'PaginaNaoEncontrada', component: PaginaNaoEncontrada}
  ]

})
