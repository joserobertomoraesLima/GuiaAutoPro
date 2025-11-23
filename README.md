# GuiaAutoPro
"GuiaAutoPro: Uma plataforma web responsiva para visualização e filtragem de carros. Desenvolvido com HTML, CSS Grid/Flexbox e JavaScript Vanilla. Apresenta busca dinâmica e carregamento de dados via fetch de um arquivo JSON."

Título e Introdução
GuiaAutoPro: Seu Portal Completo de Referência Automotiva
Um Estudo de Caso de Desenvolvimento Web Front-end
Tópico	Detalhe
Apresentador(a)	Jose Roberto Moraes Lima
Objetivo	Demonstrar a criação de um aplicativo web estático e responsivo utilizando HTML, CSS e JavaScript Vanilla para carregar, exibir e filtrar dados dinamicamente.
Foco	Usabilidade (UX), Estrutura de Dados (data.json) e Responsividade.
________________________________________
Geral e Propósito do Projeto
O Que é o GuiaAutoPro?
•	Problema Endereçado: A necessidade de uma plataforma rápida e limpa para visualizar e filtrar informações detalhadas sobre modelos de carros, eliminando a sobrecarga de informações de grandes portais.
•	A Solução: Um guia automotivo digital que permite aos usuários explorar uma lista abrangente de veículos, segmentados por categorias (Hatch, Sedan, SUV, Picape) e pesquisáveis por nome ou descrição.
•	Público-Alvo: Entusiastas de carros, compradores em potencial e qualquer pessoa que busque informações objetivas sobre modelos específicos.
Principais Funcionalidades
1.	Carregamento Assíncrono de Dados: Os dados são carregados de um arquivo local (data.json) usando fetch.
2.	Visualização em Cards: Cada carro é exibido em um card informativo com imagem, nome, categoria, modelo e descrição.
3.	Filtros por Categoria: Botões dedicados para filtrar instantaneamente os carros por tipo (hatch, sedan, suv, picape).
4.	Busca em Tempo Real: Um campo de busca que filtra os resultados dinamicamente (conforme o usuário digita) por nome ou descrição do veículo.
________________________________________
Estrutura Técnica (Front-end)
Tecnologias Utilizadas
Componente	Tecnologia	Função Principal
Estrutura	HTML5 (index.html)	Define a estrutura semântica da página, incluindo header, main, footer, seção de apresentação, filtros e o card-container.
Estilização	CSS3 (style.css)	Cria o layout visual, define cores, tipografia, e aplica o design responsivo (usando Media Queries).
Interatividade	JavaScript Vanilla (script.js)	Gerencia a lógica de carregamento, manipulação do DOM, filtros, e a busca dinâmica.
Dados	JSON (data.json)	Serve como a "API" local, fornecendo uma lista estruturada de 40 carros com atributos como nome, categoria, marca, modelo, descrição e foto.
________________________________________
Análise do script.js (JavaScript)
🧠 Lógica e Manipulação do DOM
1. Carregamento Inicial (ExibirTodosCarros)
•	Função: Assíncrona, responsável por realizar a requisição fetch ao data.json.
•	Otimização: Utiliza um cache simples (if(dados.length === 0)) para garantir que o fetch só ocorra uma vez, na primeira vez que a lista de carros é solicitada.
•	UX: Esconde a seção de introdução (.apresentacao) e exibe a barra de busca (.pesquisar) e os filtros (.filtro) após o carregamento.
2. Renderização (renderizarCards)
•	Princípio: Recebe um array de dados (filtrados ou não).
•	Mecanismo: Limpa o container (cardContainer.innerHTML = "") e itera sobre o array para criar novos elementos <article class="card">.
•	Template String: Uso eficiente de template literals (article.innerHTML = \...``) para injetar dados dinâmicos no HTML de forma limpa.
3. Busca Dinâmica (buscar e iniciarBusca)
•	buscar: É atrelada ao evento input do campo de busca (#busca), garantindo que o filtro seja aplicado em tempo real a cada tecla digitada.
•	Lógica de Filtro: Utiliza o método Array.prototype.filter() para criar um novo array de dados onde o dado.nome deve incluir o termo de busca (ambos convertidos para minúsculas).
4. Filtro por Categoria (buscarCarro)
•	Integração com HTML: Chamada diretamente via onclick nos botões de filtro (onclick='buscarCarro("hatch")').
•	Lógica: Recebe o parâmetro da categoria (cat) e filtra o array dados onde dado.categoria corresponde à categoria desejada.
________________________________________
Detalhes de Estilização (style.css)
🎨 Design e User Experience (UX)
1. Layout Base
•	Fonte: Utilização da fonte "Quicksand" para uma estética moderna e limpa.
•	Estrutura: Uso de Flexbox para o header e Grid CSS para o card-container. O Grid permite uma organização eficiente dos cards, simplificando a responsividade.
•	Vantagem do CSS Grid: Facilidade em criar um layout de múltiplos itens que se ajustam automaticamente à largura da tela.
2. Responsividade (Media Queries)
•	Ponto de Quebra (@media (max-width: 768px)): Foco em dispositivos móveis e tablets.
•	Ajuste do Header/Busca: O header se torna full-width, e os elementos de busca e botão se separam para ocupar o espaço de forma legível (e não compactada).
•	Ajuste do Card-Container: A chave da responsividade: a regra grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) permite que o grid mude automaticamente o número de colunas, garantindo que os cards nunca fiquem muito pequenos ou muito grandes.
•	Footer: O position: absolute foi alterado para position: relative para garantir que o rodapé apareça corretamente no final do conteúdo em telas pequenas, e não fixo no fundo da viewport.
________________________________________
Demonstração e Conclusão
🚀 Demonstração
(Neste ponto, você faria uma breve demonstração ao vivo)
1.	Exibir Todos os Carros: Clique no botão e mostre o carregamento dos dados.
2.	Busca em Tempo Real: Digite "Ford" ou "diesel" e mostre a lista se filtrando instantaneamente.
3.	Filtro Categoria: Clique em "SUV" e "Picape" para mostrar o filtro.
4.	Responsividade: Redimensione a janela do navegador para mostrar o ajuste do header e a mudança do grid de cards (de 4 para 2 ou 1 coluna).
Conclusão
•	O GuiaAutoPro é uma aplicação single-page eficiente que demonstra a capacidade de construir uma interface de usuário complexa e responsiva utilizando apenas HTML, CSS e JavaScript Vanilla.
