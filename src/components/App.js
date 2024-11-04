import React from "react";
import PokemonPage from "./PokemonPage";
import {useState, useEffect} from 'react'
function App() {

  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setLoading] = useState (true);

  async function getPokemon() {
    const response = await fetch ('http://localhost:3001/pokemon');
    const pokemonData = await response.json();
    setPokemon(pokemonData)
    setLoading(false)
  };

  useEffect( () => {
    getPokemon()
  }, []);

  if (isLoading) {
    return (<h2>LOADING.....Please wait.....</h2>)
  };


  return (
    <div className="App">
      <PokemonPage pokemon = {pokemon} setPokemon = {setPokemon}/>
    </div>
  );
}

export default App;
