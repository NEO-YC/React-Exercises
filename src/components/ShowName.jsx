import { useState } from "react";
import React from 'react'

function ShowName() {

const [name, setName] = useState("");   

function showname(){
    if (name===""){
        alert ("please enter your name")
    } else
        alert(name);
}





  return (
    <div>
        <h1>Show Name</h1>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={showname}>Show Name</button>
    </div>
  )
}

export default ShowName