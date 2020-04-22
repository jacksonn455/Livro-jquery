$(function () {
  var $lastClicked;

  function onTarefaDeleteClick() {
    $(this).parent('.tarefa-item')
      .off('click') // Primeiro, precisamos desassociar todos os eventos click do elemento com a classe tarefa-item
      .fadeOut("slow", function () {
        $(this).remove(); // removendo a tarefa-item
      });
  }


  function onTarefaItemClick(){ // altera a tarefa

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

  function onTarefaKeydown(event) {
    if(event.which === 13) {
      addTarefa($("#tarefa").val());
      $("#tarefa").val("");
    }
  }

  function onTarefaEditKeydown(event) {
    if(event.which === 13) {
      savePendingEdition($lastClicked);
      $lastClicked = undefined;
    }
  }

  function savePendingEdition($tarefa) {
    var text = $tarefa.children('.tarefa-edit').val(); // Vamos começar guardando o texto em uma variável chamada text
    $tarefa.empty(); // vamos eliminar todo o código HTML que está dentro do elemento div que contém o item da tarefa usando o método
    $tarefa.append($("<div />")
      .addClass("tarefa-texto")
      .text("Lavar o banheiro"))
      .append($("<div />")
        .addClass("tarefa-delete"))
      .append($("<div />")
        .addClass("clear")); // adicionar aqueles três elementos div

    $(".tarefa-delete").click(onTarefaDeleteClick);
    $tarefa.click(onTarefaItemClick);  //declarar os eventos para o elementos
  }

  function addTarefa(text) {
    var tarefa = '<div class="tarefa-item">'
      + '<div class="tarefa-texto">' + text + '</div>'
      + '<div class="tarefa-delete"></div>'
      + '<div class="clear"></div>'
      + '</div>';
    $("#tarefa-list").append(tarefa);
    $(".tarefa-delete").click(onTarefaDeleteClick);
    $(".tarefa-item").click(onTarefaItemClick);
  }

  function savePendingEdition($tarefa) {
    var text = $tarefa.children('.tarefa-edit').val();
    $tarefa.empty();
    $tarefa.append("<div class='tarefa-texto'>" + text + "</div>")
          .append("<div class='tarefa-delete'></div>")
          .append("<div class='clear'></div>");

    $(".tarefa-delete").click(onTarefaDeleteClick);

    $tarefa.click(onTarefaItemClick);
  }

  $(".tarefa-delete").click(onTarefaDeleteClick);

  $(".tarefa-item").click(onTarefaItemClick);

  $("#tarefa").keydown(onTarefaKeydown);


});