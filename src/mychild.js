import React from 'react'
import Nestedchild from './nestch.js'

function mychild(props) {
  return (
    <div>
        <h1>nameL:{props.name}</h1>
       <h1> myskill:{props.skills}</h1>
       <Nestedchild location="banglore"></Nestedchild>
    </div>
  )
}

export default mychild