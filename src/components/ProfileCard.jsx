import React from 'react';
import plant from '../assets/images/plant.jpg';
import { NavLink } from 'react-router-dom';

const ProfileCard = () => {
  const textColour = "text-black";

  const myName = `${textColour} font-normal text-lg md:text-6xl uppercase mb-2`;
  const myTitle = `${textColour} font-normal text-lg md:text-2xl mb-2 pl-8`;
  const myInformations = `${textColour} font-normal text-lg md:text-xl mb-6 pl-12`;
  return (
    <>
      <div className="bg-slate-100 max-w-screen-7xl mx-auto pt-6">
        <div className="container-xl lg:container m-auto">
          <div className="flex items-center p-6">
            <div className="flex justify-center px-4">
              <img className="size-80 object-cover pr-4" src={plant} alt="Profile Picture" />
            </div>
            <div className=""> 
              <p className={myName}> Stéphane Verville-Vohl </p>
              <p className={myTitle}> Software Engineer: Data | Cloud | Backend | DevOps </p>
              <div className={myInformations}>
                <p> Montréal, Québec, Canada </p>
                <p> stephane.verville.vohl@gmail.com </p>
                <NavLink to="https://github.com/Merst" className="text-blue">
                  Github Profile
                </NavLink>
                <br/>
                <NavLink to="https://www.linkedin.com/in/stephane-verville-vohl/" className="text-blue">
                  LinkedIn Profile
                </NavLink>
                <p> (514) 268-4807</p>
              </div>
            </div>                
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
