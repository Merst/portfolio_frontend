import React from 'react';
import ProjectListings from '../components/ProjectListings';
import ProfileCard from '../components/ProfileCard';

const HomePage = () => {
  return (
    <>
      <div>
        <ProfileCard />
        <ProjectListings />
      </div>
    </>
  )
}

export default HomePage
