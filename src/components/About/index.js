import React from 'react'
import './styles.css'
import CAT_IMG from '../../assets/cat.jpg'
import SectionName from '../SectionName'
import SubSection from '../SubSection'
import List from '../List'

export default function About() {
    const txt1 = "Currently first year student at the Nazarbayev University. "
    const txt2 = "Majoring in Computer Science and working to enhance my Dev Skills. "
    const txt3 = "I love programming and want to become rich af as soon as possible. "
  return (
    <div className='About'>
        <div className='Info'>
            <SectionName text = {"About Me"}></SectionName>
            <SubSection texts = {[txt1, txt2, txt3]}></SubSection>
            <div style={{padding: '15px'}}></div>
            <div className='Lists'>
                <List text = "Spotify" link = {'https://open.spotify.com/user/312crx2mhuznxfyu2xvmed5eahhu'}></List>
                <List text = "GitHub" link = {'https://github.com/reestear'}></List>
                <List text = "Reddit" link = {'https://www.reddit.com/user/ruslahnq'}></List>
                <List text = "Kaspi: +7-708-932-9764"></List>
            </div>
        </div>
        <div className='Image'>
            <img src={CAT_IMG} alt = "profile image"></img>
        </div>
    </div>
  )
}
