import React from 'react'
import ProjectBox from './ProjectBox'
import {projects} from '../assets/localdb.js'


export default function ProjectSection() {
    return (
        <div  id='projects' className="project-container">
            {projects.map((prjt, indx) => <ProjectBox key={indx} detail={prjt} />)}
        </div>
    )
}
