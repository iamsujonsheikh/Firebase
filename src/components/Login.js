import React, { useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import auth from '../shared/Firebase.Init'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    const from = location.state?.from?.pathname || "/";

    if (googleUser) {
      navigate('/home')
    }

    let errorElement;
    if (googleError) {
      errorElement = <p className='text-red-500 text-center'>Error: {googleError.message}</p>
    }

    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleNavigate = () =>{
        navigate('/register')
    }

    if(user){
      navigate(from, { replace: true });
    }

    const handeLoginForm = event => {
      event.preventDefault()
      const email = event.target.email.value;
      const password = event.target.password.value;
      console.log(email,password)
      signInWithEmailAndPassword(email, password)
    }


  return (
    <section>
        <div className='w-[300px] mx-auto'>
             <form onSubmit={handeLoginForm} className='bg-slate-200 p-4 my-4 rounded drop-shadow'>

                <h1 className='text-center text-xl text-slate-600 font-bold drop-shadow'>Please Login</h1><br />

                <label className='text-lg text-gray-600'>E-mail</label><br />
                <input className='rounded w-full h-8 px-2' name="email" type="email" placeholder='Enter your email' /><br />

                <label className='text-lg text-gray-600'>Password</label><br />
                <input className='rounded w-full h-8 px-2' type="password" name="password" placeholder='Enter your Password' /><br /><br />

                <input className='w-full bg-blue-400 hover:bg-blue-500 duration-300 hover:text-white py-1 cursor-pointer text-center border border-purple-300 rounded' type="submit" value="Login" />

                {errorElement}

                <p onClick={handleNavigate} className='text-center text-blue-400 py-1 hover:underline cursor-pointer'>Please Register</p>

                <div onClick={()=>signInWithGoogle()} className='flex justify-around items-center bg-slate-600 cursor-pointer hover:bg-slate-700 duration-300 rounded'>
                  <FcGoogle size={25}/>
                  <span className='text-lg text-white'>Sign In With Google</span>
                </div>
             </form>
        </div>
    </section>
  )
}

export default Login