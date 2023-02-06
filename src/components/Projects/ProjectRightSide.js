import React from 'react'
import ProjectImage from './ProjectImage'

const ProjectRightSide = (props) => {
  return (
    <a href={props.projectLink} className='flex w-full h-80 rounded-3xl my-4 justify-between'>
      <div className='basis-1/2 p-2 m-12'>
      <h1 className='text-4xl font-semibold pb-4'>{props.title}</h1>
        <p className='text-3xl pb-4'>{props.techStack}</p>
        <p className='text-2xl'>{props.description}</p>
      </div>
      <div className='flex p-8 m-5'>
        <ProjectImage 
        left="false"
        primaryImage={props.primaryImage} 
        secondaryImage={props.secondaryImage}
        primaryImageAlt={props.primaryImageAlt}
        secondaryImageAlt={props.secondaryImageAlt}/>
      </div>
    </a>
  )
}

export default ProjectRightSide