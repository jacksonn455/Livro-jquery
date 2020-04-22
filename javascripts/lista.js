$(function () {
    function onTarefaDeleteClick() {
        $(this).parent('.tarefa-item')
            .fadeOut("slow", function () {
                $(this).remove(); // removendo a tarefa-item
            });
    }
    $(".tarefa-delete").click(onTarefaDeleteClick); // clica no elemento tarefa-delete
});

function onTarefaItemClick() {
    var text = $(this).children('.tarefa-texto').text();
    var html = "<input type='text' " +
        "class='tarefa-edit' value='" +
        text + "'>";
    $(this).html(html);
    $(".tarefa-edit").keydown(onTarefaEditKeydown);
}


function onTarefaEditKeydown(event) {
    if (event.which === 13) { // salva a alteração quando for apertado o enter
        savePendingEdition($(this));
    }
}

function savePendingEdition(tarefa) {
    console.log("E aqui vamos salvar nossa tarefa");
    }