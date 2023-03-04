import React from 'react'
import './styles.css'
export default function Outro() {
    function handleOnClick(){
        window.location.replace('mailto:ruslahn.q@gmail.com?subject=Mail from portfolio&body=Hello, ruslan!')
    }
  return (
    <div className='Outro'>
        <div className='pd20-20'>
            <h2>Get Contact!</h2>
        </div>
        <p className='pd20-20' style={{fontSize: '15px'}}>Nothing is impossible with me.</p>
        <button onClick={handleOnClick} className='OutroBtn pd20-20'>Get in Touch</button>
    </div>
  )
}
