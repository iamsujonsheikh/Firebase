import React from 'react'
import { NavLink  } from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import auth from './Firebase.Init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';


const Navbar = () => {
    const [user] = useAuthState(auth);

    const handleLogout = () => {
      signOut(auth);
    };

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

          <div className='inline' onClick={handleLogout}>
          {
            user ?  <FiLogOut className='cursor-pointer inline' size={25}/> : <NavLink
            to="/login"
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Login
          </NavLink>
          }
          </div>
        </div>


    </header>
  )
}

export default Navbar