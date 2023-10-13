import React from 'react';
import { Link } from 'react-router-dom';

//import { Outlet } from 'react-router-dom';

const Body=()=>{
  return(
    <div className='body'>
    <Link to="/addmarks"><h1>Add</h1></Link>
    <Link to="getmarks"><h1>Get</h1></Link>
    
    </div>
  )
}
export default Body