import React from 'react'
import {useNavigate} from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/login')
    }
  return (
    <section>
        <div className='w-[300px] mx-auto'>
             <form className='bg-slate-200 p-4 my-4 rounded drop-shadow'>
                <h1 className='text-center text-xl text-slate-600 font-bold drop-shadow'>Please Register</h1><br />
                <label className='text-lg text-gray-600'>E-mail</label><br />
                <input className='rounded w-full h-8 px-2' type="email" placeholder='Enter your email' /><br />

                <label className='text-lg text-gray-600'>Password</label><br />
                <input className='rounded w-full h-8 px-2' type="password" placeholder='Enter your Password' /><br />

                <label className='text-lg text-gray-600'>Confirm Password</label><br />
                <input className='rounded w-full h-8 px-2' type="password" placeholder='Enter Confirm Password' /><br /><br />

                <input className='w-full bg-blue-400 hover:bg-blue-500 duration-300 hover:text-white py-1 cursor-pointer text-center border border-purple-300 rounded' type="submit" value="Register" />

                <div className='flex justify-around py-2'>
                <p className='text-sm'>Already have an account ? </p>

                <p onClick={handleNavigate} className='text-blue-400 text-sm hover:underline cursor-pointer'>
                    Please Login
                </p>
                </div>
             </form>
        </div>
    </section>
  )
}

export default Register