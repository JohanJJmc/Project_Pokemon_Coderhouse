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