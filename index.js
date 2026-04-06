const input = require("readline-sync");

let matriz = [];

for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(input.question(`Digite o valor [${i}][${j}]: `));
    }
}

console.log("\nMatriz digitada:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
}

let opcao;

do {
    console.log("\nEscolha uma opcao:");
    console.log("1 - Soma da linha 1");
    console.log("2 - Multiplicacao da diagonal");
    console.log("3 - Quantidade de numeros pares");
    console.log("4 - Sair");

    opcao = Number(input.question("Opcao: "));

    if (opcao === 1) {
        let soma = 0;
        for (let j = 0; j < 3; j++) {
            soma += matriz[0][j]; // linha 1 (índice 0)
        }
        console.log("Soma da linha 1:", soma);

    } else if (opcao === 2) {
        let mult = 1;
        for (let i = 0; i < 3; i++) {
            mult *= matriz[i][i]; // diagonal principal
        }
        console.log("Multiplicacao da diagonal:", mult);

    } else if (opcao === 3) {
        let pares = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (matriz[i][j] % 2 === 0) {
                    pares++;
                }
            }
        }
        console.log("Quantidade de pares:", pares);

    } else if (opcao === 4) {
        console.log("Programa encerrado.");
    } else {
        console.log("Opcao invalida!");
    }

} while (opcao !== 4);