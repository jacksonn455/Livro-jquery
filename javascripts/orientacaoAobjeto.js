var simples = {};
// objeto vazio

simples.nome = "Plínio";
// criado nome ao objeto

simples.oi = function () {
    console.log("Olá, " + this.nome + "!"); // this indica que devemos procurar, dentro do objeto atual
} // metodo ou funcao criada

simples.oi();

// Cria objeto ja com a funcao
var outro_simples = {
    nome: "Plínio",
    oi: function () {
        console.log("Olá, " + this.nome + "!"); // this indica que devemos procurar, dentro do objeto atual
    }
};
outro_simples.oi();
outro_simples.nome = "Jerimias"; // Alterando nome
outro_simples.oi();


var paulo = {
    nome: "Paulo",
    cargo: "Analista de Sistemas",
    salario: 5000
};

console.log("Nome: " + paulo.nome + ", cargo: " + paulo.cargo + ", salario: " + paulo.salario);

var pedro = paulo; // guarda uma referência ao objeto, e não o objeto em si.

pedro.nome = "Pedro"; // altera a chave e valor
pedro.cargo = "Gerente de contas";
pedro.salario = 4500;

console.log("Nome: " + pedro.nome + ", cargo: " + pedro.cargo + ", salario: " + pedro.salario); // não cria um novo objeto que já com as mesmas funções e atributos
console.log("Nome: " + paulo.nome + ", cargo: " + paulo.cargo + ", salario: " + paulo.salario);  // a referencia foi alterada por isso ele recebe o nome errado


//criar objetos a partir de funções
function OlaSimples() {
    this.nome = "Jorge";
    this.oi = function () {
        console.log("Olá, " + this.nome + "!");
    }
}

var simples = new OlaSimples();  // instanciando um objeto
simples.oi(); // chmando funcao

//Mesma função so que passando o nome por parametro
function OlaSimples(seuNome) {
    var nome = seuNome;
    this.oi = function () {
        console.log("Olá, " + nome + "!");
    }
}
simples = new OlaSimples("Plínio");
simples.oi();
