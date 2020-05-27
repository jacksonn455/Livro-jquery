var simples = {}; // objeto vazio
simples.nome = "Plínio"; // criado nome ao objeto
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
pedro.nome = "Pedro"; // altera a chave e valor da referencia no caso paulo
pedro.cargo = "Gerente de contas";
pedro.salario = 4500;
console.log("Nome: " + pedro.nome + ", cargo: " + pedro.cargo + ", salario: " + pedro.salario); // não cria um novo objeto e sim altera a referencia do antigo
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


// Maneira certa de encapsulamento para criar objetos atraves de função
function Funcionario(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
    }
    var paulo = new Funcionario("Paulo", "Analista de sistemas", 5000);
    var pedro = new Funcionario("Pedro", "Gerente de contas", 4500);
    console.log("O nome de paulo é " + paulo.nome + " seu cargo é " + paulo.cargo + " e seu salário é " + paulo.salario);
    console.log("O nome de pedro é " + pedro.nome + " seu cargo é " + pedro.cargo + " e seu salário é " + pedro.salario);