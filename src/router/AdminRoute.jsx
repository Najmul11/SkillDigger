import React from 'react';
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux'


const AdminRoute = ({children}) => {
    const {user} = useSelector(state=>state.user)


   if (user?.role==='admin') return children
   
   
    return <Navigate to="/profile"></Navigate>;
};

export default AdminRoute;   
