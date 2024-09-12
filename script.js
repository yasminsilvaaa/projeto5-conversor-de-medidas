// Função para realizar a conversão
function converterMedida(metros, opcao) {
    // Verifica se o valor é um número válido
    if (isNaN(metros)) {
        console.log("Por favor, insira um valor numérico válido.");
        return;
    }

    let resultado;

    // Realiza a conversão com base na opção escolhida
    switch (opcao) {
        case 1:
            resultado = metros * 1000; // 1 metro = 1000 milímetros
            console.log(`${metros}m equivale à ${resultado}mm`);
            break;
        case 2:
            resultado = metros * 100; // 1 metro = 100 centímetros
            console.log(`${metros}m equivale à ${resultado}cm`);
            break;
        case 3:
            resultado = metros * 10; // 1 metro = 10 decímetros
            console.log(`${metros}m equivale à ${resultado}dm`);
            break;
        case 4:
            resultado = metros / 10; // 1 decâmetro = 10 metros
            console.log(`${metros}m equivale à ${resultado}dam`);
            break;
        case 5:
            resultado = metros / 100; // 1 hectômetro = 100 metros
            console.log(`${metros}m equivale à ${resultado}hm`);
            break;
        case 6:
            resultado = metros / 1000; // 1 quilômetro = 1000 metros
            console.log(`${metros}m equivale à ${resultado}km`);
            break;
        default:
            console.log("Opção inválida!");
            break;
    }
}

// Exemplos de uso da função
// Exemplo 1
converterMedida(10, 3); // 10 metros para decímetros