import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar/Navbar';
import image from '../../asset/wp4106661.jpg'

const DashBoardLayOut = () => {
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
     
      <li><>Sidebar Item 1</></li>
      <li><>Sidebar Item 2</></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBoardLayOut;