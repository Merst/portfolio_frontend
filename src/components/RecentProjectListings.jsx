import React from 'react';
import SkillLegend from './SkillLegend';
import ProjectListing from './ProjectListing';

const RecentProjectListings = ({projects, baseTextStyle}) => {
  return (
    <>
      <h2 className={`${baseTextStyle} text-3xl font-bold mt-6`}>
        Recent projects (2022-present)
      </h2>

      <p className={`${baseTextStyle} mx-2 my-6`}>
        This is a list of projects that I've been working on since my recent self-studies.
        The main objective of the following projects is to practice the various facets of
        software engineering spanning a wide variety of different technologies.
      </p>
      
      <div className="flex flex-col">
        {projects.map((project) => (<ProjectListing key={project.url} project={project}/>))}
      </div>
      
      <SkillLegend />
    </>
  )
}

export default RecentProjectListings
