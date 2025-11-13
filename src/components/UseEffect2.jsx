import React from 'react'

function UseEffect2() {


const [time, setTime] = React.useState(10);



    React.useEffect(() => {
        const timerID = setInterval(() => setTime((x) => x - 1), 100);
        if(time===5){
            alert('breath');
        }
        if (time === 0) {
            clearInterval(timerID);
        }
        return () => clearInterval(timerID);

    }, [time]);


    


  return (
    <div>{time}</div>
  )
}

export default UseEffect2