import { useState, useEffect } from "react";
import './style.css';

function App() {
  const [pokemon, setPokemon] = useState({}); // Initialize pokemon state as an object
  let searchPokemon = document.getElementByID('searchPokemon').value;

  function loadAPI() {
  let url = "https://pokeapi.co/api/v2/";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        setPokemon(res);
      })
      .catch(err => console.log(err));
  }


  return (
    <div className='container'>
      <header>
        <strong>Pokémon API</strong>
      </header>

      <h2>Bem vindo à Pokédex FATEC!</h2>
      <form onSubmit={loadAPI()}>
      <label>Digite o nome do Pokémon:<input></input></label>
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
