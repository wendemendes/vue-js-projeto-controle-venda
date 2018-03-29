

export default {

  name: 'cliente',
  components: {},
  props: [],

  data () {
    return {
        buscaAutomatica:false,
        clientes: [],
        mensagemSucesso:'',
        sucesso:false,
    }
  },

  mounted () {

      this.buscaAutomatica = this.$route.params.buscaAutomatica;

      if(this.buscaAutomatica){
          this.buscarCliente();
      }

  },
  methods: {
          buscarCliente() {

                var vm = this;

                  HTTP.get('clientes')
                    .then(function(response) {
                        vm.clientes = response.data;
                    }).catch(function (error) {
                      console.log(error);
                    });
          },

          editarCliente(clienteKey) {
              this.$router.push({ name: 'EditarCliente', params: { clienteKey : clienteKey } });
          },

          excluirCliente(clienteKey, index) {

                var vm = this;

                  HTTP.delete('clientes/' + clienteKey)
                    .then(function(response) {

                      vm.mensagemSucesso = 'Operação realizada com sucesso';
                      vm.sucesso = true;
                      vm.clientes.splice(index, 1);

                      setTimeout(function () {
                        vm.mensagemSucesso = '';
                        vm.sucesso = false;
                      }, 5000);

                    }).catch(function (error) {
                      console.log(error);
                    });
          },

          novoCliente(){
              this.$router.push({ name: 'CadastroCliente' })
          }


  }
}
