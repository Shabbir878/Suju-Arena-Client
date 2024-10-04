/* eslint-disable @typescript-eslint/no-explicit-any */
import { usePostSingleFacilityMutation } from "@/redux/api/facilitesApi/facilitesApi";
import { getErrorMessage } from "@/utils/hookErrorHandle";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddFacility = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [facility, { isError }] = usePostSingleFacilityMutation();

  const onSubmit = async (data: any) => {
    const pureData = {
      name: data?.name,
      description: data?.description,
      pricePerHour: Number(data?.price),
      location: data?.location,
      image: data?.image,
    };

    const res = await facility(pureData);
    if (res.data) {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: `${res?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  if (isError) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Something is wrong",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  return (
    <div className="py-5 flex justify-center items-center flex-col bg-gray-50 min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full"
      >
        <h1 className="text-[30px] leading-[40px] text-center mb-5 font-semibold">
          Add a New <span className="text-[#FF9A3C] ">Facility</span>
        </h1>

        {/* Name Field */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-bold">Name</span>
          </label>
          <input
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
              maxLength: 20,
            })}
            type="text"
            placeholder="Facility Name"
            className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {getErrorMessage(errors, "name") && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "name")}
              </span>
            </label>
          )}
        </div>

        {/* Description Field */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <input
            {...register("description", {
              required: {
                value: true,
                message: "Description is Required",
              },
              minLength: {
                value: 15,
                message: "Must be at least 15 characters",
              },
            })}
            type="text"
            placeholder="Facility Description"
            className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {getErrorMessage(errors, "description") && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "description")}
              </span>
            </label>
          )}
        </div>

        {/* Price Field */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-bold">Price per Hour</span>
          </label>
          <input
            {...register("price", {
              required: {
                value: true,
                message: "Price is Required",
              },
            })}
            type="number"
            placeholder="Price"
            className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {getErrorMessage(errors, "price") && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "price")}
              </span>
            </label>
          )}
        </div>

        {/* Location Field */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-bold">Location</span>
          </label>
          <input
            {...register("location", {
              required: {
                value: false,
                message: "Location is Required",
              },
            })}
            type="text"
            placeholder="Facility Location"
            className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {getErrorMessage(errors, "location") && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "location")}
              </span>
            </label>
          )}
        </div>

        {/* Photo URL Field */}
        <div className="form-control w-full mb-4">
          <label className="label">
            <span className="label-text font-bold">Photo URL</span>
          </label>
          <input
            {...register("image", {
              required: {
                value: false,
                message: "Image is Required",
              },
            })}
            type="url"
            placeholder="Image URL"
            className="input input-bordered w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          {getErrorMessage(errors, "image") && (
            <label className="label">
              <span className="label-text-alt text-red-500">
                {getErrorMessage(errors, "image")}
              </span>
            </label>
          )}
        </div>

        {/* Submit Button */}
        <div className="form-control w-full">
          <input
            className="btn bg-orange-500 hover:bg-orange-600 text-white w-full rounded-lg mt-4 transition duration-200"
            type="submit"
            value="ADD"
          />
        </div>
      </form>
    </div>
  );
};

export default AddFacility;
