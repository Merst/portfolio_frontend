import React from 'react';
import SkillChip from './SkillChip';
import { Link } from 'react-router-dom';

const ProjectListing = ({project}) => {
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative m-2">
        <div className="flex p-4">
          {/* Left part of the box */}
          <div className="flex-auto w-2">
            <h3 className="mb-6 text-xl font-bold">{project.title}</h3>
            
            <div className="mb-5">{project.summary}</div>

            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <Link
                to={`${project.github_link}`}
                className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm">
                  Source Code
              </Link>      
            </div>
          </div>

          {/* Cheeky little line */}
          <div className="border border-gray-500 mr-5"></div>

          {/* Right part of the box */}
          <div className="flex-auto w-14">
            {project.skills.map((skill) => (
              <SkillChip key={project.url + skill.url} skill={JSON.stringify(skill)}/>))}
          </div>
        </div>        
      </div>
    </>
  )
}

export default ProjectListing