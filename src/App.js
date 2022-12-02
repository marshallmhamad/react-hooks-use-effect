import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";

function App() {
  const [click,setClick] = useState(false)
  useEffect(() => {
    console.log("useEffect called");
  });

  console.log("Component rendering");

  return (
    <div>
      <button onClick={()=> setClick(!click)}>Click Me</button>
  <DogPics click={click}/>
    </div>

  )
}

export default App;