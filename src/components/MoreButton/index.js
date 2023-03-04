import React, { useContext } from 'react'
import { Context } from '../Context'
import './styles.css'

export default function MoreButton({text, sectionId}) {
    const moveTo = useContext(Context);

  return (
    <button onClick={() => moveTo(sectionId)}>{text}</button>
  )
}
