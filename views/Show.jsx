import React from "react";

function Show(props) {
  
    const properNounPokemon = (pokemon) => {
        return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
    }

  return (
    <div className="outerSpace">
      <link rel="stylesheet" type="text/css" href="/style.css" />
      <div className="title">
        <p>Gotta Catch 'Em All</p>
      </div>

      <div className="menuItems">
        <br></br>
        <a className="words" href={`/pokemon`}>Back to Index</a>
        <br></br>
        <a className="words" href={`/update/${props.pokemon.id}`}>Update</a>
        <br></br>
              {/* encapsulate DELETE in a form tag  */}
        <form action={`/delete/${props.pokemon.id}?_method=DELETE`} method="POST">
          <input className='inputSubmit' type="submit" name="" value="Delete Pokemon" />
        </form>
      </div>
        
        

      <h2 className="nameLabel">
        {" "}
        Name: {properNounPokemon(props.pokemon.name) }
      </h2>
      
         
      <img className="img" src={`${props.pokemon.img}.jpg`} />
    </div> // end outerSpace
  );
}

export default Show;