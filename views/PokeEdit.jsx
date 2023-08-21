import React from 'react'

function PokeEdit(props) {
    return (
        <div>
          <form action={`/updatesubmit/${props.poke.id}?_method=PUT`} method="POST">
            Name: <input type="text" name="name" value={props.poke.name} />
            <br />
            Img: <input type="text" name="img" value={props.poke.img}/>
            <br />
        
            <br />
            <input type="submit" name="" value="Edit Pokemon" />
    
          </form>
        </div>
      );
}

export default PokeEdit