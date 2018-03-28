export default {
  name: 'menu',
  components: {},
  props: [],
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
  },
  computed: {

  },
  mounted () {

  },
  methods: {

  }
}
