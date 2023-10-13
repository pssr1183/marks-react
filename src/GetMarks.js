import axios from 'axios';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';


const GetMarks=()=>{
    const [rollNum,setRollNum]=useState("");
    const [marks,setMarks]=useState(null);
    const getHandler= async ()=>{
        try{
            const response=await axios.get(`https://node-server-oey3.onrender.com/getmarks/${rollNum}`);
            setMarks(response.data.marks);
        }
        catch(err){
            setMarks(null);
            console.error(err);
        }
    }
  return(
    <>
    <h1>GetMarks</h1>
    <div className='GMdiv'>
        <h2>Roll number</h2>
        <input className="inputs" type='text' placeholder='rollnum' value={rollNum}
        onChange={(e) => setRollNum(e.target.value)}/>
        <button className='btn' onClick={()=>getHandler()}>Submit</button>
        <hr></hr>
        {marks!==null?
        <h2>Your marks are : {marks}</h2>: null}
    </div>
    </>
  )
}
export default GetMarks