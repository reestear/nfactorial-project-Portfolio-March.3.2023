import React from 'react'
import Period from '../Period'
import SectionName from '../SectionName'

export default function Experience() {
    const periods = [
        {
            id: 1,
            year: '2021-2022',
            role: 'The Role at the Company',
            place: 'Country, City',
            text: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio."
        },
        {
            id: 2,
            year: '2020-2019',
            role: 'The Role at the Company',
            place: 'Country, City',
            text: "I'm software developer and this is my portfolio."
        },
        {
            id: 3,
            year: '2019',
            role: 'The Role at the Company',
            place: 'Country, City',
            text: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio."
        }
    ]
  return (
    <div>
        <SectionName text = {"Experience"}></SectionName>
        {
            periods.map((item) => <Period year={item.year} role={item.role} place={item.place} text={item.text}></Period>)
        }
    </div>
  )
}
