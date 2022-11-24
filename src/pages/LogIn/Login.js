import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
  const {signIn}=useContext(AuthContext)
  const [logInerror,setLoginError]=useState('')
  const [loginUserEmail,setLoginUserEmail]=useState('')
//   const [token]=useToken(loginUserEmail)
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname||'/'
//   if(){
//     navigate(from,{replace:true})
//   }
  const handlerLogin=data=>{
    console.log(data)
    
    signIn(data.email,data.password)
   .then(result=>{
      const user=result.user
      console.log(user)
      setLoginUserEmail(data.email)
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log(error.message)
      setLoginError(error.message)
    })
  }
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
                {...register("email",{required: "Email Address is required"})}
              />
              {errors.email && <p className="text-red-500">{errors.email?.message}</p>}
              
            </div>
            <di className="form-control w-full">
            <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                  type="password"
                  className="input input-bordered w-full"
                  {...register("password",
                  {required: 'password is required',
                  minLength:{value:6,message:"Password must be 6 characters or long"}
                })}
                />
                {errors.password && <p className="text-red-500">{errors.password?.message}</p>}
                 <label className="label">
                <span className="label-text">Forget password?</span>
              </label>
              
            </di>
            <input className="btn w-full" value='Log in' type="submit" />
           <div>
           {
              logInerror &&<p className="text-red-600">{logInerror}</p>
            }
           </div>
          </form>
          <label className="label">
                <span className="label-text">New to Doctors Portal? <Link to='/signup' className="text-primary">
                Create new account
                </Link></span>
              </label>
              <div className="divider">OR</div>
              <button className="btn w-full bg-base-100 ">CONTINUE WITH GOOGLE</button>
        </div>
      </div>
  
    );
};

export default Login;