import React from 'react'
import { NavLink  } from 'react-router-dom'

const Navbar = () => {

    let activeStyle = {
        textDecoration: "underline",
        color: "blue"
      };
    
  return (
    <header className='w-full h-14 bg-slate-300 px-4 flex justify-between items-center'>
        {/* Logo section */}
        <h1 className='text-2xl font-bold text-purple-600'>Firebase.</h1>

        <div className='text-slate-500 uppercase space-x-6 font-semibold'>
        <NavLink
            to="/"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Login
          </NavLink>
        </div>


    </header>
  )
}

export default Navbar