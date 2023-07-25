# Project_Pokemon_Coderhouse

 <section class="button_banner">
            <div class="search_container">
                <input class="searchbar" type="text" placeholder="Search your Pokémon">
            </div>
          
       
  <div class="filter_container">
                <div class="dropdown">
                    <select name="Pokemon type" id="type">
                        <option selected="true" disabled="disabled" required> -Select a type</option>
                        <option value="AA"> TYPE 1</option>
                        <option value="AB"> TYPE 2</option>
                    </select>
                </div>
                <div class="dropdown">
                    <select name="Pokemon type" id="type">
                        <option selected="true" disabled="disabled" required> -Vunerability</option>
                        <option value="AA"> VUL 1</option>
                        <option value="AB"> VUL 2</option>
                    </select>
                </div>
                <div class="dropdown">
                    <select name="Pokemon type" id="type">
                        <option selected="true" disabled="disabled" required> -Order By</option>
                        <option value="AA"> A - Z</option>
                        <option value="AB"> Z - A</option>
                    </select>
                </div>
            </div>

             </section>







   <div class="pokemon_grass">
                <div class="imgContainer">
                    <img src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/1.png" alt="nome">
                </div>
                <div class="info">
                    <span class="number">Nº001</span>
                    <h3 class="name">bulbasour</h3>
                    <small class="type">Tipo: <span>grama/venenoso</span></small>
                </div>
            </div>
            
            <div class="pokemon_fire">
                <div class="imgContainer">
                    <img src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/4.png" alt="nome">
                </div>
                <div class="info">
                    <span class="number">Nº004</span>
                    <h3 class="name">Charmander</h3>
                    <small class="type">Tipo: <span>Fogo</span></small>
                </div>
            </div>
    
                <div class="pokemon_water">
                    <div class="imgContainer">
                        <img src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/7.png" alt="nome">
                    </div>
                    <div class="info">
                        <span class="number">Nº007</span>
                        <h3 class="name">Squirtle</h3>
                        <small class="type">Tipo: <span>Água</span></small>
                    </div>
                </div>
    
                <div class="pokemon_electricity">
                    <div class="imgContainer">
                        <img src="https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/25.png" alt="nome">
                    </div>
                    <div class="info">
                        <span class="number">Nº025</span>
                        <h3 class="name">Pikachu</h3>
                        <small class="type">Tipo: <span>Elétrico</span></small>
                    </div>


























             main {
    background-color: darkgray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
}



#pokeContainer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;
}

.pokemon_fire {

    background: linear-gradient(180deg, #4E4E4E 0%, #d84d4d 100%);

    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
}

.pokemon_grass {
    background: linear-gradient(180deg, #4E4E4E 0%, #68c47d 100%);


    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
}

.pokemon_water {
    background: linear-gradient(180deg, #4E4E4E 0%, #5C90C0 100%);

    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
}

.pokemon_electricity {
    background: linear-gradient(180deg, rgb(54, 54, 54) 0%, rgb(255, 183, 48) 54%);

    border-radius: 10px;
    box-shadow: 0 3px 15px rgba(100, 100, 100, 0.5);
    margin: 10px;
    padding: 20px;
    text-align: center;
}




.imgContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    width: 120px;
    height: 120px;
}

.imgContainer img {
    max-width: 90%;
}

.info {
    margin-top: 20px;
}

.number {
    background-color: rgba(0, 0, 0, 0.253);
    padding: 2.5px 5px;
    border-radius: 10px;
    font-size: 0.8rem;
}

.name {
    margin: 10px 0 5px;
    letter-spacing: 1.5px;
}