import { createBrowserRouter } from "react-router-dom";

import DashBoardLayOut from "../layout/DeshBoard/DashBoardLayOut";
import MyOrder from "../DashBoard/MyOrder";
import Main from "../layout/Main/Main";
import AddAProducts from "../pages/Add a Products/AddAProducts";
import CategoryDetails from "../pages/Home/Categories/Deatiles/CategoryDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Signup from "../pages/SignUp/Signup";
import AllUsers from "../layout/DeshBoard/AllUsers";

import PrivateAdmin from "./PrivateAdmin";
import Blogs from "../pages/Blogs/Blogs";
import Found from "../pages/Found/Found";
import Payment from "../layout/DeshBoard/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/bikeCategories/:id",
        element: <CategoryDetails></CategoryDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bikeProduct/${params.id}`),
      },
      {
        path: "/addproducts",
        element: <AddAProducts></AddAProducts>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "*",
        element: <Found></Found>,
      },
    ],
  },
  {
    path: "/dashBoard",
    element: <DashBoardLayOut></DashBoardLayOut>,
    children: [
      {
        path: "/dashBoard",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/dashBoard/users",
        element: <PrivateAdmin><AllUsers></AllUsers></PrivateAdmin>
      },
      {
        path: "/dashBoard/payment/:id",
        element:<Payment></Payment>,
        loader:({params})=>fetch(`http://localhost:5000/buyer/${params.id}`)
      },
      {
        path: "*",
        element: <Found></Found>,
    },
    ],
  },
]);
