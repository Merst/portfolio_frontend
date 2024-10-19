import React from 'react';
const ResumePage = () => {
  return (
    <>
      <h3 className="text-3xl py-5"> My Resume </h3>
      {/* Height should be relative to the viewer's screen. height="100%" doesn't seem to do the trick. */}
      <object className='pt-1' data="../../public/resume.pdf" type="application/pdf" width="100%" height="600px" />      
      <p>Created using Latex</p>
    </>
  )
}

export default ResumePage
