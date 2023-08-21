import React from "react";

function New() {
  return (
    <div>
      <form action="/newpokesub" method="POST">

        Name: <input type="text" name="name" />
        <br />

        Image: <input type="text" name="img" />
        <br />
   
        <input type="submit" name="" value="Create Cat" />

      </form>
    </div>
  );
}

export default New;