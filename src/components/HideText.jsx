import React, { useState } from 'react'

function HideText() {

     const [isvisible, setisvisible] = useState(true);


function change(){
    setisvisible(!isvisible)
    
}

  return (
    <>
    <h1>hide text:</h1>
    <button onClick={change}>change</button>
    <p>{isvisible? "hello": ""}</p>
    
    
    </>
  )
}

export default HideText