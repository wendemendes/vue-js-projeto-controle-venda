

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

                var url = Path.path + 'clientes';
                var vm = this;

                  axios.get(url)
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


                var url = Path.path + 'clientes/' + clienteKey;
                var vm = this;

                  axios.delete(url)
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
