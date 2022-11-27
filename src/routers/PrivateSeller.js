import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import useSeller from '../hooks/useSeller';
import Loading from '../layout/share/loading/Loading';

const PrivateSeller = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const [isSeller,isSellerLoading]=useSeller(user?.email)
    const location=useLocation()
    if(loading||isSellerLoading){
       return <Loading></Loading>
    }
    if(user && isSeller){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace ></Navigate>
};


export default PrivateSeller;