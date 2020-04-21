function moneyTextToFloat(text) {
	/*
		Para converter o texto em um número não tem muito segredo. Basta removermos o símbolo de moeda, substituir a vírgula por ponto e usarmos a função
		parseFloat para retornar um número. Honestamente acho esse processo chato e
		repetitivo, então poderíamos aproveitar e transformar isso numa função,
	*/

	var cleanText = text.replace("R$ ", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	/*
		Existem inúmeras formas de se converter um valor numérico para um texto
		formatado. Eu vou usar a abordagem de multiplicar o valor por 100 e em seguida
		truncá-lo usando a função Math.floor, uma vez que vamos lidar com apenas duas
		casas decimais. Se você tiver necessidade de arredondar o valor para cima, use a função Math.ceiling.
		 Em seguida, vou fazer um adicionar o sinal de moeda e inserir
		a vírgula na antepenúltima posição, usando o método substr. Note que, quando eu
		utilizo -2 na posição do substr, a posição é contada do fim para o começo da String.
	*/

	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var text = floatToMoneyText(value);
	$("#total").text(text);
}


function calculateTotalProducts() {
	var produtos = $(".produto");
	var total = 0;
	$(produtos).each(function (pos, produto) { // cria um laço de repetição para pegar os elementos da tabela
		var $produto = $(produto);
		var quantity = moneyTextToFloat(
			$produto.find(".quantity").val()); // pega o valor da quantidade
		var price = moneyTextToFloat(
			$produto.find(".price").text()); // pega o valor do preço
		total += quantity * price; // calcula o valor total
	});
	return total;
}
