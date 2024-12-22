import React from 'react'

const NotFound = () => {
  return (
    <div className="mt-16 flex items-center justify-center">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      
       {/* Right Section: Text */}
       <div className="w-full">
        <h1 className="text-4xl font-bold text-red-500">
           Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover the most innovative solutions to enhance your productivity and achieve your goals. Our platform is designed to empower you with tools that make a difference.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </div>
     
    </div>
  </div>
  )
}

export default NotFound
