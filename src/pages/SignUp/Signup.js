import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { currentUser, updateUser } = useContext(AuthContext);
  const [signUperror, setSignupError] = useState("");

  const navigate = useNavigate();

  const handlerSignUp = (data) => {
    setSignupError("");

    currentUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        toast("User Create Successfully");
        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);

        updateUser(userInfo)
          .then(() => {
            navigate("/");
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setSignupError(error.message);
      });
  };

  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 border p-7">
        <h2 className="text-xl text-center ">Sign Up</h2>
        <form onSubmit={handleSubmit(handlerSignUp)}>
          <div className="form-control w-full">
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
          <di className="form-control w-full">
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
          </di>
          <input className="btn w-full mt-4" value="Sign Up" type="submit" />
          {signUperror && <p className="text-red-600">{signUperror}</p>}
        </form>
        <label className="label">
          <span className="label-text">
            New to Doctors Portal?{" "}
            <Link to="/login" className="text-primary">
              Log in
            </Link>
          </span>
        </label>
        <div className="divider">OR</div>
        <button className="btn w-full bg-base-100 ">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
