import React from 'react'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

function Appdata (){
   const navigate=useNavigate();
    const value=useSelector((state)=>state.student)
    // console.log(value)
  return (
    <>
     {
        value.map((item,key)=>{
          return(
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td><button className= 'appbutton' onClick={()=>{const id=item.id; navigate('/Editpage',{state:id});}}><u>Edit</u></button></td>
              {/* <td><Link to='/Editpage ' >Edit</Link></td> */}
        </tr>  
          )
        })
       }  
    </>
  )
}
export default Appdata


// import React from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { studentUpdated } from '../features/StudentSlice';


// function ShowData() {
    // const navigate=useNavigate();
//     const data=useSelector((state)=>state.student)

//     // console.log(data);
//   return (
//     <div>Data is:
//         { 
//             data.map((item,index)=>{
//                 return(
//                     <div key={index}>{item.id},{item.Name}{item.Age} {item.Batch}{item.Course}  <span><button onClick={()=>{
//                         const id=item.id;
//                         navigate('/editstudent',{state:id});
//                         // console.log(id);
//                     }}>Edit</button></span> </div>
// //                 )
//             })
           
//         }
//     </div>
//   )
// }

// export default ShowData
