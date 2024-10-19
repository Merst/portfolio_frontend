import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
        <Navbar />
      <div className="text-slate-800 bg-slate-100 px-20">
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
