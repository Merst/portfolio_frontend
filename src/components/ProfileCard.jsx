import React from 'react'
import plant from '../assets/images/plant.jpg';
const ProfileCard = () => {
  const myName = "font-medium text-gray-600 text-lg md:text-6xl uppercase mb-2";
  const myTitle = "font-normal text-gray-600 text-lg md:text-3xl mb-4"
  const myInformations = "font-normal text-gray-600 text-lg md:text-xl mb-2"
  return (
    <>
      <div className="bg-slate-500 container max-w-screen-xl mx-auto px-4">
        <div className="flex items-center my-4">
          <div className="flex justify-center px-4">
            <img className="size-80 object-cover" src={plant} alt="Profile Picture" />
          </div>
          <div>
            <p className={myName}> Stéphane Verville-Vohl </p>
            <p className={myTitle}> Software Engineer: Data | Cloud | Backend | DevOps </p>
            <div className={myInformations}>
              <p> Montréal, Québec, Canada </p>
              <p> stephane.verville.vohl@gmail.com </p>
              <p> Github profile </p>
              <p> LinkedIn profile </p>
              <p> (514) 268-4807</p>
            </div>
          </div>                
        </div>
      </div>
    </>
  )
}

export default ProfileCard
