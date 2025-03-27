import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../store/Slices/authSlice'

const Navbar = () => {
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <nav className='flex justify-between bg-gray-100 px-20 py-7'>
      <h1 className='text-2xl font-semibold'>Expense Tracker</h1>
      <ul className='flex justify-between space-x-10 text-lg items-center'>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        {user ? (
          <>
            <li className='text-gray-700'>
              Welcome, {user.name}
            </li>
            <li>
              <button 
                onClick={handleLogout}
                className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar