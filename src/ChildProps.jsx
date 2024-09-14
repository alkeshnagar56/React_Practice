import React from 'react'

const ChildProps = (props) => {
    const {Data}=props;
  return (
    <>
       <p>{Data.Name}</p>
       <p>{Data.Course}</p>
       <p>{Data.Year}</p>
       <p>{Data.Contact}</p>

    </>
  )
}

export default ChildProps