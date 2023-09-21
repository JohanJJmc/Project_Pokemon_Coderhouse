
// Función para cargar un Pokémon en el contenedor


function cargarPokemon(pokemonData) {
    console.log("pokemon dados", pokemonData);
    // Hacer una solicitud a la PokeAPI para obtener los datos del Pokémon
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonData}`)
        .then(response => response.json())

        .then(data => {
            // Crear un nuevo elemento de Pokémon
            const pokemonElement = document.createElement("div");
            pokemonElement.className = "pokemon";

            // Agregar la imagen del Pokémon
            const imgContainer = document.createElement("div");
            imgContainer.className = "imgContainer";
            const img = document.createElement("img");
            img.src = data.sprites.other['official-artwork'].front_default;
            img.alt = data.name;
            imgContainer.appendChild(img);

            // Agregar información del Pokémon

            const info = document.createElement("div");
            info.className = "info";

            // Mapear los tipos a colores
            const typeColors = {
                normal: "#A8A77A",
                fire: "#EE8130",
                water: "#6390F0",
                electric: "#F7D02C",
                grass: "#7AC74C",
                ice: "#96D9D6",
                fighting: "#C22E28",
                poison: "#A33EA1",
                ground: "#E2BF65",
                flying: "#A98FF3",
                psychic: "#F95587",
                bug: "#A6B91A",
                rock: "#B6A136",
                ghost: "#735797",
                steel: "#B7B7CE",
                dragon: "#6F35FC",
                dark: "#705746",
                fairy: "#D685AD",

            };

            const typeElements = data.types.map(type => {
                const typeName = type.type.name;
                const typeColor = typeColors[typeName] || "#777"; // Color predeterminado en caso de que el tipo no esté en el objeto
                return `<span style="background-color: ${typeColor}">${capitalizeFirstLetter(typeName)}</span>`;
            });

            info.innerHTML = `
            <small class="number">Nº${data.id.toString().padStart(3, '0')}</small>
            <h2 class="name">${capitalizeFirstLetter(data.name)}</h2>
            <small class="type_element">${typeElements.join("")}</small>`;



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

// Cargar todos los Pokémon 
for (let i = 1; i <= 1000; i++) {
    cargarPokemon(i);
}

// Función para capitalizar la primera letra de una cadena
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}



