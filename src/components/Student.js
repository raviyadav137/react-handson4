
import React from 'react';
import Details from "./Details"
import {Link} from 'react-router-dom';
const Student = () => {
  
  const handleEdit=(id,name,age,batch,course)=>{
        localStorage.setItem('name',name);
    localStorage.setItem('age',age);
    localStorage.setItem('batch',batch);
    localStorage.setItem('course',course);
    localStorage.setItem('id',id);
      }
return (
  <>
  <br></br>
  
     <h2>Students Details</h2>
     <Link to="/create">
     <button className="btn">Add new Studets</button>
     </Link>
    
     <br/><br/>
     <table border="1" cellSpacing="0" width="80%">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                        <th>Batch</th>
                        <th>Change</th>
                    </tr>
                 </thead>
                 <tbody>
                  {
                    Details && Details.length>0
                    ?
                    Details.map((item,index)=>{
                      return(
                        <tr key={index}>
                          <td>
                            {item.Name}
                          </td>
                          <td>
                            {item.Age}
                          </td>
                          <td>
                            {item.Course}
                          </td>
                          <td>
                            {item.Batch}
                          </td>
                          <td>
                            <Link state={{data:index}} to={"/edit"} >
                            <div style={{backgroundColor:'white'}} onClick={()=>handleEdit(item.id,item.Name,item.Age,item.Course,item.Batch)}>Edit</div>
                           
                            </Link>
                          </td>
                        </tr>
                      )
                    })
                    : "No record found"
                  }
                 </tbody>
            </table>
  </>
  )
};
  
export default Student;