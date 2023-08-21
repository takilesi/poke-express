import React from 'react'

function CatsNewIndex(props) {
  return (
    <div>CatsNewIndex
        <h1>cat</h1>{props.cats.map((ele)=>{
            return(
                <p>{ele.name}</p>
            )
        })}
    </div>
  )
}

export default CatsNewIndex