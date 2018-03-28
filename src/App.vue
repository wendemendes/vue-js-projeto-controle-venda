<template>
  <div id="app">

    <Menu></Menu>

    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
          menus: [

            {
              title: "Cadastro",
              link: "Cadastro",
              icon:'',
              filhos: [
                {title: "Cliente", link: "Cliente", icon:''},
                {title: "Produto", link: "Produto", icon:''}
              ]
            },
            {
              title: "Operação",
              link: "Operacao",
              icon:'',
              filhos: [
                    {title: "Lançamento pedido", link: "LancamentoPedido", icon:''}
              ]
            },
            {
              title: "Relatórios",
              link: "Relatorios",
               icon:'',
               filhos: [
                    {title: "Relatório  de cliente", link: "RelatorioCliente", icon:''}
               ]
             }
          ]
    }
  }

}
</script>
