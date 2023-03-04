import React from 'react'
import List2 from '../List2'
import './styles.css'

export default function Period({year, place, role, text}) {
  return (
    <div className='Period'>
        <div className='year'>
            <p>{year}</p>
        </div>
        <div className='Period-Infos'>
            <List2 text = {role}></List2>
            <p className='place'>{place}</p>
            <p className='Text'>{text}</p>
        </div>
    </div>
  )
}
