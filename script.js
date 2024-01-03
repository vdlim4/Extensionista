const nome = document.querySelector('.nome')
const profissao = document.querySelector('.profissao')
const comentario = document.querySelector('.comentario')
const botao = document.querySelector('.botao')
const painel = document.querySelector('.painel-comentarios')

botao.addEventListener('click', (e) => {
    if (nome.value == '' || profissao.value == '' || comentario.value == '') {
        alert('Preencha todos os campos, por favor.')
    } else {
        let divNova = document.createElement('div')
        divNova.className = 'div-nova'
        
        let nomeAdd = document.createElement('h3')
        let nomeTxt = document.createTextNode(`${nome.value}`)
        nomeAdd.appendChild(nomeTxt)
        divNova.appendChild(nomeAdd)
    
        let profissaoAdd = document.createElement('h4')
        let profissaoTxt = document.createTextNode(`${profissao.value}`)
        profissaoAdd.appendChild(profissaoTxt)
        divNova.appendChild(profissaoAdd)
    
        let comentarioAdd = document.createElement('p')
        let comentarioTxt = document.createTextNode(`${comentario.value}`)
        comentarioAdd.appendChild(comentarioTxt)
        divNova.appendChild(comentarioAdd)
        
        painel.appendChild(divNova)
        
            
        nome.value = ''
        profissao.value = ''
        comentario.value = ''
    }
})
