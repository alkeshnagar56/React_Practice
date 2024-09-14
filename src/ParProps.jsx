import React from 'react'
import ChildProps from './ChildProps'

const ParProps = () => {

    const MyData = {
        Name:"Alkesh Nagar",
        Course:"BCA+",
        Year:"2nd Year",
        Contact: "me nahi bataungaa"
    }
  return (
    <ChildProps Data={MyData}/>
  )
}

export default ParProps