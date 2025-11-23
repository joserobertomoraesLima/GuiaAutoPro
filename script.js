let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = [];

 // Adiciona um event listener para o campo de busca com id="busca"
 // Ele acionará a função 'buscar' sempre que o usuário digitar algo.
document.querySelector("#busca").addEventListener("input", buscar);

 // A função agora se chama carregarDados para refletir melhor sua ação.
 async function ExibirTodosCarros(){
    if(dados.length === 0){
        try{
            let resposta = await fetch("data.json");
            dados = await resposta.json();
            renderizarCards(dados);

        }catch(error){
           console.error("Erro ao carregar os dados:", error);
           return;
        }
    }
    document.querySelector(".apresentacao").style.display = "none";
     document.querySelector(".pesquisar").style.display = "flex"; 
     document.querySelector(".filtro").style.display = "flex"; 
    
}

function iniciarBusca(){
    const termoBusca = campoBusca.value.toLowerCase();
    const dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca) || dado.descricao.toLowerCase().includes(termoBusca)
);
 renderizarCards(dadosFiltrados);
}

function renderizarCards(dadosParaRenderizar){
    // Limpa o container de cards antes de adicionar os novos
    cardContainer.innerHTML = "";
    for(let dado of dadosParaRenderizar){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <img src="${dado.foto}" alt="${dado.nome}" class="card-img">
            <h2>${dado.nome} - ${dado.categoria}</h2>
            <p>${dado.modelo}</p>
            <p>${dado.descricao}</p>
        
            
             `
        cardContainer.appendChild(article);
    }
}

// Nova função para buscar e filtrar as linguagens
function buscar(){
    let termoBusca = document.querySelector("#busca").value.toLowerCase();
    let dadosFiltrados = dados.filter(dado => dado.nome.toLowerCase().includes(termoBusca));
    renderizarCards(dadosFiltrados);
}

function buscarCarro(cat) {
    let carro = dados.filter(dado => dado.categoria == cat);
  renderizarCards(carro)

}

// }
// Chama a função para carregar os dados assim que a página for carregada.
iniciarBusca();
