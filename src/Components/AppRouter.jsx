import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Addpage from '../Pages/Addpage'
import { Contact } from '../Pages/Contact'
import Editpage from '../Pages/Editpage'
import Error404 from '../Pages/Error404'
import { Home } from '../Pages/Home'
import { Student } from '../Pages/Student'
import AppNavbar from './AppNavbar'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <AppNavbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Editpage' element={<Editpage/>}/>
        <Route path='/Addpage' element={<Addpage/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default AppRouter