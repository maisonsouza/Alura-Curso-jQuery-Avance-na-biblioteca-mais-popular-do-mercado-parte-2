$('#trocaFrase').click(fraseAleatoria);

function fraseAleatoria() {
    $.get('http://localhost:3000/frases',function (data) {
    var frase = $('.frase');
    var numeroAleatorio = Math.floor(Math.random()*data.length);
    frase.text(data[numeroAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo)
    })
}