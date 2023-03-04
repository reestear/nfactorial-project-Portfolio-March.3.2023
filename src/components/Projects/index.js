import React from 'react'
import SectionName from '../SectionName'
import PROJ1_IMG from '../../assets/project1.png'
import PROJ2_IMG from '../../assets/project2.png'
import Project from '../Project'
import './styles.css'

export default function Projects() {
    // const [id, IMG, name, description, lists] = props;

    const projects = [
        {
            id: 0,
            IMG: PROJ1_IMG,
            name: "Project Name",
            description: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio.",
            lists: [
                {
                    text: "Lorem Ipsum Description Text"
                },
                {
                    text: "Lorem Ipsum Description Text"
                }
            ]
        },
        {
            id: 1,
            IMG: PROJ2_IMG,
            name: "Project Name",
            description: "I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio. I'm software developer and this is my portfolio.",
            lists: [
                {
                    text: "Lorem Ipsum Description Text"
                },
                {
                    text: "Lorem Ipsum Description Text"
                }
            ]
        }
    ]
  return (
    <div>
        <SectionName text = {"Projects I've Worked On"}></SectionName>
        <div className='ProjectList'>
            {
                projects.map((project) => <Project id = {project.id} IMG = {project.IMG} name = {project.name} description={project.description} lists={project.lists}></Project>)
            }
        </div>
    </div>
  )
}
