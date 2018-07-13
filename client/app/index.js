var campos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
];

var tbody = document.querySelector('table tbody')

document.querySelector('.form').addEventListener('submit', function(event){
    event.preventDefault();
    //cria uma tr
    var tr = document.createElement('tr');

    campos.forEach(function(campo){
        //cria uma td
        var td = document.createElement('td');
        //atribui o valor para a td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);
    });

    //Nova td que armazena o volume da negociação
    var tdVolume = document.createElement('td');
    
    //	as	posições	1	e	2	do	array	armazenam	os	campos	de	quantidade	e	valor,	respectivamente
    tdVolume.textContent = campos[1].value * campos[2].value;

    //Adicionando a tdVolume na tr
    tr.appendChild(tdVolume);

    //Adicionar a tr na tbody

    tbody.appendChild(tr);

    //Limpar campo da data
    campos[0].value= '';
    //Limpar campo de quantidade
    campos[1].value= 1;
    //Limpar campo de valor
    campos[2].value= '';

    //Focar no campo data
    campos[0].focus();


});

console.log(campos);