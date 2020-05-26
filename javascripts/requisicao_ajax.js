//                      Requisição normal
var parametros = { nome: "Caro Leitor" };
var servico = "http://livro-capitulo07.herokuapp.com/hello";  // Olá, mundo!
$.get(servico, parametros, function (data) {   // requisição AJAX get
    console.log(data); // Olá, Caro Leitor
});


//                      jQuery XMLHttpRequest Object.
var parametros = { nome: "Caro Leitor" };
var servico = "http://livro-capitulo07.herokuapp.com/hello";
var $xhr = $.get(servico, parametros);
$xhr.done(function (data) {
    console.log(data);
});


//                      servidor nos retornar um erro
var servico = "http://livro-capitulo07.herokuapp.com/error";
$.get(servico)
    .fail(function (data) {
        console.log(data.responseText); // erro 451
    });



// JSON é JavaScript puro.

// json  
/*
{
    "autor": "Plínio Balduino",
    "titulo": "Dominando JavaScript com jQuery",
    "ano": 2013,
    "editora": "Casa do Código",
    "usa_drm": false,
    "capitulos": [
        "Apresentação",
        "Refazendo uma loja virtual",
        "Adicionando JavaScript",
        "Um JavaScript diferente em cada navegador",
        "Simplifique com jQuery"
    ]
}
*/


// Javascript

var livro = {
    "autor": "Plínio Balduino",
    "titulo": "Dominando JavaScript com jQuery",
    "ano": 2013,
    "editora": "Casa do Código",
    "usa_drm": false,
    "capitulos": [
        "Apresentação",
        "Refazendo uma loja virtual",
        "Adicionando JavaScript",
        "Um JavaScript diferente em cada navegador",
        "Simplifique com jQuery"
    ]
}

console.log(livro.titulo);

// usar o método getJSON

var servico = "http://api.postmon.com.br/v1/cep/";
var cep = "04101-300";
function onCepDone(data) {
    console.log("A Casa do Código fica na " + data.logradouro);
}
$.getJSON(servico + cep)   // comando no console
    .done(onCepDone);

// usar caso tenha algum erro

var servico = "http://api.postmon.com.br/v1/cep/";
var cep = "12345-789";
function onCepDone(data) {
    console.log("A Casa do Código fica na " + data.logradouro);
}

function onCepError(error) {
    console.log("Erro: " + error.statusText) // 404
};
$.getJSON(servico + cep)
    .done(onCepDone)
    .fail(onCepError)
