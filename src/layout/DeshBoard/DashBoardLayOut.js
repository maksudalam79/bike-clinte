import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../share/Navbar/Navbar';
import image from '../../asset/wp4106661.jpg'
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Footer from '../share/Footer/Footer';
import useSeller from '../../hooks/useSeller';
import useBuyer from '../../hooks/useBuyer';


const DashBoardLayOut = () => {
    const {user}=useContext(AuthContext)
    const [isAdmin]=useAdmin(user?.email)
    const [isSeller]=useSeller(user?.email)
    const [isBuyer]=useBuyer(user?.email)
    
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
     
      {isBuyer &&
        <li><Link to='/dashBoard'>My Order</Link></li>
        }
      { isAdmin &&
        <>
        <li><Link to='/dashBoard/users'>All User</Link></li>
        <li><Link to="/dashBoard/users/allseller">All Sellers</Link></li>
        <li><Link to="/dashBoard/users/allbuyer">All Buyer</Link></li>
        </>
        }
        {
          isSeller && 
          <>
          <li><Link to="/dashBoard/users/myBuyers">My Buyer</Link></li>
          <li><Link to="/dashBoard/users/mybuyer">My Product</Link></li>
          </>
        }
      
      
    </ul>
  
  </div>
</div>
<Footer></Footer>
        </div>
    );
};

export default DashBoardLayOut;