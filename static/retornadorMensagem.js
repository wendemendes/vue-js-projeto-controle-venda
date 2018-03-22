export class RetornadorMensagem{
    constructor(response, mensagensErros, error){
        this.response = response;
        this.mensagensErros = mensagensErros;
        this.error = error;

        this.popular()
    }

    popular() {

          this.error = true;

          if(this.response.data.errors.length  > 0){
                var erros = this.response.data.errors;
                for (var i = 0; i < erros.length; i++) {
                    this.mensagensErros[i] = erros[i].defaultMessage;
                }
           }
    }


}
