$(function () {
  var meu_login = "jacksonmagnabosco@hotmail.com";
  var server = "http://livro-capitulo07.herokuapp.com";
  var $lastClicked;


  function onTarefaDeleteClick() {
    $(this).parent('.tarefa-item')
      .off('click') // Primeiro, precisamos desassociar todos os eventos click do elemento com a classe tarefa-item
      .fadeOut("slow", function () {
        $(this).remove(); // removendo a tarefa-item
      });
  }


  function onTarefaItemClick() { // altera a tarefa

    if (!$(this).is($lastClicked)) {
      if ($lastClicked !== undefined) {
        savePendingEdition($lastClicked);
      }
      $lastClicked = $(this);
      var text = $lastClicked.children('.tarefa-text').text();
      var id = $lastClicked.children('.tarefa-id').text();
      var content = "<div class='tarefa-id'>" + id + "</div>" +
        "<input type='text' class='tarefa-edit' value='" +
        text + "'>";
      $lastClicked.html(content);
      $(".tarefa-edit").keydown(onTarefaEditKeydown);
    }
  }


  function onTarefaKeydown(event) {
    if (event.which === 13) {
      addTarefa($("#tarefa").val());
      $("#tarefa").val("");
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
    var id = $tarefa.children('.tarefa-id').text();
    $tarefa.empty();
    $tarefa.append("<div class='tarefa-id'>" + id + "</div>")
      .append("<div class='tarefa-text'>" + text + "</div>")
      .append("<div class='tarefa-delete'></div>")
      .append("<div class='clear'></div>");
    updateTarefa(text, id);
    $(".tarefa-delete").click(onTarefaDeleteClick);
    $tarefa.click(onTarefaItemClick);
  }

  $(".tarefa-delete").click(onTarefaDeleteClick);
  $(".tarefa-item").click(onTarefaItemClick);
  $("#tarefa").keydown(onTarefaKeydown);


  function addTarefa(text, id) {
    id = id || 0;
    var $tarefa = $("<div />")
      .addClass("tarefa-item")
      .append($("<div />")
        .addClass("tarefa-id")
        .text(id))
      .append($("<div />")
        .addClass("tarefa-text")
        .text(text))
      .append($("<div />")
        .addClass("tarefa-delete"))
      .append($("<div />")
        .addClass("clear"));
    $("#tarefa-list").append($tarefa);
    $(".tarefa-delete").click(onTarefaDeleteClick);
    $(".tarefa-item").click(onTarefaItemClick);
    if (id === 0) {
      var div = $($tarefa.children(".tarefa-id"));
      console.log("id", div);
      newTarefa(text, $(div));
    }
  }


  function updateTarefa(text, id) {
    $.post(server + "/tarefa", { tarefa_id: id, texto: text });
  }

  function newTarefa(text, $div) {
    $.post(server + "/tarefa",
      {
        usuario: meu_login,
        texto: text,
        _method: "PUT"
      })
      .done(function (data) {
        $div.text(data.id);
      });
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


  function loadTarefas() {
    $("#tarefa").empty();
    $.getJSON(server + "/tarefas", { usuario: meu_login })
      .done(function (data) {
        console.log("data: ", data);
        for (var tarefa = 0; tarefa < data.length; tarefa++) {
          addTarefa(data[tarefa].texto, data[tarefa].id);
        }
      });
  }

  loadTarefas();

});
