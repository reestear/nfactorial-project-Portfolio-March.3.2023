import React from 'react'
import SectionName from '../SectionName'
import PROJ1_IMG from '../../assets/ToDo.png'
import PROJ2_IMG from '../../assets/AEScript.png'
import Project from '../Project'
import './styles.css'

export default function Projects() {
    // const [id, IMG, name, description, lists] = props;

    const projects = [
        {
            id: 0,
            IMG: PROJ1_IMG,
            name: "ToDo List",
            description: "Simple ToDo List in the base of prepared UI design by n!. There you can add new todos, mark them as done, and delete them as in other usual ToDo lists ",
            lists: [
                {
                    text: "GitHub Project",
                    link: 'https://github.com/reestear/nfactorial-Simple-ToDo-Feb.19.2023'
                },
                {
                    text: "Users: 1 (only me :))"
                }
            ]
        },
        {
            id: 1,
            IMG: PROJ2_IMG,
            name: "After Effects Script",
            description: "This script allows you to change the size(not the scale) of all the solid objects in one click and adjust hundreads and thousands of \"Time-Remap\" keyframes also in just one click in Adobe After Effects.",
            lists: [
                {
                    text: "GitHub Project",
                    link: 'https://github.com/reestear/ree-stear-s-AE-script'
                },
                {
                    text: "Users: 1 (only me :))"
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
