import React from 'react'
import Navbar from './Navbar'
import {NavLink,Link } from 'react-router-dom'


export const About = () => {
  return (
    <>
   <nav>
       <Link to="/about/team">Team</Link> 
    </nav>
   
    <h2>This is About Page</h2>
 
    </>
    
  
  )
}
