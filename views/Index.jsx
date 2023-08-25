import React from 'react'; 
// import "./style.css";

function Index(props) {
  
  const properNounPokemon = (pokemon) => {
    return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
  }
    
  return (
    <div className="outerSpace">
        <link rel="stylesheet" type="text/css" href="/style.css" />
      <div className="innerSpace">

          
            <h1 className="">See All The Pokemon</h1>
            <a href="/new">Add New Pokemon </a>
            <br></br>
            <form action={`/addlist`} method="POST">
              <input className='inputSubmit' type="submit" name="" value="Add Data" />
            </form>
            
            {props.vermin.map((pokemon, i) => {
              
            return (
              <div key={i}>
                <a href={`/pokemon/${pokemon.id}`}>
                  <h2>{properNounPokemon(pokemon.name)}</h2>
                </a>

              </div>
            );
          })}   
      </div>
    </div>
  )
}

export default Index