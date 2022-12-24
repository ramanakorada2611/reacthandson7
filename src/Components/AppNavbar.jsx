import React from 'react'
import { NavLink } from 'react-router-dom'

const AppNavbar = () => {
  return (
    <>
    <header >
    <NavLink className={({isActive})=>isActive ? "active-class":"non-active-class"} to='/' >Home</NavLink>
    <NavLink className={({isActive})=>isActive ? "active-class":"non-active-class"} to='/student'>Student</NavLink>
    <NavLink className={({isActive})=>isActive ? "active-class":"non-active-class"} to='/contact'>Contact</NavLink>
    </header>
    </>
  )
}

export default AppNavbar