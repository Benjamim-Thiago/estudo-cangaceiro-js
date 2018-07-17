class NegociacaoController {
    
    adiciona(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);
        let inputData = $('#data');
        let inputQuantidade = $('#quantidade');
        let inputValor = $('#valor');

        console.log(inputData.value);
        console.log(parseInt(inputQuantidade.value));
        console.log(parseFloat(inputValor.value));

        alert('Chamei ação no controller');
    }
}