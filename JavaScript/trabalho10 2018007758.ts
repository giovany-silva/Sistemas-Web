abstract class Pessoa
{
	private _nome: string
	private _dataNasc: Date
	private _sexo: string
	constructor(nome: string, dataNasc :Date,sexo :string)
	{
		this._nome = nome
		this._dataNasc = dataNasc
		this._sexo = sexo
	}
    	get nome(): string
    	{
        	return this._nome
    	}

    	get dataNasc(): Date
    	{
        	return this._dataNasc
    	}

    	get sexo(): string
    	{
        	return this._sexo
    	}	
}

class Professor extends Pessoa
{	
	private _categoria: string
	constructor(nome: string, dataNasc :Date, sexo :string, categoria :string)
	{
		super(nome,dataNasc,sexo)
		this._categoria = categoria
	}
	get categoria(): string
	{
		return this._categoria
	}

}

class Aluno extends Pessoa
{	
	
	constructor(nome: string, dataNasc :Date, sexo :string)
	{
		super(nome,dataNasc,sexo)
	}
}
class Disciplina
{
	private _nome :string
	constructor(nome : string)
	{
		this._nome = nome
	}
	get nome()
	{
		return this._nome
	}
}

class Turma
{
	private _professor
	private _disciplina: Disciplina
	private _alunos: Array<Aluno>
	constructor()
	{
		this._alunos = new Array()		
	}
	set professor(professor: Professor)
	{
		this._professor = professor 
	}
	get professor()
	{
		return this._professor
	}
	set disciplina(disciplina : Disciplina)
	{
		this._disciplina = disciplina
	}
	get disciplina()
	{
		return this._disciplina
	}
	adicionaAluno(aluno : Aluno)
	{
		this._alunos.push(aluno)
	}
	get alunos()
	{
		return this._alunos
	}

}

var professor = new Professor("Bauduco",new Date("12/01/2017"),'M',"Computação")

var aluno1 = new Aluno("Traquinas",new Date("12/01/2001"),'F')
var aluno2 = new Aluno("Bono",new Date("12/01/2010"),'M')
var aluno3 = new Aluno("Piraquê",new Date("12/01/2011"),'M')
var aluno4 = new Aluno("Marilan",new Date("12/02/2001"),'F')
var aluno5 = new Aluno("Oreo",new Date("12/11/2001"),'M')

var disciplina = new Disciplina("COM222 - Desenvolvimento WEB") 

var turma = new Turma()

turma.professor = professor

turma.adicionaAluno(aluno1)
turma.adicionaAluno(aluno2)
turma.adicionaAluno(aluno3)
turma.adicionaAluno(aluno4)
turma.adicionaAluno(aluno5)

turma.disciplina = disciplina




console.log('Nome da disciplina: '+turma.disciplina.nome+'\n')

console.log('Nome do Professor: '+turma.professor.nome+'\n')

console.log('Alunos: \n')

console.log('=======================================================')
console.log('Nome 		Data de nascimento 			Sexo ')
turma.alunos.forEach(aluno => {
            console.log(aluno.nome +'     '+aluno.dataNasc + '    ' + aluno.sexo ) // chama o 'get'
	    console.log('--------------------------------------------------------')
        })
