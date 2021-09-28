const meuProprioGrupo = ['Jeferson1', 'Jeferson2', 'Jeferson3', 'Jeferson4', 'Jeferson5'];
console.log(meuProprioGrupo[5]);

meuProprioGrupo[0] = 'Jeferson1';
meuProprioGrupo[1] = 'Jeferson2';
meuProprioGrupo[2] = 'Jeferson3';
meuProprioGrupo[3] = 'Jeferson4';
meuProprioGrupo[4] = 'Jeferson5';
console.log(meuProprioGrupo);

meuProprioGrupo.push('Juliana Cardoso');
meuProprioGrupo.unshift('Ricardo Alves');
console.log(meuProprioGrupo);

meuProprioGrupo.pop('Juliana Cardoso');
meuProprioGrupo.shift('Ricardo Alves');
console.log(meuProprioGrupo);

const integrantesDh = ['Juliana Cardoso', 'Ricardo Alves'];
console.log(meuProprioGrupo.includes(integrantesDh[0, 1]));

meuProprioGrupo.unshift('Ricardo Alves');
console.log(meuProprioGrupo[0] === integrantesDh[1]);

// O que esses códigos retornam?
// 1. undefined
// 2. Spiderman
// 3. str = 'una string qualquer'

const imprimirInverso = (array) => array.slice().reverse();
console.log(imprimirInverso(meuProprioGrupo));

const inverter = (array) => {
    const novoArray = array.reverse();
    return novoArray
}
console.log(inverter(meuProprioGrupo));

const somaArray = (array) => array.reduce((acc, cur) => acc + cur);
console.log(somaArray([1, 6, 8, 4, 3, 5, 8, 1, 4, 8, 9, 6]));

const join = (array) => array.reduce((acc, cur) => acc + cur);
console.log(join(['o', 'l', 'á']));
console.log(join(['t','c','h','a','u']));

const filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
console.log(filmes[3]);

const filmesComLetrasMaiusculas = (array) => array.map((element) => element.toUpperCase());
console.log(filmesComLetrasMaiusculas(filmes));

const filmesDeAnimacao = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];
const removed = filmesDeAnimacao.pop();
console.log(removed);

const joinFilmes = (array1, array2) => array1.push(...array2);
joinFilmes(filmes, filmesDeAnimacao);
console.log(filmes);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
const isEqual = (array1, array2) => array1.every((valor, index) => valor === array2[index]);
console.log(isEqual(asiaScores, euroScores) ? 'As notas são iguais' : 'As notas não são iguais');