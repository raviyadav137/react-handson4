import React,{useEffect, useState} from 'react';
import Details from './Details';
import {useNavigate,useLocation} from 'react-router-dom'
function Edit(){
    const[name,setName]=useState('');
    const[age,setAge]=useState('');
    const[course,setCourse]=useState('');
    const[batch,setBatch]=useState('');
    let index=useLocation().state.data;
    console.log(index);
  

    let history=useNavigate();


    const handleedit=(e)=>{
        e.preventDefault();
       let a=Details[index];
       console.log(a);
       a.Name=name;
       a.Age=age;
       a.Course=course;
       a.Batch=batch;
        history("/student");
    }

    useEffect(()=>{
        setName(Details[index].Name)
        setAge(Details[index].Age)
        setCourse(Details[index].Course)
        setBatch(Details[index].Batch)
    },[index])
    return(
        <>
        <form className="form_Add">
        <input type="text" placeholder="Enter Name" required value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type="text" placeholder="Enter Age" required value={age} onChange={(e)=>setAge(e.target.value)}></input><br/><br/><br/><br/>
        <input type="text" placeholder="Enter Course" required value={course} onChange={(e)=>setCourse(e.target.value)}></input>
        <input type="text" placeholder="Enter Batch" required value={batch} onChange={(e)=>setBatch(e.target.value)}></input><br/><br/><br/>
         <button onClick={(e)=>handleedit(e)} type="submit">update</button>
       </form>
        </>
    )
}
export default Edit