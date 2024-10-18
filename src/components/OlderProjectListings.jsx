import React from 'react';
import ProjectListing from './ProjectListing';
import SkillLegend from './SkillLegend';

const OlderProjectListings = ({projects}) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Older Projects
      </h2>
      <p>
        Most of the following projects were developped during my Bachelor's 
        degree at Université de Montréal, either alone or in teams of up to 6.
        My upcoming plans for these projects is to either fleshen them out, 
        or to practice operational tasks, depending on the project.
      </p>

      <div className="flex flex-col p-6">
        {projects.map((project) => (<ProjectListing key={project.url} project={project}/>))}
      </div>
      <SkillLegend />
    </>
  )
}

export default OlderProjectListings
