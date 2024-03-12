let num1 = 1;

let num2 = 10;

let resultado = 0;

let par;

for (let i = num1; i <= num2; i++) {
    if (i % 2 === 0) {
        par = i;
        resultado = par + resultado;
        console.log(par);
    }
}

console.log(resultado);