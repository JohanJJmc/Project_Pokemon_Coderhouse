// Función para buscar Pokémon
function buscarPokemon(terminoBusqueda) {
    const pokemones = document.querySelectorAll(".pokemon");

    pokemones.forEach(pokemon => {
        const nombrePokemon = pokemon.querySelector(".name").textContent.toLowerCase();

        if (nombrePokemon.includes(terminoBusqueda.toLowerCase())) {
            pokemon.style.display = "block";
        } else {
            pokemon.style.display = "none";
        }
    });
}
// filtro type
function cargarPokemon(pokemonData) {
    // Dentro de la función cargarPokemon
pokemonElement.className = `pokemon ${data.types.map(type => type.type.name).join(' ')}`;

// Función para aplicar el filtro
function filterPokemonByType(type) {
    const pokemonList = document.querySelectorAll('.pokemon');
    
    pokemonList.forEach(pokemon => {
      if (type === 'all' || pokemon.classList.contains(type)) {
        pokemon.style.display = 'block';
      } else {
        pokemon.style.display = 'none';
      }
    });
  }
  
  // Escucha cambios en el elemento de selección de tipo
  const typeFilter = document.getElementById('typeFilter');
  
  typeFilter.addEventListener('change', () => {
    const selectedType = typeFilter.value;
    filterPokemonByType(selectedType);
  });
  

}

