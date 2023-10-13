import axios from 'axios';
import React, { useState } from 'react';





const AddMarks= ()=>{
    const [rollNum,setRollNum]= useState("");
    const [fullName,setFullName]=useState("");
    const [marks,setMarks]=useState("");
    const [variable,setVariable]= useState(false);

    const btnhandler=async ()=>{
        try{
            const response=axios.post(`https://node-server-oey3.onrender.com/addmarks`,{
                rollNum:rollNum,
                fullName:fullName,
                marks:marks,
            });
            if(response) setVariable(true);
            console.log(variable);
            setFullName("");
            setMarks("");
            setRollNum("");
            
        }
        
        catch(err){
            setFullName("");
            setMarks("");
            setRollNum("");
        }

    }
    //onClick={()=>btnhandler()}
  return(
    <>
    <h1>Add Marks</h1>
    <div className='AMdiv'>
         <h2>Roll number</h2>
        <input className="inputs" type='text' placeholder='rollnum' value={rollNum}
        onChange={(e) => setRollNum(e.target.value)}/>
         <h2>Full Name</h2>
        <input className="inputs" type='text' placeholder='name' value={fullName}
        onChange={(e) => setFullName(e.target.value)}/>
        <h2>Marks</h2>
        <input className="inputs" type='text' placeholder='marks' value={marks}
        onChange={(e) => setMarks(e.target.value)}/>
        <button className='btn' onClick={()=>btnhandler()} >Submit</button>
    </div>
    <hr></hr>
    {(variable)?<h2>Stored successfully</h2>:null}
    
    </>
  )
}
export default AddMarks