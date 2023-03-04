import React from 'react'
import './styles.css'
import CAT_IMG from '../../assets/cat.jpg'
import SectionName from '../SectionName'
import SubSection from '../SubSection'
import List from '../List'

export default function About() {
    const txt1 = "I'm software developer and this is my portfolio. "
    const txt2 = "I'm software developer and this is my portfolio. I'm software developer "
    const txt3 = "and this is my portfolio. I'm software developer and this is my portfolio."
  return (
    <div className='About'>
        <div className='Info'>
            <SectionName text = {"About Me"}></SectionName>
            <SubSection texts = {[txt1, txt2, txt3]}></SubSection>
            <div style={{padding: '15px'}}></div>
            <div className='Lists'>
                <List></List>
                <List></List>
                <List></List>
                <List></List>
            </div>
        </div>
        <div className='Image'>
            <img src={CAT_IMG} alt = "profile image"></img>
        </div>
    </div>
  )
}
