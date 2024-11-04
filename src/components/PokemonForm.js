import React from "react";
import { Form } from "semantic-ui-react";
import {useState} from 'react'

function PokemonForm({pokemon, setPokemon}) {

  const [name, setName] = useState('')
  const [hp, setHp] = useState('')
  const [frontUrl, setFrontUrl] = useState('')
  const [backUrl, setBackUrl] = useState('')
  
  const handleChangeName = (event) => setName(event.target.value)
  const handleChangeHp = (event) => setHp(event.target.value)
  const handleChangeFrontUrl = (event) => setFrontUrl(event.target.value)
  const handleChangeBackUrl = (event) => setBackUrl(event.target.value)

  function resetForm(){
    setName("")
    setHp("")
    setFrontUrl("")
    setBackUrl("")
  }

  async function handleSubmit(event){
    event.preventDefault()
    const newPokemon = {
      name:name,
      hp:hp,
      sprites:{
      front: frontUrl,
      back: backUrl}
    }

    try{
      const response = await fetch('http://localhost:3001/pokemon', {
            method:'POST',
            headers: {'Content-Type': 'application/json', 'Accept':'application/json'},
            body: JSON.stringify(newPokemon)
      })

      const data= await response.json()

      const updatedPokemon = [...pokemon, data]

      setPokemon(updatedPokemon)

      resetForm()
    } catch (error){
      console.warn(error)
      alert("something is amiss Ash")
    }

    
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal" >
          <Form.Input fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={name} 
          onChange={handleChangeName}/>
          <Form.Input 
          fluid label="hp" 
          placeholder="hp" 
          name="hp" 
          value={hp} 
          onChange={handleChangeHp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={frontUrl}
            onChange={handleChangeFrontUrl}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={backUrl}
            onChange={handleChangeBackUrl}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
