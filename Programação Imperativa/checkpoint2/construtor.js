function Aluno(nome, qtdFaltas, qtdNotas) {
    this.nome = nome
    this.qtdFaltas = qtdFaltas
    this.qtdNotas = qtdNotas

    this.calcularMedia = function () {
        let soma = this.qtdNotas.reduce(function (valorInicial, acumulador) {
            return valorInicial + acumulador
        }) //esta variável irá somar as notas do array (reduce é um método próprio para um array)
        let tamanhoArray = this.qtdNotas.length // percorrer o array notas e jogar em tamanhoArray
        return soma / tamanhoArray
    }

    this.faltas = function () {
        this.qtdFaltas++
    }
}

module.exports = Aluno

/*  Objetivos
    Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar um pouco com exercícios que dependem da etapa anterior para manter uma linha de trabalho.
    Importante: Ao final, lembre-se de enviar o código completo para o Github, compartilhando o link do projeto com seus professores.

Passo 1 ok
    Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Passo 2 ok
    Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

Passo 3
    Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

Passo 4
	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

 Passo 5
	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

 Passo 6
	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não. 

Passo 7
	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/