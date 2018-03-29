import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import PaginaNaoEncontrada from '@/components/paginaNaoEncontrada'
import LancamentoPedido from '@/components/lancamentoPedido'
import RelatorioCliente from '@/components/relatorioCliente'
import Cliente from '@/components/crud-cliente/cliente'
import CadastroCliente from '@/components/crud-cliente/cadastroCliente'
import EditarCliente from '@/components/crud-cliente/editarCliente'
import Produto from '@/components/crud-produto/produto'
import CadastroProduto from '@/components/crud-produto/cadastroProduto'
import EditarProduto from '@/components/crud-produto/editarProduto'

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
      path: '/CadastroProduto',
      name: 'CadastroProduto',
      component: CadastroProduto
    },
    {
      path: '/EditarProduto',
      name: 'EditarProduto',
      component: EditarProduto,
      produtoKey: ''
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
