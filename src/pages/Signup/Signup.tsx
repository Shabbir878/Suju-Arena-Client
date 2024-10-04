/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useSignUPMutation } from "../../redux/api/authApi/authApi";
import Swal from "sweetalert2";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import { useState } from "react";

const Signup = () => {
  const [signUp, { isLoading }] = useSignUPMutation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const allData = {
        name: data?.name,
        password: data?.password,
        email: data?.email,
        role: "user",
        address: data?.address,
        phone: data?.phone,
      };

      const res = await signUp(allData).unwrap();
      console.log(res);

      if (res) {
        const Success = res.message;

        Swal.fire({
          icon: "success",
          title: "Success",
          text: `${Success}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: `${
          error?.data?.errorSources[0].message || "Internal Server Error"
        }`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-6">
      <p className="pt-5 pl-5 font-Poppins">
        <small>
          If you want?{" "}
          <Link className="text-orange-600" to="/">
            Back Home
          </Link>{" "}
        </small>
      </p>
      <div className="flex min-h-screen justify-center items-center font-Poppins">
        <div className="card w-full max-w-md bg-white shadow-lg rounded-lg">
          <div className="card-body">
            <h2 className="text-center text-3xl font-bold mb-6">
              Sign <span className="text-orange-600">Up</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Name<sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: " Name is Required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
                />
                {getErrorMessage(errors, "name") && (
                  <span className="text-red-500">
                    {getErrorMessage(errors, "name")}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Email <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: " Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email ",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
                />
                {getErrorMessage(errors, "email") && (
                  <span className="text-red-500">
                    {getErrorMessage(errors, "email")}
                  </span>
                )}
              </div>
              <div className="form-control mb-4 relative">
                <label className="label">
                  <span className="label-text font-bold">
                    Password <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: " Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Your Password"
                  className="input input-bordered w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
                />
                <span
                  className="absolute right-2 top-10 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <RxEyeOpen className="w-5 h-5 text-gray-600" />
                  ) : (
                    <RxEyeClosed className="w-5 h-5 text-gray-600" />
                  )}
                </span>
                {getErrorMessage(errors, "password") && (
                  <span className="text-red-500">
                    {getErrorMessage(errors, "password")}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Phone <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone Number is Required",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 characters or longer",
                    },
                  })}
                  type="tel"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
                />
                {getErrorMessage(errors, "phone") && (
                  <span className="text-red-500">
                    {getErrorMessage(errors, "phone")}
                  </span>
                )}
              </div>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-bold">
                    Address <sup>*</sup>
                  </span>
                </label>
                <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: " Address is Required",
                    },
                  })}
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full rounded-md border-gray-300 focus:outline-none focus:ring focus:ring-orange-500"
                />
                {getErrorMessage(errors, "address") && (
                  <span className="text-red-500">
                    {getErrorMessage(errors, "address")}
                  </span>
                )}
              </div>

              {isLoading ? (
                <button className="btn w-full bg-orange-600 text-white rounded-md flex items-center justify-center">
                  Loading{" "}
                  <span className="loading loading-dots loading-xs ml-2"></span>
                </button>
              ) : (
                <input
                  className="btn w-full bg-orange-600 text-white rounded-md cursor-pointer"
                  type="submit"
                  value="SIGN UP"
                />
              )}
            </form>
            <p className="mt-4">
              <small>
                Already have an account?{" "}
                <Link className="text-orange-600" to="/login">
                  Please Login
                </Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
