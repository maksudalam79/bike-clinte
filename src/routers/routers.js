import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import CategoryDetails from "../pages/Home/Categories/Deatiles/CategoryDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/LogIn/Login";
import Signup from "../pages/SignUp/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Signup></Signup>
        },
        {
          path:'/bikeCategories/:id',
          element:<CategoryDetails></CategoryDetails>,
          loader:({params})=>fetch(`http://localhost:5000/bikeCategories/${params.id}`)
        }
],
  },
]);
