// $('seletor').ação()

$(".par").css("background-color", "lightblue");
$(".impar").css("background-color", "lightgreen");
$("#texto").css("color", "white").val("esse é o novo texto"); // altera valor e estilo texto


$(document).ready(function() {
    $('#esconder').click(function() {
        $('h1').hide();
    });
});

$(document).ready(function() { // encademento em bloco
    $('#azul').click(function() {

        $('#msg1')
            .css("color", "blue")
            .fadeOut("fast")
            .delay(1000)
            .fadeIn("slow")

        $('#mensagem')
            .text("Cor alterada com sucesso!")
            .css({ color: 'blue', border: "1px solid blue" })
            .delay(3000)
            .fadeOut("slow")
            .addClass('green');
    });
});

$(document).ready(function() {
    $('#vermelho').click(function() {
        $('#msg2').css("color", "red");
        $('#msg2').fadeOut("fast");
        $('#msg2').delay(1000);
        $('#msg2').fadeIn('slow');
        $('#mensagem').text("Cor alterada com sucesso!");
        $("#mensagem").css("color", "red");
        $("#mensagem").css("border", "1px solid red");
        $("#mensagem").delay(3000);
        $("#mensagem").fadeOut("slow");
    });
});