export default {
  name: 'mensagem',
  components: {},
  props: {
            mensagemSucesso: {
              type: String,
              required: false
            },
            success: {
              type: Boolean,
              required: false
            },
            mensagensErros: {
              type: Array,
              required: false
            },
            error: {
              type: Boolean,
              required: false
            },
          },

  data () {
    return {

    }
  },


  methods: {

        getLink() {

                  console.log(te);
        },

  }
}
