import React from 'react';
import { useEffect, useState } from 'react';
import ProjectListing from './ProjectListing';
import Spinner from './Spinner';

const ProjectListings = ({isOlder = false}) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const apiUrl = isOlder
        ? '/api/projects/?older_project=true' 
        : '/api/projects/?older_project=false';

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <>
      <section className="bg-slate-100 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isOlder
                ? ('Recent projects (2022-present)') 
                : ('Older projects')
            }
          </h2>

            {loading 
              ? (<Spinner loading={loading} />) 
              : (<div className="flex flex-col p-6">
                  {projects.map((project) => (<ProjectListing key={project.url} project={project}/>))}
                </div>)
            }
        </div>
      </section>
    </>
  )
}
export default ProjectListings