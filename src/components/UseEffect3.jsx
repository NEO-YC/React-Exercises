import React from 'react'

function UseEffect3() {

  const [msg, setmsg] = React.useState();

  
 let stringarr = ['Idan', 'is', 'stupid', 'bitch','nigga'];

 

 React.useEffect(() => {
        const Message = setInterval(() => {
            let rnd= Math.floor(Math.random() * stringarr.length);
            setmsg(stringarr[rnd]);
        }, 1000);

        return () => clearInterval(Message);

    }, []);
  

  return (
    <> 

    <h1>{msg}</h1>
    </> 
  )
}

export default UseEffect3