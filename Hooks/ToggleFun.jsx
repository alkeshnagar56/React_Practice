import React, { useState } from 'react'

const ToggleFun = () => {

    const[on,Seton] = useState(true);

  return (
    <>
    {on && <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur</p>}
    <button onClick={()=>{Seton(!on)}}>{on? "Hide Content" : "Show Content"}</button>
    </>
)
}

export const OnOff = () => {
    const[OnOff,SetOnOff] = useState(true);
    return(
        <>
        <p>{ OnOff ? "ON" : "OFF" }</p>
        <button onClick={()=>{SetOnOff(!OnOff)}}>{OnOff ? "OFF" : "ON"}</button>
        </>
    )
}

export default ToggleFun