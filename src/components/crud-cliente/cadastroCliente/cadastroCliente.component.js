import ComponentMensagem from '@/components/mensagem'
import ComponentFormCliente from '@/components/crud-cliente/formCliente'

export default {
  name: 'cadastro-cliente',
  components: {
      ComponentMensagem,
      ComponentFormCliente
  },
  props: [],
  data () {
    return {
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

  methods: {

        salvarCliente() {

            var vm = this;

             return HTTP({
                 method: 'post',
                 url: 'clientes',
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
  }
}
