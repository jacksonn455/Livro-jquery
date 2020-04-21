/*
# Pegando valor da variavel

var total = document.getElementById("total");
alert(total.innerHTML);

var teste = document.querySelector("#total");
alert(teste.textContent);
*/

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
	var total = document.getElementById("total");
	return moneyTextToFloat(total.innerHTML);
}

function writeTotal(value) {
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}

// writeTotal(3.14159);  alterando valor total


function calculateTotalProducts() {

	var produtos = document.getElementsByClassName("produto");
	var totalProdutos = 0;

	for (var pos = 0; pos < produtos.length; pos++) { // cria um laço de repetição para pegar os elementos da tabela
		var priceElements = produtos[pos].getElementsByClassName("price"); // pega o valor de cada elemento e armazena em um array
		var priceText = priceElements[0].innerHTML;
		var price = moneyTextToFloat(priceText); // pega o valor dos preços

		var qtyElements = produtos[pos].getElementsByClassName("quantity");
		var qtyText = qtyElements[0].value;
		var quantity = moneyTextToFloat(qtyText); // pega o valor das quantidades

		var subtotal = quantity * price; // calcula o valor total do carrinho
		totalProdutos += subtotal;
	}
	return totalProdutos;
}


function quantidadeMudou() {
	writeTotal(calculateTotalProducts());  // altera o valor do total
}

function onDocumentLoad() {
	var textEdits = document.getElementsByClassName("quantity");
	for (var i = 0; i < textEdits.length; i++) {
		textEdits[i].onchange = quantidadeMudou();
	}
}

window.onload = onDocumentLoad();  // carregamento da pagina
