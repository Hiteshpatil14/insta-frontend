import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
        <div className="header">
            <img src="" alt="" />
            <Link to="/">  <h1>Instagram</h1></Link>
        </div>
       <div className="screens">
            <li>
                <Link to="/signin"><ul>Sign In</ul></Link>
                <Link to="/signup"><ul>Sign Up</ul></Link>
                <Link to="/newpost"><ul>Add Post</ul></Link>
                <Link to="/profile"><ul>Profile</ul></Link>
            </li>
        </div>
    </div>
  )
}

export default Navbar
