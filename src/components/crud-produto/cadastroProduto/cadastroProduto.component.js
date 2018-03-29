import ComponentMensagem from '@/components/mensagem'
import ComponentFormProduto from '@/components/crud-produto/formProduto'

export default {
  name: 'cadastro-produto',
  components: {
    ComponentMensagem,
    ComponentFormProduto
  },
  props: [],
  data () {
    return {
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

  },
  methods: {
        salvarProduto() {

            var vm = this;

             return HTTP({
                 method: 'post',
                 url: 'produtos',
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
  }
}
