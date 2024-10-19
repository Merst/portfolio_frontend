import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div className="text-slate-800">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
