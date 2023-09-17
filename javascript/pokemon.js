// Función para cargar un Pokémon en el contenedor
function cargarPokemon(pokemonId) {
    // Hacer una solicitud a la PokeAPI para obtener los datos del Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(response => response.json())
        .then(data => {
            // Crear un nuevo elemento de Pokémon
            const pokemonElement = document.createElement("div");
            pokemonElement.className = "pokemon";

            // Agregar la imagen del Pokémon
            const imgContainer = document.createElement("div");
            imgContainer.className = "imgContainer";
            const img = document.createElement("img");
            img.src = data.sprites.front_default;
            img.alt = data.name;
            imgContainer.appendChild(img);

            // Agregar información del Pokémon
            const info = document.createElement("div");
            info.className = "info";
            info.innerHTML = `
                <span class="number">Nº${data.id.toString().padStart(3, '0')}</span>
                <h4 class="name">${capitalizeFirstLetter(data.name)}</h4>
                <small class="types">${data.types.map(type => `<span>${capitalizeFirstLetter(type.type.name)}</span>`).join(", ")}</small>
            `;

            // Agregar botón para ver más detalles
            const btnDetail = document.createElement("button");
            btnDetail.type = "button";
            btnDetail.className = "btn_detail";
            btnDetail.dataset.toggle = "modal";
            btnDetail.dataset.target = "#myModal";
            btnDetail.textContent = "View Info";

            // Agregar elementos al contenedor de Pokémon
            pokemonElement.appendChild(imgContainer);
            pokemonElement.appendChild(info);
            pokemonElement.appendChild(btnDetail);

            // Agregar el Pokémon al contenedor principal
            const pokemonContainer = document.getElementById("pokemonContainer");
            pokemonContainer.appendChild(pokemonElement);
        })
        .catch(error => {
            console.error("Error al obtener datos del Pokémon:", error);
        });
}

// Cargar 10 Pokémon en la página
for (let i = 0; i <= 1010; i++) {
    cargarPokemon(i);
}
