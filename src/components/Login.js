import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    const handleNavigate = () =>{
        navigate('/register')
    }

  return (
    <section>
        <div className='w-[300px] mx-auto'>
             <form className='bg-slate-200 p-4 my-4 rounded drop-shadow'>
                <h1 className='text-center text-xl text-slate-600 font-bold drop-shadow'>Please Login</h1><br />
                <label className='text-lg text-gray-600'>E-mail</label><br />
                <input className='rounded w-full h-8 px-2' type="email" placeholder='Enter your email' /><br />
                <label className='text-lg text-gray-600'>Password</label><br />
                <input className='rounded w-full h-8 px-2' type="password" placeholder='Enter your Password' /><br /><br />
                <input className='w-full bg-blue-400 hover:bg-blue-500 duration-300 hover:text-white py-1 cursor-pointer text-center border border-purple-300 rounded' type="submit" value="Login" />

                <p onClick={handleNavigate} className='text-center text-blue-400 py-1 hover:underline cursor-pointer'>Please Regiister</p>
             </form>
        </div>
    </section>
  )
}

export default Login