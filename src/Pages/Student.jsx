import React from 'react'
import { Link } from 'react-router-dom'
import Appdata from '../Components/Appdata'
// import data from '../Data'
export const Student = () => {
  return (
    <>
    <h2 className='container std-head'>Student Details 🧑🏻‍🎓:</h2>
    <Link to='/Addpage'><button className='btn btn-danger std-btn'>Add Students</button></Link>
    <table className='container'>
      <thead>
        <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>COURSE</th>
        <th>BATCH</th>
        <th>CHANGE</th>
        </tr>
      </thead>
      <tbody>
        <Appdata/>
        {/* {
        data.map((item,key)=>{
          return(
            <tr key={key}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td>{item.change}</td>
        </tr>  
          )
        })
       }   */}
      </tbody>
    </table>
    </>
  )
}


// {/* <tr>
//           <td>ramana</td>
//           <td>22</td>
//           <td>FSD</td>
//           <td>2022</td>
//           <td><Link to='/Editpage'>Edit</Link></td>
//         </tr>
//         <tr>
//           <td>ramana</td>
//           <td>22</td>
//           <td>FSD</td>
//           <td>2022</td>
//           <td><Link to='/Editpage'>Edit</Link></td>
//         </tr>
//         <tr>
//           <td>ramana</td>
//           <td>22</td>
//           <td>FSD</td>
//           <td>2022</td>
//           <td><Link to='/Editpage'>Edit</Link></td>
//         </tr>
//         <tr>
//           <td>ramana</td>
//           <td>22</td>
//           <td>FSD</td>
//           <td>2022</td>
//           <td><Link to='/Editpage'>Edit</Link></td>
//         </tr>
//         <tr>
//           <td>ramana</td>
//           <td>22</td>
//           <td>FSD</td>
//           <td>2022</td>
//           <td><Link to='/Editpage'>Edit</Link></td>
//         </tr> */}