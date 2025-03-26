import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div className='min-h-screen w-full'>
      <form className='bg-white shadow-2xl rounded-2xl px-8 pt-6 pb-8 mb-4 border border-gray-100 transform transition-all max-w-md mx-auto mt-14'>
      <h3 className='text-3xl font-semibold py-2 text-center tracking-tight'>Login Account</h3>
      <div>
        <div className='my-4'>
        <label htmlFor="name">Email</label>
        <input className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300" type="text" name="email" id="email" placeholder='user@email.com' autoComplete='off' />
        </div>
        <div className='my-4'>
        <label htmlFor="name">Password</label>
        <input className="pl-3 w-full py-2.5 px-4 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 mt-1 transition-all duration-300" type="password" name="password" id="password" placeholder='Enter your password' autoComplete='off' />
        </div>
        <input type="submit" value="Login" className="outline-none mt-5 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded py-2.5 px-2 text-lg w-full" />
      </div>
      <div>
        <p className='text-center mt-5'>Not have an account? <span className='text-blue-500 cursor-pointer'><Link to={'/register'}>Register</Link></span></p>
      </div>
    </form>
    </div>
  )
}

export default LoginPage