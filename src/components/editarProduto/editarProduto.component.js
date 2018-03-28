import ComponentFormProduto from '@/components/formProduto'

export default {
  name: 'editar-produto',
  components: {
      ComponentFormProduto
  },
  props: [],
  data () {
    return {
          produtoKey: '',
            produto: {
                descricao: '',
                gtin: '',
            },
            mensagemSucesso:'',
            sucesso:false,
            error:false,
            mensagensErros:[]
    }
  },
  computed: {

  },
  mounted () {
        this.buscarProduto();
  },
  methods: {

          buscarProduto(){

                this.produtoKey = this.$route.params.produtoKey;

                if(this.produtoKey > 0){
                      var url =  'produtos/' + this.produtoKey;
                      var vm = this;

                        HTTP.get(url)
                          .then(function(response) {
                              vm.produto = response.data;
                          }).catch(function (error) {
                            console.log(error);
                          });
                }
          },

            editarProduto() {

                  var url =  'produtos/' + this.produtoKey;
                  var vm = this;

                 return HTTP({
                     method: 'put',
                     url: url,
                     data: this.produto,
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
                this.$router.push({ name: 'Produto', params: { buscaAutomatica : true } });
            },

  }
}
