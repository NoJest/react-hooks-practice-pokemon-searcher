import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection( {pokemon, setPokemon, filteredPokemon}) {

  const mappedPokemon = filteredPokemon.map(pokemon => 
  <PokemonCard 
  key={pokemon.id} 
  name={pokemon} 
  pokemon={pokemon} 
  img= {pokemon.sprites.front}/>)

  return (
    <Card.Group itemsPerRow={6}>
        { mappedPokemon }
    </Card.Group>
  );
}

export default PokemonCollection;
