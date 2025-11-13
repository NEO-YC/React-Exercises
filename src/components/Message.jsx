import React, { useState } from 'react'

function Message() {
     const [word, setWord] = useState("hello")

     function change(){
        if(word=="hello"){ 
        setWord("goodbye")}
        if(word=="goodbye"){
            setWord("hello")
        }
        
     }









  return (
    <>
    <h1>message usestate:</h1>
    <button onClick={change}>change</button>
    <p>{word}</p>
    
    
    
    </>
  )
}

export default Message