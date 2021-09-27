// imc = peso/altura*altura

/* let peso = 85.5; // peso em kg
let altura = 1.8; // altura em metros (m)
//imc significa Índice de Massa Corporal

let imc = Math.round(peso/(altura*altura));

console.log("O imc do peso: "+ peso +"kg e altura: "+altura+"m é igual a: "+imc);
 */




function Paciente1() {
    let idade = 27; //tipo int
    let nome = "José da Silva"; //tipo string
    let peso = 83.5; //tipo float
    let altura = 1.70; //tipo float
    let plano = "ouro"; //tipo string
    let imc = peso / (altura * altura);

    return ("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente2() {
    let idade = 28; //tipo int
    let nome = "Carlos de Souza"; //tipo string
    let peso = 80.1; //tipo float
    let altura = 1.76; //tipo float
    let plano = "diamante"; //tipo string
    let imc = peso / (altura * altura);

    return ("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente3() {
    let idade = 33; //tipo int
    let nome = "Aline Ferreira"; //tipo string
    let peso = 63.7; //tipo float
    let altura = 1.53; //tipo float
    let plano = "não possui"; //tipo string
    let imc = peso / (altura * altura);

    return ("O paciente: " + nome + ", " + plano + " plano, tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}


function Paciente4() {
    let idade = 26; //tipo int
    let nome = "Ana Paula"; //tipo string
    let peso = 55.0; //tipo float
    let altura = 1.62; //tipo float
    let plano = "prata"; //tipo string
    let imc = peso / (altura * altura);
    
    return ("O paciente: " + nome + ", plano " + plano + ", tem " + idade + " anos e seu índice de massa corporal é de: " + imc.toFixed(2));
}

console.log(Paciente1());
console.log(Paciente2());
console.log(Paciente3());
console.log(Paciente4());