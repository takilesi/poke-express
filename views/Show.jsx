import React from "react";

function Show(props) {
  
    const properNounPokemon = (pokemon) => {
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }

  return (
    <div>
        {/* <a href="../">go back</a> */}
      <h1>Gotta Catch 'Em All</h1>
      <a href={`/pokemon`}>Back to Index</a>
      <br></br>
      <a href={`/update/${props.pokemon.id}`}>Update</a>
      <br></br>
             {/* encapsulate DELETE in a form tag  */}
      <form action={`/delete/${props.pokemon.id}?_method=DELETE`} method="POST">
        <input className='inputSubmit' type="submit" name="" value="Delete Pokemon" />
      </form>
      <h2>
        
        {" "}
        Name: {properNounPokemon(props.pokemon.name) }
        
      </h2>
     
        <br></br>
        <img src={`${props.pokemon.img}.jpg`} />
    </div>
  );
}

export default Show;