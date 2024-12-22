import './App.css'
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Users from './pages/Users';
import UserItem from './pages/UserItem';
import PageLoader from '../ui/PageLoader';


const App = () => {
    
  return (
    <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
          <Route path={'/react_routing'} element={<Home/>}/>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/about'} element={<About/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/users'} element={<Users/>}/>
          <Route path={'/users/:userId'} element={<UserItem/>}/>
          <Route path={'/*'} element={<NotFound/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
