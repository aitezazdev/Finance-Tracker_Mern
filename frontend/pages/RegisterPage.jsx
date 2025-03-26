import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full max-w-md mx-auto mt-4">
        <form className='bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 border border-gray-100 transform transition-all'>
          <h3 className='text-3xl font-semibold py-2 text-center tracking-tight'>Create Account</h3>
          <div>
            <div className='my-4'>  
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input 
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300" 
                type="text" 
                name="name" 
                id="name" 
                placeholder='Enter your name' 
                autoComplete='off' 
              />
            </div>
            <div className='my-4'>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input 
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300" 
                type="email" 
                name="email" 
                id="email" 
                placeholder='user@email.com'  
                autoComplete='off' 
              />
            </div>
            <div className='my-4'>
              <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input 
                className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300" 
                type="password" 
                name="password" 
                id="password" 
                placeholder='Enter your password' 
                autoComplete='off' 
              />
            </div>
            <button 
              type="submit" 
              className="outline-none mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded py-2.5 px-2 text-lg w-full"
            >
              Register
            </button>
          </div>
          <div>
            <p className='text-center mt-5'>
              Already have an account? 
              <Link to={'/login'} className='text-blue-500 hover:underline ml-1'>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage