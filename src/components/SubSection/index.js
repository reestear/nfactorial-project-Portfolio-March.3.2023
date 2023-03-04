import React from 'react'
import './styles.css'

export default function SubSection({texts}) {
  return (
    texts.map((text) => <p>{text}</p>)
  )
}
