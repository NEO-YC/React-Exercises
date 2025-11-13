import React, {useEffect, useState } from 'react'

function UseEffect1() {

const [time, setTime] = useState(new Date());



useEffect(() => {
  const timerID = setInterval(() => setTime(new Date()), 1000);
  console.log("useEffect render");
  
  return () => clearInterval(timerID);
}, []);


   return (
    <>
    <h1>{time.toLocaleTimeString()}</h1>
    </>
  )
}

export default UseEffect1;