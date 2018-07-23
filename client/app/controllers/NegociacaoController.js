class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes =  new Negociacoes();
        this._negociacoesView =  new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem =  new Mensagem();
        this._mensagemView = new MensagemView('#MensagemView');
        this._mensagemView.update(this._mensagem);
    }
    _limpaCampos() {
        this._inputData.value = '',
        this._inputQuantidade.value = 1,
        this._inputValor.value = '0.0'
    }
    adiciona(event) {
        event.preventDefault();
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = "Negociação adicionada com sucesso!!!";
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update(this._mensagem);
        this._limpaCampos();
        //console.log(this._negociacoes.paraArray());
    }

    apagar() {
        this._negociacoes.esvazia();
        this._negociacoesView.update(this._negociacoes);
        this._negociacoesView.texto = "Negociação Apagada com sucesso!!!";
        this._mensagemView.update(this._mensagem);

    }

    _criaNegociacao() {
        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
}