import React from 'react';
import ProjectListing from './ProjectListing';
import SkillLegend from './SkillLegend';

const OlderProjectListings = ({projects, baseTextStyle}) => {
  return (
    <>
      <h2 className={`${baseTextStyle} text-3xl font-bold mt-6`}>
        Older Projects
      </h2>
      <p className={`${baseTextStyle} mx-2 my-6`}>
        Most of the following projects were developped during my Bachelor's 
        degree at Université de Montréal, either alone or in teams of up to 6.
        My upcoming plans for these projects is to either fleshen them out, 
        or to practice operational tasks, depending on the project.
      </p>

      <div className="flex flex-col">
        {projects.map((project) => (<ProjectListing key={project.url} project={project}/>))}
      </div>
      <SkillLegend />
    </>
  )
}

export default OlderProjectListings
