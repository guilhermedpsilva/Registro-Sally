// Criando a lista e o resultado    
let lista = []
let res = document.getElementById('res')
let pessoas = document.getElementById('pessoas')

// Criando a função que irá verificar se o valor é repetido
function repetido(lista, valor) {
    for (let item of lista) {
        if (item.nome === valor) {
            return true 
        }
    }
    return false
}


// Criando a função de adicionar
function adicionar() {
    res.innerHTML = ''
    // Criando as variaveis
    let nome = document.getElementById('nome').value.trim()
    let numero = document.getElementById('idade')
    let idade = Number(numero.value)
    let sexo = document.getElementsByName('sexo')
    let genero = ''
    // Criando a validação de dados
    if (idade <= 0 || nome === '' || idade > 110) {
        alert('[ERRO] Verifique os seus dados!')
    } else {
        if (sexo[0].checked) {
        genero = 'Homem'
    } else if (sexo[1].checked) {
        genero = 'Mulher'
    }
    if (lista.length === 10) {
        alert('Máximo de pessoas adicionadas.')
    } else if (!repetido(lista, nome)) {
        lista.push({nome: nome, idade: idade, genero: genero})
        pessoas.innerHTML += `${nome} Registrado com sucesso.<br>`
    } else {
        alert(`${nome} já foi registrado.`)
    }
    }
}


// Criando a função apagar
function apagar() { 
    // Criando a validação
    if (lista.length === 0) {
        alert('Não há nada para apagar.')
    } else {
       res.style.textDecoration = 'underline' 
       res.innerHTML = 'Registros apagados...'
       pessoas.innerHTML = ''
       lista = []
    }
}


// Criando a função finalizar

function finalizar() {
    // criando a validação
    if (lista.length === 0) {
        alert('Adicione dados para finalizar.')
    } else {
        let cont = 1
        res.innerHTML = '' // limpando a msg de quem foi adicionado
        // Mostrando as pessoas que foram registradas
        res.innerHTML += 'Registrado. <br>'
        for (let i = 0; i < lista.length && i < 10; i++) {
            let registro = lista[i]
            res.innerHTML += `${cont} - ${registro.nome}, ${registro.idade} anos, ${registro.genero}.<br>`
            cont++
    }
    }
}

res.innerHTML = '' // apagando ao clicar em finalizar