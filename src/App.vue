<template>
  <div id="app">

      <div class="bd-example">
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
              <a class="navbar-brand" href="#">Menu</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarColor01">
                  <ul class="navbar-nav mr-auto">
                      <li class="nav-item dropdown" v-for="menu in menus">

                          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{menu.title}}</a>

                          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <router-link v-for="filho in menu.filhos" class="dropdown-item" href="#" :to="{name: filho.link}">{{filho.title}}</router-link>

                          </div>

                      </li>

                  </ul>
              </div>
          </nav>
      </div>


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
