import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function About() {
const navigate = useNavigate()
const a = true
const move =()=>{
if(a){
  navigate("/profile/213324")
}
}

    
  return (
    <div>
      <h1>about</h1>
      <button onClick={move}>move</button>
    </div>
  )
}
