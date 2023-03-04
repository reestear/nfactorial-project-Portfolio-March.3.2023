import React from 'react'
import './styles.css'
export default function Intro() {
    const text1 = "hi, i'm ruslan tasmukhanov, "
    const text2 = "i build things for the Web."
  return (
    <div className='Intro'>
        <div className='pd20-20'>
            <h2>{text1}</h2>
            <h2>{text2}</h2>
        </div>
        <p className='pd20-20' style={{fontSize: '15px'}}>I'm software developer and u're looking to my portfolio.</p>
        <button className='IntroBtn pd20-20'>Check out my CV</button>
    </div>
  )
}
