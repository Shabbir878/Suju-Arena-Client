/* eslint-disable @typescript-eslint/no-explicit-any */
// import { useMAkeAdminMutation } from "@/redux/api/authApi/authApi";
// import { getErrorMessage } from "@/utils/hookErrorHandle";

// import { useForm } from "react-hook-form";

// import Swal from "sweetalert2";

// const MakeAdmin = () => {
//   const [makeAdmin, { isLoading }] = useMAkeAdminMutation();

//   const {
//     register,
//     formState: { errors },
//     handleSubmit,
//     reset,
//   } = useForm();
//   // const typedErrors = errors as FieldErrors<FieldValues>;
//   const onSubmit = async (data: any) => {
//     const allData = {
//       name: data?.name,
//       password: data?.password,
//       email: data?.email,
//       role: "admin",
//       address: data?.address,
//       phone: data?.phone,
//     };

//     const res = await makeAdmin(allData);

//     if (res.data) {
//       Swal.fire({
//         icon: "success",
//         title: "success",
//         text: "Admin Create successfully",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       reset();
//     }

//     if (res.error) {
//       Swal.fire({
//         icon: "error",
//         title: "Opps",
//         text: "Something Worng Admin Not create",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     }
//   };

//   return (
//     <section className="py-[20px] ">
//       <div className="flex min-h-min	 justify-center items-center font-Poppis">
//         <div className="card w-96 bg-base-100 shadow-xl">
//           <div className="card-body">
//             <h2 className="text-center text-2xl font-bold">
//               Make <span className="text-[#3d85ff]"> Admin</span>
//             </h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text text-bold">
//                     Name<sup>*</sup>
//                   </span>
//                 </label>
//                 <input
//                   {...register("name", {
//                     required: {
//                       value: true,
//                       message: " Name is Required",
//                     },
//                   })}
//                   type="name"
//                   placeholder="Your Name"
//                   className="input input-bordered w-full max-w-xs"
//                 />
//                 <label className="label">
//                   {getErrorMessage(errors, "name") && (
//                     <span className="label-text-alt text-red-500">
//                       {getErrorMessage(errors, "name")}
//                     </span>
//                   )}
//                 </label>
//               </div>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text text-bold">
//                     Email <sup>*</sup>
//                   </span>
//                 </label>
//                 <input
//                   {...register("email", {
//                     required: {
//                       value: true,
//                       message: " Email is Required",
//                     },
//                     pattern: {
//                       value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
//                       message: "Provide a valid Email ",
//                     },
//                   })}
//                   type="email"
//                   placeholder="Your Email"
//                   className="input input-bordered w-full max-w-xs"
//                 />
//                 <label className="label">
//                   {getErrorMessage(errors, "email") && (
//                     <span className="label-text-alt text-red-500">
//                       {getErrorMessage(errors, "email")}
//                     </span>
//                   )}
//                 </label>
//               </div>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text text-bold">
//                     Password <sup>*</sup>
//                   </span>
//                 </label>
//                 <input
//                   {...register("password", {
//                     required: {
//                       value: true,
//                       message: " Password   is Required",
//                     },
//                     minLength: {
//                       value: 6,
//                       message: "Must be 6 characters or longer",
//                     },
//                   })}
//                   type="password"
//                   placeholder="You password"
//                   className="input input-bordered w-full max-w-xs"
//                 />
//                 <label className="label">
//                   {getErrorMessage(errors, "password") && (
//                     <span className="label-text-alt text-red-500">
//                       {getErrorMessage(errors, "password")}
//                     </span>
//                   )}
//                 </label>
//               </div>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text text-bold">
//                     Phone <sup>*</sup>
//                   </span>
//                 </label>
//                 <input
//                   {...register("phone", {
//                     required: {
//                       value: true,
//                       message: "phone Number is Required",
//                     },

//                     minLength: {
//                       value: 11,
//                       message: "Must be 11 characters or longer",
//                     },
//                   })}
//                   type="phone"
//                   placeholder="You phone Number"
//                   className="input input-bordered w-full max-w-xs"
//                 />
//                 <label className="label">
//                   {getErrorMessage(errors, "phone") && (
//                     <span className="label-text-alt text-red-500">
//                       {getErrorMessage(errors, "phone")}
//                     </span>
//                   )}
//                 </label>
//               </div>
//               <div className="form-control w-full max-w-xs">
//                 <label className="label">
//                   <span className="label-text text-bold">
//                     {" "}
//                     Address <sup>*</sup>
//                   </span>
//                 </label>
//                 <input
//                   {...register("address", {
//                     required: {
//                       value: true,
//                       message: " Address is Required",
//                     },
//                   })}
//                   type="address"
//                   placeholder="You address"
//                   className="input input-bordered w-full max-w-xs"
//                 />
//                 <label className="label">
//                   {getErrorMessage(errors, "address") && (
//                     <span className="label-text-alt text-red-500">
//                       {getErrorMessage(errors, "address")}
//                     </span>
//                   )}
//                 </label>
//               </div>

//               {isLoading ? (
//                 <button className=" btn w-full max-w-xs bg-[#3d85ff] text-[#ffff]">
//                   {" "}
//                   Loading{" "}
//                   <span className="loading loading-dots loading-xs"></span>{" "}
//                 </button>
//               ) : (
//                 <input
//                   className=" btn w-full max-w-xs bg-[#3d85ff] text-[#ffff]"
//                   type="submit"
//                   value="Make Admin"
//                 />
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MakeAdmin;

import { useMAkeAdminMutation } from "@/redux/api/authApi/authApi";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const MakeAdmin = () => {
  const [makeAdmin, { isLoading }] = useMAkeAdminMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    const allData = {
      name: data?.name,
      password: data?.password,
      email: data?.email,
      role: "admin",
      address: data?.address,
      phone: data?.phone,
    };

    const res = await makeAdmin(allData);

    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Admin created successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
    }

    if (res.error) {
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: "Something went wrong, admin not created",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="flex justify-center items-center min-h-screen font-Poppins">
        <div className="card w-96 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="card-body p-6">
            <h2 className="text-center text-2xl font-bold mb-4">
              Make <span className="text-orange-500">Admin</span>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Name<sup className="text-red-500">*</sup>
                  </span>
                </label>
                <input
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {getErrorMessage(errors, "name") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "name")}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Email <sup className="text-red-500">*</sup>
                  </span>
                </label>
                <input
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {getErrorMessage(errors, "email") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "email")}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Password <sup className="text-red-500">*</sup>
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {getErrorMessage(errors, "password") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "password")}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Phone <sup className="text-red-500">*</sup>
                  </span>
                </label>
                <input
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                    minLength: {
                      value: 11,
                      message: "Must be 11 characters or longer",
                    },
                  })}
                  type="tel"
                  placeholder="Your Phone Number"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {getErrorMessage(errors, "phone") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "phone")}
                    </span>
                  )}
                </label>
              </div>

              <div className="form-control w-full mb-4">
                <label className="label">
                  <span className="label-text text-gray-700">
                    Address <sup className="text-red-500">*</sup>
                  </span>
                </label>
                <input
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Address is required",
                    },
                  })}
                  type="text"
                  placeholder="Your Address"
                  className="input input-bordered w-full"
                />
                <label className="label">
                  {getErrorMessage(errors, "address") && (
                    <span className="label-text-alt text-red-500">
                      {getErrorMessage(errors, "address")}
                    </span>
                  )}
                </label>
              </div>

              <button
                type="submit"
                className={`btn w-full bg-orange-500 text-white ${
                  isLoading ? "loading" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Creating Admin..." : "Make Admin"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
