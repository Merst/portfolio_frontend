import React from 'react';
import SkillLegend from './SkillLegend';
import ProjectListing from './ProjectListing';

const RecentProjectListings = ({projects}) => {
  return (
    <>
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        Recent projects (2022-present)
      </h2>

      <p>
        This is a list of projects that I've been working on since my recent self-studies.
        The main objective of the following projects is to practice the various facets of
        software engineering spanning a wide variety of different technologies.
      </p>
      
      <div className="flex flex-col p-6">
        {projects.map((project) => (<ProjectListing key={project.url} project={project}/>))}
      </div>
      
      <SkillLegend />
    </>
  )
}
    
export default RecentProjectListings
