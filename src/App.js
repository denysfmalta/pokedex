import { useState, useEffect } from "react";
import './style.css';

function App() {
  const [pokemonName, setPokemonName] = useState(""); // Variável para armazenar o nome do Pokémon
  const [pokemon, setPokemon] = useState({}); // Variável para armazenar os dados do Pokémon

  useEffect(() => {
    if (pokemonName) {
      loadAPI();
    }
  }, [pokemonName]);

  function loadAPI() {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPokemon(data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className='container'>
      <header>
        <strong>Pokémon API</strong>
      </header>

      <h2>Bem vindo à Pokédex FATEC!</h2>
      <form onSubmit={(e) => {
        e.preventDefault(); // Impedir o envio do formulário padrão
        loadAPI();
      }}>
        <label>Digite o nome do Pokémon:
          <input
            type="text"
            onChange={(e) => setPokemonName(e.target.value)}
            value={pokemonName}
          />
        </label>
        <button type="submit">Pesquisar</button>
      </form>

      <div>
        <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        <div>Name: {pokemon.name}</div>
        <div>N.º {pokemon.id}</div>
        <div>Peso: {pokemon.weight / 10}kg</div>
        <div>Altura: {pokemon.height / 10}m</div>
      </div>
    </div>
  );
}

export default App;