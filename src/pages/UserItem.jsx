import React, { useState,useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { UserService } from '../services/userService';
import PageLoader from '../../ui/PageLoader';


const UserItem  = () => {

    const params = useParams();
    console.log(params.userId);

    const navigate = useNavigate();

   const [searchParams] = useSearchParams();

   let name = searchParams.get("name")

    const [state,setState] = useState({
        loading: false,
        user: null,
        errorMessage: null
    })

    useEffect(() => {
        setState({...state,loading:true});
      if(params.userId){
        const getUser = async () => {
            try{
                let response  = await UserService.getUser(params.userId);
                setState({...state,loading:false,user:response.data});
            }
            catch(e){
                setState({...state,loading:false,errorMessage: e.message});
                console.log(e.message)
            }
          }
          getUser();
      } 
    },[params.userId])

    const backToUsers = () => {
        navigate('/users')
    }

    const {loading,user,errorMessage} = state;

  return (
    <>
    <pre>{name}</pre>
    <div className="flex justify-center px-4 py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            
             {/* Right Section: Text */}
             <div className="w-1/2 md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:pl-8">
              <h1 className="text-4xl font-bold text-green-500">
                Welcome to UserItem  Page
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Discover the most innovative solutions to enhance your productivity and achieve your goals. Our platform is designed to empower you with tools that make a difference.
              </p>
              <button onClick={backToUsers} className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
           
          </div>
        </div>

        {
            loading ? <PageLoader/> : 
            <>
               
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-6 mx-32">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">User Item</h2>
        
        { user && <ul className='list-disc text-gray-600 pl-5'>
          <li className='mb-1'>Id - {user.id}</li>
          <li className='mb-1'>Name - {user.name}</li>
          <li className='mb-1'>Email - {user.email}</li>
          <li className='mb-1'>City - {user.address.city}</li>
          <li className='mb-1'>Street - {user.address.street}</li>
        </ul>
        }
      </div>
            </>
        }
    </>
  )
 
}

export default UserItem ;

