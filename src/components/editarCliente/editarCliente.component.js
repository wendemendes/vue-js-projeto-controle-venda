import ComponentFormCliente from '@/components/formCliente'

export default {
  name: 'editar-cliente',
  components: {
      ComponentFormCliente
  },
  props: [],
  data () {
      return {
          clienteKey: '',
            cliente: {
                nome: '',
                endereco: '',
                bairro: '',
                telefoneResidencial: '',
                telefoneCelular: '',
                email: '',
            },
            mensagemSucesso:'',
            sucesso:false,
            error:false,
            mensagensErros:[]
      }
  },

  mounted() {
      this.buscarCliente();
  },

  methods: {

        buscarCliente(){

              this.clienteKey = this.$route.params.clienteKey;

              if(this.clienteKey > 0){
                    var url = Path.path + 'clientes/' + this.clienteKey;
                    var vm = this;

                      axios.get(url)
                        .then(function(response) {
                            vm.cliente = response.data;
                        }).catch(function (error) {
                          console.log(error);
                        });
              }
        },

        editarCliente() {

                    var url = Path.path + 'clientes/' + this.clienteKey;
                    var vm = this;

                   return axios({
                       method: 'put',
                       url: url,
                       data: this.cliente,
                      headers: {'Content-Type': 'application/json'}
                   }).then(response => {

                        vm.mensagemSucesso = 'Operação realizada com sucesso';
                        vm.sucesso = true;

                        setTimeout(function () {
                          vm.mensagemSucesso = '';
                          vm.sucesso = false;
                        }, 5000);

                     })
                     .catch(e => {

                         let retornadorMensagem =  new RetornadorMensagem(e.response, vm.mensagensErros, vm.error);

                         vm.mensagensErros = retornadorMensagem.mensagensErros;
                         vm.error= retornadorMensagem.error;

                        setTimeout(function () {
                          vm.mensagensErros = [];
                          vm.error = false;
                        }, 6000);

                    });
              },

              voltar(){
                  this.$router.push({ name: 'Cliente', params: { buscaAutomatica : true } });
              },
  }
}
