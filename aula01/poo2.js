const pessoa = {
    primeiroNome: 'João',
    sobrenome: 'Gianoni',
    idade: 16,
    corOlho: 'Castanho',
    altura: 175,
    dataNascimento: '25/01/2008',
    corPele: 'Pardo',
    sexo: 'Masculino',
    corFavorita: 'Preto',
}

//Primeira Frase
console.log('1 - ' + pessoa.primeiroNome + ' '+
    pessoa.sobrenome + ' tem ' + pessoa.idade + ' anos!');

//Alterar um objeto
pessoa.sobrenome = 'Vitor';

// Segunda frase
console.log('2 - ' + pessoa.primeiroNome + ' ' + pessoa.sobrenome + ' tem ' + pessoa.idade + ' Anos ')