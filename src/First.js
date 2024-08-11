import React from 'react'
import './index.css'
export default function First(props) {

  return (
         <>
        <div className='container'>
        <h1 className='heading'> {props.heading}</h1>
      <img src={props.url} alt="dsa" className='image'></img><br/>
      <h4 className='name'> Author: {props.name}</h4>
      <p className='desc'> Description: {props.desc}</p>
    </div>
    </>
    
  )
}