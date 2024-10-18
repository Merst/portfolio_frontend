import React from 'react';
import ProjectListings from '../components/ProjectListings';
import ProfileCard from '../components/ProfileCard';

const HomePage = () => {
  return (
    <>
      <div className='bg-slate-100 px-20'>
        <ProfileCard />
        <ProjectListings />
      </div>
    </>
  )
}

export default HomePage
