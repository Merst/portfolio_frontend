import React from 'react';
import Hero from '../components/Hero';
import JobListings from '../components/ProjectListings';

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProjectListings isOlder={true} />
      <ProjectListings isOlder={false} />
    </>
  )
}

export default HomePage
