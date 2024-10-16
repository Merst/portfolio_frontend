import React from 'react';

const SkillTag = ({skill}) => {
  
  return (
    <>
      <div class="center relative inline-block select-none whitespace-nowrap rounded-full bg-blue-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold leading-none text-white">
        <div class="mt-px">{skill.name}</div>
      </div>
    </>
  )
}

export default SkillTag
