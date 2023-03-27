import React from 'react'
import Mychild from './mychild.js'

function myparent(props) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
         <h1>Your Emp.ID:{props.empid}</h1>
      <Mychild skills ="javadeveloper"></Mychild>
    </div>
  )
}

export default myparent