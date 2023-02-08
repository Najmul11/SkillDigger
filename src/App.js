import React,{useEffect} from 'react';
import { RouterProvider} from 'react-router-dom';
import './App.css'
import { Toaster } from 'react-hot-toast';
import {useDispatch} from 'react-redux'
import { loadUser } from './redux/actions/user';
import { router } from './router/Router';



function App() {
  
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return ( 
    <> 
      <RouterProvider router={router}></RouterProvider>
      <Toaster/>
    </>
   
  );
}

export default App;