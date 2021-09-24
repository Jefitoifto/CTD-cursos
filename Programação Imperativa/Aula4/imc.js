// imc = peso/altura*altura

/* let peso = 85.5; // peso em kg
let altura = 1.8; // altura em metros (m)
//imc significa Índice de Massa Corporal

let imc = Math.round(peso/(altura*altura));

console.log("O imc do peso: "+ peso +"kg e altura: "+altura+"m é igual a: "+imc);
 */

function Paciente1() {
    let idade; //tipo int
    let nome; //tipo string
    let peso; //tipo float
    let altura; //tipo float
    let plano; //tipo string

    nome = "José da Silva";
    idade = 27;
    peso = 83.5;
    altura = 1.70;
    plano = "ouro";

    let imc = peso / (altura * altura);
    console.log("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente2() {
    let idade; //tipo int
    let nome; //tipo string
    let peso; //tipo float
    let altura; //tipo float
    let plano; //tipo string

    nome = "Carlos de Souza";
    idade = 28;
    peso = 80.1;
    altura = 1.76;
    plano = "diamante";

    let imc = peso / (altura * altura);
    console.log("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente3() {
    let idade; //tipo int
    let nome; //tipo string
    let peso; //tipo float
    let altura; //tipo float
    let plano; //tipo string

    nome = "Aline Ferreira";
    idade = 33;
    peso = 63.7;
    altura = 1.53;
    plano = "não possui";

    let imc = peso / (altura * altura);
    console.log("O paciente: " + nome + ", " + plano + " plano, tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente4() {
    let idade; //tipo int
    let nome; //tipo string
    let peso; //tipo float
    let altura; //tipo float
    let plano; //tipo string

    nome = "Ana Paula";
    idade = 26;
    peso = 55.0;
    altura = 1.62;
    plano = "prata";

    let imc = peso / (altura * altura);
    console.log("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}

console.log(Paciente1());
console.log(Paciente2());
console.log(Paciente3());
console.log(Paciente4());