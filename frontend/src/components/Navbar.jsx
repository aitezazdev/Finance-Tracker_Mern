import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-gray-100 px-20 py-7'>
        <h1 className='text-2xl font-semibold'>Expense Tracker</h1>
        <ul className='flex justify-between space-x-10 text-lg'>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar