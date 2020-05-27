$(function () {
    $("#accordion").accordion();
});

var linguagens = [  // Utilizar para dar dicas de auto complete
    "Clojure",
    "Common LISP",
    "Erlang",
    "F#",
    "Haskell",
    "JavaScript",
    "OCaml",
    "Scala",
    "Jackson",
    "Scheme"
];

$("#linguagens").autocomplete({ source: linguagens });

$(function () {
    $(".chique").button();
});

$(function () {
    $("#nascimento").datepicker({
        showWeek: true,
        firstDay: 0,
        dateFormat: "dd/mm/yy",
        dayNames: ["Domingo",
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado"],
        dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
        monthNames: ["Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
            "Agosto",
            "Setembro",
            "Outubro",
            "Novembro",
            "Dezembro"],
        monthNamesShort: ["Jan",
            "Fev",
            "Mar",
            "Abr",
            "Mai",
            "Jun",
            "Jul",
            "Ago",
            "Set",
            "Out",
            "Nov",
            "Dez"],
        showButtonPanel: true,
        currentText: "Hoje",
        closeText: "Fechar",
        weekHeader: "#"
    });
});    