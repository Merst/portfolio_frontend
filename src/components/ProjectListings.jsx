import React from 'react';
import { useEffect, useState } from 'react';
import SkillLegend from './SkillLegend';
import OlderProjectListings from './OlderProjectListings';
import RecentProjectListings from './RecentProjectListings';

const ProjectListings = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects/');
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    }
    fetchProjects();
  }, []);
  
  let recentProjects = projects.filter(project => !project.older_project);
  let olderProjects = projects.filter(project => project.older_project);
  const textStyle = "text-slate-700 text-center";

  return (
    <>
      <section className="bg-slate-100">
        <div className="container-xl lg:container m-auto">
          <RecentProjectListings projects={recentProjects} baseTextStyle={textStyle} />
          <OlderProjectListings projects={olderProjects} baseTextStyle={textStyle} />
        </div>
      </section>
    </>
  )
}
export default ProjectListings
