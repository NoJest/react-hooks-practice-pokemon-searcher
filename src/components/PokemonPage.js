import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import {useState} from 'react';

function PokemonPage( { pokemon, setPokemon}) {
  
  const [searchPokemon, setSearchPokemon] = useState("")

  const filteredPokemon = pokemon.filter(pokemon => pokemon.name.toLowerCase().startsWith(searchPokemon.toLowerCase()))
  
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm pokemon= {pokemon} setPokemon= {setPokemon} />
      <br />
      <Search setSearchPokemon={setSearchPokemon} />
      <br />
      <PokemonCollection pokemon = {pokemon} setPokemon = {setPokemon} filteredPokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
