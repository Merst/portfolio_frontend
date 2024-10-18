import React from 'react';
import plant from '../assets/images/plant.jpg';
import { NavLink } from 'react-router-dom';
import { FaLocationDot} from 'react-icons/fa6';
import { FaAt, FaPhone, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const ProfileCard = () => {
  const baseTextStyle = "text-black font-normal text-lg";
  const iconsStyle = "inline text-lg mr-3";
  const linkStyle = "text-blue-700 hover:text-blue-900 underline";

  const myName = `${baseTextStyle} md:text-6xl uppercase mb-2 text-center`;
  const myTitle = `${baseTextStyle} md:text-2xl mb-2 pl-8`;
  const myInformations = `${baseTextStyle} md:text-xl mb-6 pl-12`;
  return (
    <>
      <div className="bg-slate-100 max-w-screen-7xl mx-auto pt-6">
        <div className="container-xl lg:container m-auto">
          <div className="flex items-center">
            {/* Left side of ProfileCard */}
            <div className="flex justify-center">
              <img className="size-80 object-cover pr-4" src={plant} alt="Profile Picture" />
            </div>

            {/* Right side of ProfileCard */}
            <div className=""> 

              <p className={myName}> Stéphane Verville-Vohl </p>

              <p className={myTitle}> Software Engineer: Data | Cloud | Backend | DevOps </p>

              <div className={myInformations}>
                <p>
                  <FaLocationDot className={iconsStyle} />
                  Montréal, Québec, Canada
                </p>

                
                <p>
                  <NavLink to="mailto:stephane.verville.vohl@gmail.com">
                    <FaAt className={iconsStyle} />
                    <span className={linkStyle}>stephane.verville.vohl@gmail.com</span>
                  </NavLink>
                </p>

                <NavLink to="https://github.com/Merst">
                  <FaGithubSquare className={iconsStyle} />
                  <span className={linkStyle}>Github Profile</span>
                </NavLink>

                <br/>

                <NavLink to="https://www.linkedin.com/in/stephane-verville-vohl/">
                  <FaLinkedin className={iconsStyle} />
                  <span className={linkStyle}>LinkedIn Profile</span>
                </NavLink>

                <p> 
                  <FaPhone className={iconsStyle} />
                  (514) 268-4807
                </p>
              </div>
            </div>                
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
