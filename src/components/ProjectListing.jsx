import React from 'react';
import SkillChip from './SkillChip';
import { Link } from 'react-router-dom';

const ProjectListing = ({project}) => {
  return (
    <>
      <div className="text-black bg-white rounded-xl shadow-md relative mt-4">
        <div className="flex p-4">
          {/* Left part of the box */}
          <div className="basis-4/5 border-r border-gray-500">
            <h3 className="mb-6 text-xl font-bold">{project.title}</h3>
            
            <div className="mb-5">{project.summary}</div>

            <div className="flex flex-col lg:flex-row justify-between">
              <Link
                to={`${project.github_link}`}
                className="bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-lg text-center text-sm">
                  Source Code
              </Link>      
            </div>
          </div>

          {/* Right part of the box */}
          <div className="basis-1/5 pl-2">
            {project.skills.map((skill) => (
              <SkillChip key={project.url + skill.url} skill={JSON.stringify(skill)}/>))}
          </div>
        </div>        
      </div>
    </>
  )
}

export default ProjectListing