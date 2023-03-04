import React from 'react'
import Period from '../Period'
import SectionName from '../SectionName'

export default function Experience() {
    const periods = [
        {
            id: 3,
            year: '2022-2023',
            role: 'Student at n! School',
            place: 'Online',
            text: "I've started my first stepts into the world of Dev programming by the help of this course and this school. I can't imagine in which process I could be at this moment, even maybe not starting the journey at all without their help -- the course, school and teachers."
        },
        {
            id: 1,
            year: '2021-2026',
            role: 'Student at NU',
            place: 'Kazakhstan, Astana',
            text: "I've decided to apply to this university in the last minutes of the deadline. So, it was very likely that I will have different fortune than the one I have now. However, I love this university so much, because it gives all the opportunities and a good environment"
        },
        {
            id: 2,
            year: '2017-2021',
            role: 'Student at Oral BIL',
            place: 'Kazakhstan, Oral',
            text: "KTL is one of the best school, no other opinions are take into account :)"
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
