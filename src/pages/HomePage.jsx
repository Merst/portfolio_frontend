import React from 'react';
import Hero from '../components/Hero';
import ProjectListings from '../components/ProjectListings';
import ProfileCard from '../components/ProfileCard';

const HomePage = () => {
  return (
    <>
      <ProfileCard />
      <ProjectListings isOlder={true} />
      <ProjectListings isOlder={false} />
    </>
  )
}

export default HomePage
