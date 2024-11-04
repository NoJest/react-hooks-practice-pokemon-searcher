import React from "react";

function Search({setSearchPokemon}) {
  function handleInput(e){
    setSearchPokemon(e.target.value)
  }
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleInput} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
