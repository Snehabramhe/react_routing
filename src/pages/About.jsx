import React from 'react'
import kid2 from '../assets/kid2.JPG'
const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            
             {/* Right Section: Text */}
             <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
              <h1 className="text-4xl font-bold text-gray-800">
                Welcome to About Page
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover the most innovative solutions to enhance your productivity and achieve your goals. Our platform is designed to empower you with tools that make a difference.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
            
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={kid2}
                alt="Landing Illustration"
                className="rounded-lg shadow-lg"
                style={{ width: '600px', height: '600px' }}
              />
            </div>
    
           
          </div>
        </div>
  )
}

export default About
