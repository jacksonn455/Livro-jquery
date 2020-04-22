$(function () {
    var $lastClicked;

    function onTarefaDeleteClick() {
        $(this).parent('.tarefa-item')
            .off('click') // Primeiro, precisamos desassociar todos os eventos click do elemento com a classe tarefa-item
            .fadeOut("slow", function () {
                $(this).remove(); // removendo a tarefa-item
            });
    }
    $(".tarefa-delete").click(onTarefaDeleteClick); // clica no elemento tarefa-delete
});

function onTarefaItemClick(){

    if(!$(this).is($lastClicked)) {
      if($lastClicked !== undefined) {
        savePendingEdition($lastClicked);
      }

      $lastClicked = $(this);

      var text = $lastClicked.children('.tarefa-texto').text();

      var content = "<input type='text' class='tarefa-edit' value='" + 
        text + "'>";

      $lastClicked.html(content);

      $(".tarefa-edit").keydown(onTarefaEditKeydown);
    }
  
  }


function onTarefaEditKeydown(event) {
    if (event.which === 13) {
        savePendingEdition($lastClicked);
        $lastClicked = undefined;
    }
}


function savePendingEdition($tarefa) {
    var text = $tarefa.children('.tarefa-edit').val();
    $tarefa.empty();
}    