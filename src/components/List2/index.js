import React from 'react'
import './styles.css'
import CIRCLE_IMG2 from '../../assets/circle2.png'

export default function List2({text}) {
  return (
    <div className='List2'>
        <img src={CIRCLE_IMG2} alt = "circle img"></img>
        <p>{text}</p>
    </div>
  )
}
