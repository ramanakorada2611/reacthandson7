import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Addstudent } from '../Components/AppSlice'
import { useDispatch, useSelector } from 'react-redux'
function Addpage() {
  let UseList=useSelector((state)=>state.student)
  let dispatch=useDispatch()
  let navigate=useNavigate()
    let [name,setName]=useState()
    let [age,setAge]=useState()
    let [batch,setBatch]=useState()
    let [course,setCourse]=useState()
    let Handlesubmit=(e)=>{
        e.preventDefault();
        if(name && age && course && batch ){
          dispatch(Addstudent({
            id:UseList[UseList.length-1].id+1,
           name,
           age,
           course,
           batch
          }))
          setName('')
          setAge('')
          setCourse('')
          setBatch('')
          navigate('/Student')
        }
        
    }
    let HandleCancel=()=>{
      navigate('/Student')
    }
  return (
    <>
    <form  onSubmit={Handlesubmit}>
          <input className='box1' type='text' value={name}   onChange={(e)=>setName(e.target.value)} placeholder='Enter your name' />
          <input className='box2'  type='text' value={age}  onChange={(e)=>setAge(e.target.value)} placeholder='Enter your age' />
          <input className='box3'  type='text' value={batch}  onChange={(e)=>setBatch(e.target.value)}  placeholder='Enter your course' />
          <input className='box4'  type='text' value={course} onChange={(e)=>setCourse(e.target.value)} placeholder='Enter your batch' />
       <input className='btn btn-success form-btn1' type='submit' value='submit'/> 
    </form>
    <button className='btn btn-dark form-btn2' onClick={HandleCancel}>Cancel</button>
    </>
  )
}

export default Addpage