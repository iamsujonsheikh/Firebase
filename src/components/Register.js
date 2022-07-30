import React from 'react'
import {useNavigate} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../shared/Firebase.Init';
import ClipLoader from "react-spinners/ClipLoader";


const Register = () => {

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/login')
    }

    const [
      createUserWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if(user){
      navigate('/home')
    }

    if(loading){
      return <ClipLoader/>
    }

    const handleRegister = (event) => {
      event.preventDefault()
      const name = event.target.name.value
      const email = event.target.email.value
      const password = event.target.password.value
      console.log(name,email,password)
      createUserWithEmailAndPassword(email, password)
    }

  return (
    <section>
        <div className='w-[300px] mx-auto'>
             <form onSubmit={handleRegister} className='bg-slate-200 p-4 my-4 rounded drop-shadow'>
                <h1 className='text-center text-xl text-slate-600 font-bold drop-shadow'>Please Register</h1><br />

                <label className='text-lg text-gray-600'>Name</label><br />
                <input className='rounded w-full h-8 px-2' type="text" name="name" placeholder='Enter your name' /><br />

                <label className='text-lg text-gray-600'>E-mail</label><br />
                <input className='rounded w-full h-8 px-2' type="email" name="email" placeholder='Enter your email' /><br />

                <label className='text-lg text-gray-600'>Password</label><br />
                <input className='rounded w-full h-8 px-2' type="password" name="password" placeholder='Enter your Password' /><br />

                <input className='w-full bg-blue-400 hover:bg-blue-500 duration-300 hover:text-white py-1 cursor-pointer text-center border border-purple-300 rounded my-2' type="submit" value="Register" />

                <div className='flex justify-around py-2'>
                <p className='text-sm'>Already have an account ? </p>

                <p onClick={handleNavigate} className='text-blue-400 text-sm hover:underline cursor-pointer'>
                    Please Login
                </p>
                </div>

                <div className='flex justify-around items-center bg-slate-600 cursor-pointer hover:bg-slate-700 duration-300 rounded'>
                  <FcGoogle size={25}/>
                  <span className='text-lg text-white'>Sign In With Google</span>
                </div>
             </form>
        </div>
    </section>
  )
}

export default Register