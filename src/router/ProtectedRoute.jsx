import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { Loader } from '../SharedComponents/Loader/Loader';


const ProtectedRoute = ({children}) => {
   const location = useLocation();
   const {loading, user} = useSelector(state=>state.user)


   if (loading || loading === undefined ) {
      return <Loader/>
   }

   if (user) return children
   
   
    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default ProtectedRoute;   
