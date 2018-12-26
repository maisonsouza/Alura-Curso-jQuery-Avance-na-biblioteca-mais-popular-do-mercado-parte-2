$('#botaoPlacar').click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $('.placar').find('tbody');
    var usuario = 'Maison';
    var numPalavras = $('#contador-palavras').text();

    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    corpoTabela.prepend(linha);
    $('.placar').slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario,palavras){
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(palavras);
    var colunaRemover = $('<td>');
    var link = $('<a>').attr('href','#').addClass('botao-remover');
    var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');
    link.append(icone);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    colunaRemover.append(link);
    linha.append(colunaRemover);
    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    var linha = $(this).parent().parent();
    linha.fadeOut();
    setTimeout(function () {
        linha.remove();
    }, 1000);
}


function mostraPlacar(){
    $(".placar").stop().slideToggle(1500);
}

function scrollPlacar(){
    var posicaoPlacar = $('.placar').offset().top;
    $('body').animate({scrollTop:posicaoPlacar+"px"},1000)
}




