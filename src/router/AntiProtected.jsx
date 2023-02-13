import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loader } from '../SharedComponents/Loader/Loader';

export const AntiProtected = ({children}) => {
    const {loading, user} = useSelector(state=>state.user)

    if (loading || loading === undefined ) {
       return <Loader/>
    }
 
    if (!user) return children
    
    return <Navigate to="/profile" ></Navigate>;
    
}
