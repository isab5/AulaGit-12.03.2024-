let rosa = 25;
let roxo = 55;

let inicio;
let fim;

if (rosa < roxo) {
    inicio = rosa;
    fim = roxo;
} else {
    inicio = roxo;
    fim = rosa;
}

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}

