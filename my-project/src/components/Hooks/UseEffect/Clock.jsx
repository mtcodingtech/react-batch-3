import React, { useEffect, useState } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date());

    // useEffect(() => {
    //     const intervalTime = setInterval(() => {
    //         setTime(new Date())
    //     }, 1000);
    //     return () => {
    //         console.log("clearInterval")
    //         clearInterval(intervalTime)
    //     }
     
    // }, [time])
    console.log(time)

    const formatTime = () => {
        const hours = time.getHours();
        const mins = time.getMinutes();
        const secs = time.getSeconds();
        let format = hours >= 12 ? "PM" : "AM";
        return `${hours}: ${mins}: ${secs} ${format}`
    }
  return (
   <>
        <h1>{formatTime()}</h1>
   </>
  )
}

export default Clock