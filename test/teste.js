const escolha = require('../data/escolha')
const banco = require('../data/user/user')
banco.db['234234'] = { stage: 0 }

console.log(banco.db['234234'].stage)

banco.db['234234'] = { stage: 0 }


banco.db['234234'].stage

escolha.db['234234'] = {
    escolha: [],
    itens: [],
    nome: '',
    valorTaxa: 0,
    itensEscolhido: ''}

escolha.db['234234'] = {
        escolha: [],
        itens: [434],
        nome: '',
        valorTaxa: 0,
        itensEscolhido: ''}


//escolha.db['234234'] = {}


if (escolha.db['234234']) {
    console.log('oioi')
}
escolha.db['234234'] = undefined

console.log(escolha.db['234234'])