import {createSlice}from '@reduxjs/toolkit'
import data from '../Data'
export const StudentSlice=createSlice({
    name:'student',
   initialState:data,
   reducers:{
      Addstudent:(state,action)=>{
        state.push(action.payload)
      },
      studentUpdated:(state,action)=>{
        const {id,name,age,course,batch}=action.payload;
        const exsitingStudent=state.find((user)=>user.id===id)
        if(exsitingStudent){
            exsitingStudent.name=name;
            exsitingStudent.age=age;
            exsitingStudent.course=course;
            exsitingStudent.batch=batch;
        }
      
      }
      
      
    }

})
export const {Addstudent,studentUpdated}=StudentSlice.actions
export default StudentSlice.reducer


