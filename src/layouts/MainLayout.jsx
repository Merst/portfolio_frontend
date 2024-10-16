import React from 'react';
import Navbar from '../components/Navbar';
import Novbar from '../components/Novbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default MainLayout
