import React from 'react'
import './styles.css'
import CIRCLE_IMG from '../../assets/circle.png'

export default function List({text, link}) {
  return (
    <div className='List'>
        <img src={CIRCLE_IMG} alt = "circle img"></img>
        <a href={link}>{text}</a>
    </div>
  )
}
