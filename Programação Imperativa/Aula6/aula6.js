function adicionar (numA, numB){
    return numA + numB;
}

function subtrair (numA, numB){
    return numA - numB;
}

function multiplicar (numA, numB){
    return numA * numB;
}

function dividir (numA, numB){
    return numA / numB;
}

// Nível II

console.log("--------------Teste de Operações / Calculadora--------------");

console.log(adicionar(3,5));

console.log(subtrair(10,5));

console.log(multiplicar(3,3));

console.log(dividir(26,2));

console.log(dividir(15,0));

function quadradoDoNumero(num){
    return multiplicar(num, num);
}

console.log(quadradoDoNumero(3));

// Média de 3(três) números

function mediaDeTresNumeros(numA, numB, numC){
    let soma = numA + numB + numC;
    return dividir(soma, 3);
}

console.log(mediaDeTresNumeros(10, 3, 2));

// Cacular porcentagem

function calcularPorcentagem (valor, taxa){
    let percentual = dividir(taxa, 100);
    return parseFloat((multiplicar(valor, percentual)).toFixed(2));
}

console.log(calcularPorcentagem(300, 25.56));

// Gerador de porcentagem

function geradorDePorcentagem (valorA, valorB){
    let primeiraOperacao = multiplicar(valorA, 100);
    return dividir(primeiraOperacao, valorB);
}

console.log(geradorDePorcentagem(60, 200) + "%")