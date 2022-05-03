const listaSelecaoPersonagens = 
document.querySelectorAll('.card')

const Card = 
document.querySelectorAll('.player')

const nomePlayer = document.querySelector('.nome-player1')


listaSelecaoPersonagens.forEach(street => {
    street.addEventListener('mouseover', () =>{
        //Remover a classe "aberto" só do cartão que está aberto.

        const cartaoAberto = document.querySelector('.aberto')

        cartaoAberto.classList.remove('aberto')

        //Ao clicar em um pokémon da listagem pegamos o id do mesmo pra saber qual cartão mostrar.

        const idSelecionado = 
        street.attributes.id.value

        const idDoCartaoParaAbrir = 'card-' + idSelecionado

        const cartaoParaAbrir = 
        document.getElementById(idDoCartaoParaAbrir)

        cartaoParaAbrir.classList.add('aberto')


        //Remover classe ativo que marca o personagem selecionado na listagem

        const ativoNaListagem = document.querySelector('.ativo')
        
        ativoNaListagem.classList.remove('ativo')
        

        const selecionadoNaListagem = document.getElementById(idSelecionado)

        selecionadoNaListagem.classList.add('ativo')

    })
})