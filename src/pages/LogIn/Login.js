import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn,providerLogin } = useContext(AuthContext);
  const [logInerror, setLoginError] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  
  const [token]=useToken(loginEmail)
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  if(token){
    navigate(from,{replace:true})
  }
  const handlergoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
const handlerLogin = (data) => {
    console.log(data);
    setLoginError('')
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginEmail(data.email);
     toast.success('User login')
  
     saveUser(data.name,data.email)
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoginEmail(data.email);
      });
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 border p-7">
        <h2 className="text-xl text-center ">Log in</h2>
        <form onSubmit={handleSubmit(handlerLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              {...register("email", { required: "Email Address is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
         
          <di className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or long",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
            <label className="label">
              <span className="label-text">Forget password?</span>
            </label>
          </di>
          <input className="btn w-full" value="Log in" type="submit" />
          <div>
            {logInerror && <p className="text-red-500">{logInerror}</p>}
          </div>
        </form>
        <label className="label">
          <span className="label-text">
            New to LEX RIDER?{" "}
            <Link to="/signup" className="text-primary">
              Create new account
            </Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <button onClick={handlergoogleSignin} className="btn w-full bg-base-100 ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
