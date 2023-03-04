import React from 'react'
import MoreButton from '../MoreButton'
import './styles.css'

export default function Header() {
  return (
    <div className='head'>
        <h2>ruslan</h2>
        <div className='buttons'>
            <MoreButton text={"About"} sectionId={"about"}></MoreButton>
            <MoreButton text={"Experience"} sectionId={"experience"}></MoreButton>
            <MoreButton text={"Projects"} sectionId={"projects"}></MoreButton>
            <MoreButton text={"Contacts"} sectionId={"contacts"}></MoreButton>
        </div>
    </div>
  )
}
