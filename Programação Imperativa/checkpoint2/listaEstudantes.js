let funcaoConstrutora = require('./construtor');

let listaEstudantes = [
    new funcaoConstrutora("Jeferson Oliveira", 2, [8, 7, 9]),
    new funcaoConstrutora("João Carlos", 5, [8, 7, 9]),
    new funcaoConstrutora("Alice Vieira", 6, [8, 7, 9]),
    new funcaoConstrutora("José Lucas", 0, [8, 7, 9]),
    new funcaoConstrutora("Andrea Sakamoto", 1, [8, 7, 9]),
    new funcaoConstrutora("Maraia Kerou", 10, [8, 7, 9]),
    new funcaoConstrutora("Henrique Araras", 7, [8, 7, 9]),
    new funcaoConstrutora("Ruan Damasco", 4, [8, 7, 9]),
    new funcaoConstrutora("Ricardo André", 3, [8, 7, 9]),
    new funcaoConstrutora("Adilane Pereira", 0, [8, 7, 9]),
    new funcaoConstrutora("Suzane Alves", 0, [8, 7, 9]),
]
console.log(listaEstudantes)
module.exports = listaEstudantes;

