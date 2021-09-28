let filmes = ["Eu robô", "Ratatulie",  "rocky", "The 100",  "la vida es bella"];

for (i=0; i < filmes.length; i++)  {
    filmes[i] = filmes[i].toUpperCase();
}

console.log(`${filmes}`);

// Exercício 02

let outrosFilmes = ["O lobo de Wall Street", "A rede social"]

function passagemDeElemento (array1, array2){
    for(i=0; i < array2.length; i++){
       array1.push(array2[i].toUpperCase());
    }
}

passagemDeElemento(filmes, outrosFilmes)

console.log(filmes)