var tempoInicial = $("#tempoRestante").text();
var campo = $(".campodigitacao");
var frase = $(".frase").text();

$(function () {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();

    $("#botaoReiniciar").click(reiniciaJogo);

});

function atualizaTamanhoFrase() {
    var numPalavras = frase.split(" ").length;
    var tamanhoFrase = $("#quantidadepalavras");
    tamanhoFrase.text(numPalavras);
}

function inicializaContadores(){
    campo.on("input", function () {
        var conteudo_digitado = campo.val();
        var palavrasdigitadas = conteudo_digitado.split(/\S+/).length - 1;
        $('#contador-palavras').text(palavrasdigitadas);
        var caracteresdigitados = conteudo_digitado.length;
        $("#contador-caracteres").text(caracteresdigitados);
    });
}


function inicializaCronometro() {
    var tempoRestante = $('#tempoRestante').text();
    campo.one("focus", function () {
        var id = setInterval(function () {
            tempoRestante--;
            $('#tempoRestante').text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(id);
                campo.addClass("campodesabilitado");
                inserePlacar();
            }
        }, 1000);
    });
}


function reiniciaJogo(){
    campo.attr("disabled", false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempoRestante").text(tempoInicial);
    inicializaCronometro();
    campo.removeClass("campo-correto");
    campo.removeClass(("campo-incorreto"));
    campo.removeClass("campodesabilitado")
}



function inicializaMarcadores(){
    campo.on('input',function () {
        var digitado = campo.val();
        var comparavel = frase.substr(0,digitado.length)
        // console.log(frase);
        console.log(digitado);
        console.log(comparavel);
        if (digitado==comparavel){
            campo.addClass("campo-correto");
            campo.removeClass("campo-incorreto");
        }else{
            campo.addClass("campo-incorreto");
            campo.removeClass("campo-correto");
        }
    });
}



$("#botao-reiniciar").click(reiniciaJogo);

