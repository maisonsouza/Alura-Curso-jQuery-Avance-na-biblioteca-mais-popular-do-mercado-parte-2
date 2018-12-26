$('#trocaFrase').click(fraseAleatoria);

$('#botaoFraseId').click(buscaFrasePorId);

function fraseAleatoria() {
    $('#spinner').show();
    $.get('http://localhost:3000/frases',trocaFraseAleatoria)
        .fail(function () {
            $('#erro').show();
            setTimeout(function () {
                $('#erro').toggle()
            },1900);
        })
    .always(function () {
        $('#spinner').toggle();
    })

}



function trocaFraseAleatoria(data)  {
    var frase = $('.frase');
    var numeroAleatorio = Math.floor(Math.random()*data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
}

function buscaFrasePorId(){
    var idEscolhido = $('#idFrase').val();
    $('#spinner').show();
    var dados = {id:idEscolhido}
    console.log(dados.id)
    $.get('http://localhost:3000/frases',dados,trocaFrasePeloId)
        .fail(function () {
            $('#erro').show();
            setTimeout(function () {
                $('#erro').toggle()
            },1900);
        })
        .always(function () {
            $('#spinner').toggle();
        })
}

function trocaFrasePeloId(data) {
    console.log(data.texto)
     var frase = $('.frase');
     frase.text(data.texto);
     atualizaTamanhoFrase();
     atualizaTempoInicial(data.tempo)
}