import React from 'react'

const ProfileCard = () => {
  return (
    <>
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-16">
                {/*Cram your picture right here */}
              </div>

                    <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                        Stéphane Verville-Vohl
                    </h6>

                    <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                        Software Engineer 
                    </h1>

                    <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                        {/*Specialties go here! */}
                    </p>

          <a href="#" className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500">Hire me</a>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
