import React from 'react';
import Header from './Header';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './Body';
import AddMarks from './AddMarks';
import GetMarks from './GetMarks';


const App=()=>{
  return(
    <div>
    
      <Header/>
      <Outlet/>
    
    </div>
  )
}
export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/addmarks",
        element:<AddMarks/>
      },
      {
      path:"/getmarks",
      element:<GetMarks/>}
    ]

  }
])
export default App