import React from "react";
import { Card } from "semantic-ui-react";
import {useState} from 'react'

function PokemonCard({pokemon}) {
  const [sprite, setSprite] = useState(pokemon.sprites.front)
  function handleClick(){
    setSprite(sprite => sprite === pokemon.sprites.front ? pokemon.sprites.back : pokemon.sprites.front)
  }

  return (
    <Card>
      <div>
        <div className="image">
          <img src={sprite} alt="oh no!" onClick={handleClick}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red"> </i> 
            {pokemon.hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
