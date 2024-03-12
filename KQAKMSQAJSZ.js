let tabuada = 1;

 if(tabuada <= 0){
    console.log("Escolha uma tabuada com número positivo");
} 

let limite;
if(limite <= 0){
    console.log("Por favor, escolha um limite com número positivo");
}
 for (let i = 1; i <= limite; i++){
    let resultado = tabuada * i;
    console.log(tabuada, "x", i, "=", tabuada * i);
 }