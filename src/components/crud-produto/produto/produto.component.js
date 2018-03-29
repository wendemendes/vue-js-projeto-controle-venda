export default {
  name: 'produto',
  components: {},
  props: [],
  data () {
    return {
          buscaAutomatica:false,
          produtos: [],
          mensagemSucesso:'',
          sucesso:false,
    }
  },
  computed: {

  },
  mounted () {
        this.buscaAutomatica = this.$route.params.buscaAutomatica;

        if(this.buscaAutomatica){
            this.buscarProduto();
        }
  },
  methods: {

              buscarProduto() {

                    var vm = this;

                      HTTP.get('produtos')
                        .then(function(response) {
                            vm.produtos = response.data;
                        }).catch(function (error) {
                          console.log(error);
                        });
              },

              editarProduto(produtoKey) {
                  this.$router.push({ name: 'EditarProduto', params: { produtoKey : produtoKey } });
              },

              excluirProduto(produtoKey, index) {

                    var vm = this;

                      HTTP.delete('produtos/' + produtoKey)
                        .then(function(response) {

                          vm.mensagemSucesso = 'Operação realizada com sucesso';
                          vm.sucesso = true;
                          vm.produtos.splice(index, 1);

                          setTimeout(function () {
                            vm.mensagemSucesso = '';
                            vm.sucesso = false;
                          }, 5000);

                        }).catch(function (error) {
                          console.log(error);
                        });
              },

              novoProduto(){
                  this.$router.push({ name: 'CadastroProduto' })
              }

  }
}
