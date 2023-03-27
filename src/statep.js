import React ,{useState} from 'react'
import {Child}  from './statechild.js';


export const Parent = () => {
  let employees = [
     { id: 11, name:"Abhinav", salary:75000 }, 
     { id: 2131, name:"Gaurav", salary:62000 },
     { id: 3012, name:"Raj", salary:32000 }
    ]

    const [greet,setGreet]=useState([])

    var arr=(a,b)=>{
   let emp=employees.filter((value,index)=>{
      return value.salary < a.salary
   })
   console.log(emp)
   setGreet(emp)
    }

  return (
    <div>
      <Child  greet={employees} btn={arr}/>
      {greet.map((value,index)=>{
          return <div key={index}>
          <h2>{value.id}</h2>
          <h3>{value.name}</h3>
          <p>{value.salary}</p>
          </div>
      })
    }
      <div id="section">

      </div>
    </div>
  )
}