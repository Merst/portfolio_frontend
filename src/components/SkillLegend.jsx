import React from 'react';

const SkillLegend = () => {
  {/* You reeeeeaaaaaally should put this in a theme file or a config setting, or a prop. */}
  const bgColours = {
    "Programming Language" : "bg-blue-500",
    "Framework" : "bg-green-500",
    "N/A" : "bg-red-500",
    "Development Tool" : "bg-purple-500",
  };

  return (
    <>
      <p> Legend: </p>
      <div className={`bg-blue-500 center relative inline-block select-none whitespace-nowrap rounded-full py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}>
        <div className="mt-px">Programming Language</div>
      </div>
      <div className={`bg-green-500 center relative inline-block select-none whitespace-nowrap rounded-full py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}>
        <div className="mt-px">Framework</div>
      </div>
      <div className={`bg-purple-500 center relative inline-block select-none whitespace-nowrap rounded-full py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}>
        <div className="mt-px">Development Tool</div>
      </div>
      <div className={`bg-red-500 center relative inline-block select-none whitespace-nowrap rounded-full py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white`}>
        <div className="mt-px">N/A</div>
      </div>

    </>
  )
}

export default SkillLegend
