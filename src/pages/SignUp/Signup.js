import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { currentUser, updateUser, providerLogin } = useContext(AuthContext);
  const [signUperror, setSignupError] = useState("");
  const [createEmail, setCreatedEmail] = useState("");
  const [token] = useToken(createEmail);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  if (token) {
    navigate("/");
  }

  const handlergoogleSignin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handlerSignUp = (data) => {
    setSignupError("");
    currentUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Create Successfully");
        const userInfo = {
          displayName: data.name,
          role: data.role,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email, data.role);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setSignupError(error.message);
      });
  };
  const saveUser = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://bike-resell-server.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedEmail(email);
      });
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 border p-7">
        <h2 className="text-xl text-center ">Sign Up</h2>
        <form onSubmit={handleSubmit(handlerSignUp)}>
          <div className="form-control w-full mb-2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "Email Address is required" })}
              type="email"
              className="input input-bordered w-full"
            />
            {errors.email && <p role="alert">{errors.email?.message}</p>}
          </div>
          <div className="space-y-1 text-sm mb-3">
            <label htmlFor="password" className="block text-blue-900 text-lg">
              Enter your Option
            </label>
            <select
              {...register("role")}
              className="space-y-1 text-sm mb-3 lg:w-4/5 rounded-3xl py-2 px-2 outline-none "
            >
              <option value="seller">Buyer</option>
              <option value="Buyer">seller</option>
            </select>
            {errors.role && <p>{errors.role.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or long",
                },
              })}
              type="password"
              className="input input-bordered w-full"
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}
          </div>
          <input className="btn w-full mt-4" value="Sign Up" type="submit" />
          {signUperror && <p className="text-red-600">{signUperror}</p>}
        </form>
        <label className="label">
          <span className="label-text">
            LEX RIDER?{" "}
            <Link to="/login" className="text-primary">
              Log in
            </Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <button
          onClick={handlergoogleSignin}
          className="btn w-full bg-base-100 "
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
