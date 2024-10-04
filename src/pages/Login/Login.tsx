/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLoginMutation } from "../../redux/api/authApi/authApi";
import { useAppDispatch } from "../../redux/hook";
import { setToken, setUser } from "../../redux/features/userSlice";
import { jwtDecode } from "jwt-decode";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { useState } from "react";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const res = await login(data).unwrap();
      if (res.data) {
        const accessToken = res.data.accessToken;
        const user = jwtDecode(accessToken);
        dispatch(setUser(user));
        dispatch(setToken(accessToken));
        const Success = res.message;

        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${Success}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: `${error?.data?.message || "Internal Server Error"}`,
        text: `Login Failed`,
      });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-100">
      <p className="pt-5 pl-5 font-Poppins">
        <small>
          If you want?{" "}
          <Link className="text-orange-500 hover:underline" to="/">
            Back Home
          </Link>{" "}
        </small>
      </p>
      <div className="flex justify-center items-center w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="w-full">
          <h2 className="text-center text-3xl font-bold text-gray-700">
            Log <span className="text-orange-500">In</span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text text-gray-600">
                  Email <sup className="text-red-500">*</sup>
                </span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />
              {getErrorMessage(errors, "email") && (
                <span className="label-text-alt text-red-500">
                  {getErrorMessage(errors, "email")}
                </span>
              )}
            </div>
            <div className="form-control w-full mb-4 relative">
              <label className="label">
                <span className="label-text text-gray-600">
                  Password <sup className="text-red-500">*</sup>
                </span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type={passwordVisible ? "text" : "password"}
                placeholder="Your Password"
                className="input input-bordered w-full"
              />
              <span
                className="absolute right-4 top-10 cursor-pointer text-gray-400"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <RxEyeOpen className="w-5 h-5" />
                ) : (
                  <RxEyeClosed className="w-5 h-5" />
                )}
              </span>
              {getErrorMessage(errors, "password") && (
                <span className="label-text-alt text-red-500">
                  {getErrorMessage(errors, "password")}
                </span>
              )}
            </div>

            <button
              className={`btn w-full bg-orange-500 text-white ${
                isLoading ? "loading" : ""
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Log In"}
            </button>
          </form>
          <p className="mt-4 text-center">
            <small>
              Create a New Account?{" "}
              <Link className="text-orange-500 hover:underline" to="/signup">
                Please Signup
              </Link>{" "}
            </small>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
