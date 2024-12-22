import React, { useState,useEffect } from 'react'
import { UserService } from '../services/userService';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

    const navigate = useNavigate();

    const [state,setState] = useState({
        loading: false,
        users: [],
        errorMessage : null
    });

useEffect(() => {
    setState({...state,loading:true});
  const getUsers = async () => {
    try{
        let response  = await UserService.getAllUsers();
        setState({...state,loading:false,users:response.data});
    }
    catch(e){
        setState({...state,loading:false,errorMessage: e.message});
        console.log(e.message)
    }
  }
  getUsers();
},[])

const backToHome = () => {
    navigate('/')
}

const {users} = state;

  return (
    <>
    <div className="mt-16 flex items-center justify-center">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            
             {/* Right Section: Text */}
             <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
              <h1 className="text-4xl font-bold text-green-500">
                Welcome to Users Page
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover the most innovative solutions to enhance your productivity and achieve your goals. Our platform is designed to empower you with tools that make a difference.
              </p>
              <button onClick={backToHome} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>
        </div>

<div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">User Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-600 uppercase text-sm">
              <th className="px-6 py-4 border-b">ID</th>
              <th className="px-6 py-4 border-b">Name</th>
              <th className="px-6 py-4 border-b">Email</th>
              <th className="px-6 py-4 border-b">Location</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b text-gray-800">{item.id}</td>
                <td className="px-6 py-4 border-b text-gray-800">
                    <Link className='text-blue-600' to={`/users/${item.id}`}>{item.name}</Link>
                </td>
                <td className="px-6 py-4 border-b text-gray-800">{item.email}</td>
                <td className="px-6 py-4 border-b text-gray-800">{item.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>


</>


  )
}

export default Users
