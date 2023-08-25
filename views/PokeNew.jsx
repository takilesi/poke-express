import React from 'react'

function PokeNew() {
    return (
        <div className="outerSpace">
          <form action={`/newsubmit`} method="POST">
            Name: <input type="text" name="name"/>
            <br />
            Img: <input type="text" name="img"/>
            <br />
        
            <br />
            <input type="submit" name="" value="New Pokemon" />
    
          </form>
        </div>
      );
}

export default PokeNew