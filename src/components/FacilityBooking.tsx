/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetSingleFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import {
  useAvailableSlotsQuery,
  usePostBookingMutation,
} from "@/redux/api/bookingApi/bookingApi";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "@/utils/hookErrorHandle";

const FacilityBooking = () => {
  const [startDate, setSelectedDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );

  const { id } = useParams();

  const { data: facility, isLoading, isError } = useGetSingleFacilityQuery(id);
  const [booking] = usePostBookingMutation();
  const { _id, name } = facility?.data || {};
  const queryData = {
    _id,
    startDate,
  };
  const { data: availableSlots, isLoading: availLoading } =
    useAvailableSlotsQuery(queryData, {
      skip: !id || !startDate,
    });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if (isLoading || availLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <p className="text-[20px] py-10 text-center">Something went wrong</p>
    );
  }

  const handleDateChange = (date: any) => {
    setSelectedDate(format(date, "yyyy-MM-dd"));
  };

  const onSubmit = async (data: any) => {
    const MutionData = { ...data, facility: _id };

    try {
      const res = await booking(MutionData).unwrap();

      if (res.data?.result) {
        window.location.href = res?.data?.payment_url;
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: "Something went wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error: any) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops",
        text: `${error?.data?.message}`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-5 md:px-0">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-8">
          Facility Name: {name}
        </h1>

        <div className="flex justify-center mt-5 gap-x-4">
          <DatePicker
            className="border border-orange-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
            selected={startDate ? new Date(startDate) : null}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd"
          />
          <button
            onClick={() => console.log(availableSlots)}
            className="bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-orange-500 focus:outline-none"
          >
            Check
          </button>
        </div>

        <div className="mt-10">
          {availableSlots?.data?.length > 0 ? (
            <div className="flex justify-center flex-col items-center">
              {availableSlots?.data?.map((slot: any) => (
                <div
                  key={slot?._id}
                  className="bg-white shadow-md rounded-lg p-4 mb-4 w-full max-w-md text-center"
                >
                  <p className="text-lg text-gray-800">
                    Start Time: {slot?.startTime} <span>---</span> End Time:{" "}
                    {slot?.endTime}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-lg text-gray-600">
              No slots available for the selected date and facility.
            </p>
          )}
        </div>

        <div className="max-w-md mx-auto mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-600 mb-4">
            Book Your Slot
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="label">
                <span className="label-text font-bold">
                  Date <sup>*</sup>
                </span>
              </label>
              <input
                {...register("date", {
                  required: {
                    value: true,
                    message: "Date is required",
                  },
                })}
                value={startDate ? startDate : ""}
                type="text"
                readOnly
                className="input input-bordered w-full"
              />
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text font-bold">
                  Start Time <sup>*</sup>
                </span>
              </label>
              <input
                {...register("startTime", {
                  required: {
                    value: true,
                    message: "Start time is required",
                  },
                })}
                type="time"
                className="input input-bordered w-full"
              />
              {getErrorMessage(errors, "startTime") && (
                <span className="text-red-500 text-sm">
                  {getErrorMessage(errors, "startTime")}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label className="label">
                <span className="label-text font-bold">
                  End Time <sup>*</sup>
                </span>
              </label>
              <input
                {...register("endTime", {
                  required: {
                    value: true,
                    message: "End time is required",
                  },
                })}
                type="time"
                className="input input-bordered w-full"
              />
              {getErrorMessage(errors, "endTime") && (
                <span className="text-red-500 text-sm">
                  {getErrorMessage(errors, "endTime")}
                </span>
              )}
            </div>

            {isLoading ? (
              <button className="btn w-full bg-orange-600 text-white">
                Loading{" "}
                <span className="loading loading-dots loading-xs"></span>
              </button>
            ) : (
              <input
                className="btn w-full bg-orange-600 text-white transition duration-300 hover:bg-orange-500 cursor-pointer"
                type="submit"
                value="Pay"
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default FacilityBooking;
