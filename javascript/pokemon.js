  // Função para obter um número aleatório entre dois valores (incluindo ambos)
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para determinar aleatoriamente se o Pokémon escapou
function isPokemonEscaped() {
    return getRandomNumber(0, 1) === 1; // 50% de chance de fuga
}

// Fazer uma solicitação à API do PokeAPI para obter um Pokémon aleatório
fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
    .then(response => response.json())
    .then(data => {
        const randomIndex = getRandomNumber(0, data.results.length - 1);
        const randomPokemonName = data.results[randomIndex].name;
        const randomPokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex + 1}.png`;

        // Criar um elemento de imagem
        const imageElement = document.createElement("img");
        imageElement.src = randomPokemonImageUrl;
        imageElement.alt = randomPokemonName;
        imageElement.className = "pokemon-image";

        // Criar a mensagem HTML
        const messageHtml = document.createElement("div");
        messageHtml.appendChild(imageElement);

        // Exibir a caixa de diálogo SweetAlert2 personalizada
        swal({
            title: `Um ${randomPokemonName} selvagem apareceu! O que você quer fazer?`,
            content: messageHtml, // Define o conteúdo HTML personalizado
            buttons: {
                cancel: "Fuja!",
                catch: {
                    text: "Jogue uma Pokébola!",
                    value: "Capturar",
                },
            },
        }).then((value) => {
            switch (value) {
                case "Capturar":
                    imageElement.style.display = "block";
                    if (isPokemonEscaped()) {
                        swal(`Ooops! ${randomPokemonName} escapou!`);
                    } else {
                        swal("Peguei Você!", `${randomPokemonName} foi pego!`, "success");
                    }
                    break;

                default:
                    swal("Fujiu com Segurança!");
            }
        });
    })
    .catch(error => {
        console.error("Erro ao obter dados da API do PokeAPI:", error);
    });