
import React, { useState } from 'react'


function Counter() {

     const [counter, setCounter] = useState(0)

 function increase() {
   setCounter(counter + 1)
   console.log(counter)
 }

 function decrease() {
   setCounter(counter - 1)
   console.log(counter)
 }




  return (
    <> 
        <h1>useState=</h1>
     <button onClick={increase}>increase</button>
     <button onClick={decrease}>decrease</button>
     <p>{counter}</p>
     </>
  )
}




export default Counter