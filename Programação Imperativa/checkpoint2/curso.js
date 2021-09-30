let listaEstudantes = require('./listaEstudantes');
let Aluno = require("./construtor");

/*  Passo 3
    Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).*/
let curso = {
    nomeCurso: "Programação Imperativa",
    notaAp: 7,
    faltaMax: 5,
    estudantes: listaEstudantes,

    retornaDados: function () {
        return ("Curso: " + this.nomeCurso + ", Média de aprovação: " + this.notaAp + ", Falta máxima: " +
            this.faltaMax + ", Lista de estudantes: " + this.estudantes);

    },
    /* Passo 4
	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, 
    deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */
    addAluno: function (nome, qtdFaltas, qtdNotas) {
        let novoAluno = new Aluno(nome, qtdFaltas, qtdNotas)
        return this.estudantes.push(novoAluno) //criando novo aluno a listaEstudantes
    },

    /* Passo 5
	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, 
    o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação. */

    metodoAprovacao: function (alunoI) {
        let alunoD;
        let media = 0;
        let qtdfalta = 0;

        for (let i of this.estudantes) {
            if (i.nome === alunoI) {
                alunoD = i;
                media = alunoD.calcularMedia();
                qtdfalta = alunoD.qtdFaltas;
            }
        }
        if(media >= this.notaAp && qtdfalta < this.faltaMax ||
            media >= (this.notaAp*1,10) && qtdfalta == this.faltaMax){
                return ("Aluno aprovado: "+ true);
            }
            else{
                return ("Aluno reprovado: " + false);
            }
    }


};
/* curso.addAluno("Batista",11,[5,4,5])*/
/* console.log(curso.metodoAprovacao('Adilane Pereira')) */