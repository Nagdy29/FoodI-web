import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { Model } from "./Model";
import { AuthoContext } from "../context/AuthoProvider";
export const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { createUser, login, sigUpWithGmail } = useContext(AuthoContext);
  const location = useLocation();
  const navigat = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    return createUser(email, password)
      .then((result) => {
        const user = result.user;
        alert("create success");
        document.getElementById("my_modal_5").close();
        navigat(from, { replace: true });
      })
      .catch((error) => {
        const errormessage = error.message;
      });
  };
  const handilLogin = async () => {
    try {
      sigUpWithGmail()
        .then((result) => {
          const user = result.user;
          alert("Login Success");
          document.getElementById("my_modal_5").close();
          navigat(from, { replace: true });
        })
        .catch((error) => console.log(error));
    } catch (error) {
      // Handle the error if logout fails
    }
  };

  return (
    <>
      <div className="max-w-md w-full bg-white  flex items-center justify-center shadow my-20 mx-auto">
        <div className="modal-action">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="font-bold text-lg">Create Account</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password")}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover mt-1">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-outline btn-success">
                Login
              </button>
            </div>
            <div>
              <h3 className="mt-2">
                hava an account ?{" "}
                <button
                  className="text-rose-600 font-bold"
                  onClick={() =>
                    document.getElementById("my_modal_5").showModal()
                  }
                >
                  Login{" "}
                </button>
              </h3>
            </div>
            <div className="text-white flex gap-3 justify-center mt-3">
              <button
                className="btn btn-outline btn-primary"
                onClick={handilLogin}
              >
                <SiGmail size={20} />
              </button>
              <button className="btn btn-outline btn-primary">
                <FaFacebookF size={20} />{" "}
              </button>
              <button className="btn btn-outline btn-primary">
                <FaGithub size={20} />
              </button>
            </div>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>
          <Model />
        </div>
      </div>
    </>
  );
};
