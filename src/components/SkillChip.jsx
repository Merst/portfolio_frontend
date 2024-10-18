import React from 'react';
import { useEffect, useState } from 'react';


const SkillChip = ({skill}) => {  

  {/* Find a better way than hard coding using the 
    category names, something like a config file */}
  const bgColours = {
    "Programming Language" : "bg-orange-500",
    "Framework" : "bg-green-500",
    "N/A" : "bg-red-500",
    "Development Tool" : "bg-purple-500",
  };

  const skillObj = JSON.parse(skill);
  const background = bgColours[skillObj.category.name];

  return (
    <>
      {/*TODO: varying bg-colors depending on skillData.category_id*/}
      <div className={` ${background} center relative inline-block select-none whitespace-nowrap rounded-full py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white mx-1`}>
        <div className="mt-px">{skillObj.name}</div>
      </div>
    </>
  )
};

export default SkillChip
