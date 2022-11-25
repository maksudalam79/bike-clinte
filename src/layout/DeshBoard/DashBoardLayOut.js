import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar/Navbar';
import image from '../../asset/wp4106661.jpg'
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const DashBoardLayOut = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
         <Navbar></Navbar>
         <div className="drawer drawer-mobile "style={{ backgroundImage:`url(${image})`}}>
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col">
   <Outlet></Outlet>
  
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
      <li><Link to='/dashBoard'>My Order</Link></li>
      {isAdmin &&
        <>
        <li><Link to='/dashBoard/users'>All User</Link></li>
        <li><Link to='/dashBoard/users'>All Sellers</Link></li>
        </>
        }
      
      
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBoardLayOut;