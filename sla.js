let soma = 0;
for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}
return soma;

let resultado = somaNumerosPares(1, 10);
console.log("A soma dos números pares entre 1 e 10 é:", resultado);