const input = require("readline-sync");
let matriz = [];
for (let i = 0; i < 3; i++) {
    matriz[i] = [];
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = Number(input.question("Digite um valor: "));
    }
}
console.log("\nMatriz que voce digitou:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i]);
}
let opcao;
do {
    console.log("\nMenu:");
    console.log("1 - Soma da primeira linha");
    console.log("2 - Multiplicar diagonal");
    console.log("3 - Contar numeros pares");
    console.log("4 - Sair");
    opcao = Number(input.question("Escolha uma opcao: "));
    if (opcao === 1) {
        let soma = 0;
                for (let j = 0; j < 3; j++) {
            soma = soma + matriz[0][j];
        }
        console.log("Resultado da soma: " + soma);
    } else if (opcao === 2) {
        let mult = 1;
        for (let i = 0; i < 3; i++) {
            mult = mult * matriz[i][i];
        }
        console.log("Resultado da multiplicacao: " + mult);
    } else if (opcao === 3) {
        let cont = 0;
               for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (matriz[i][j] % 2 == 0) {
                    cont = cont + 1;
                }
            }
        }
        console.log("Quantidade de pares: " + cont);
    } else if (opcao === 4) {
        console.log("Encerrando...");
    } else {
        console.log("Opcao errada, tenta de novo");
    }
} while (opcao != 4);