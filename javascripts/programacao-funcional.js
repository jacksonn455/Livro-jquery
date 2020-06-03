//-------------------- Escopo
var x = 1;
var y = 11;
function incremento(x) {
    console.log("Dentro: ", x, y);
    x++;
    y++;
    console.log("Dentro: ", x, y);
}
incremento(x);
// Dentro: 1 11
// Dentro: 2 12
console.log("Fora: ", x, y);
// Fora: 1 12


//-------------------- Closures

function counter() {
    var x = 0;
    return function () {
        return ++x;
    }
}
var count = counter();
console.log(count());
//1
console.log(count());
//2
console.log(count());
//3
console.log(count());
//4
console.log(x);
//erro

//-------------------- Currying

function hey(texto) {
    return function (nome) {
        console.log(texto + ", " + nome);
    }
}
var bomDia = hey("Bom dia");
bomDia("João");
bomDia("José");
bomDia("Nicolau");
