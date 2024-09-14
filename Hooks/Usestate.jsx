import React, { useState } from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0);
    const increase=()=>{
        setCount(count+1)    
    }
    const decrease=()=>{
        setCount(count-1)
    }
  return (
    <>
    <button onClick={increase}>Incriment</button>
    <button onClick={decrease}>Decriment</button>
    <p>{count}</p>
    
    </>
)
}

export default Usestate