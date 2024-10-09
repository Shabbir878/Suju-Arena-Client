/* eslint-disable @typescript-eslint/no-explicit-any */
import Loading from "@/components/Loading";
import CardDataStats from "@/components/CardDataStats"; // Updated CardDataStats component
import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi";
import {
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa"; // Importing icons
import ChartOne from "@/components/Chart/ChartOne";
import ChartTwo from "@/components/Chart/ChartTwo";
import TopFacility from "../TopFacility/TopFacility";

const Overview = () => {
  const { data: bookings, isLoading } = useGetAllBookingQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  // Check if bookings are available
  const totalBookings = bookings?.data?.length || 0;
  const totalRevenue =
    bookings?.data?.reduce(
      (acc: any, booking: any) => acc + booking.payableAmount,
      0
    ) || 0;
  const totalBooked =
    bookings?.data?.filter((booking: any) => booking.isBooked).length || 0;
  const totalAvailable = totalBookings - totalBooked;

  // Example rate changes
  const previousTotalRevenue = 1000; // Placeholder for previous revenue value
  const revenueRate =
    ((totalRevenue - previousTotalRevenue) / previousTotalRevenue) * 100;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
        Booking Overview
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <CardDataStats
          title="Total Bookings"
          total={totalBookings.toString()}
          rate={`${totalBookings} bookings`}
          levelUp={totalBookings > 0}
          levelDown={totalBookings === 0}
        >
          <FaCalendarAlt className="text-orange-500 text-5xl" />{" "}
          {/* Icon for total bookings */}
        </CardDataStats>
        <CardDataStats
          title="Total Revenue"
          total={`$${totalRevenue.toFixed(2)}`} // Formatting totalRevenue
          rate={`${revenueRate.toFixed(2)}%`} // Displaying revenue change percentage
          levelUp={revenueRate > 0}
          levelDown={revenueRate < 0}
        >
          <FaMoneyBillAlt className="text-green-500 text-5xl" />{" "}
          {/* Icon for total revenue */}
        </CardDataStats>
        <CardDataStats
          title="Total Booked"
          total={totalBooked.toString()}
          rate={`${totalBooked} bookings`}
          levelUp={totalBooked > 0}
          levelDown={totalBooked === 0}
        >
          <FaCheckCircle className="text-blue-500 text-5xl" />{" "}
          {/* Icon for total booked */}
        </CardDataStats>
        <CardDataStats
          title="Total Available"
          total={totalAvailable.toString()}
          rate={`${totalAvailable} available`}
          levelUp={totalAvailable > 0}
          levelDown={totalAvailable === 0}
        >
          <FaTimesCircle className="text-red-500 text-5xl" />{" "}
          {/* Icon for total available */}
        </CardDataStats>
      </div>

      {/* Chart One */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-center text-orange-600 mb-4">
          Chart One
        </h3>
        <ChartOne />
      </div>

      {/* Chart Two */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-center text-orange-600 mb-4">
          Chart Two
        </h3>
        <ChartTwo />
      </div>

      {/* Top Facilities */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-center text-orange-600 mb-4">
          Top Facilities
        </h3>
        <TopFacility />
      </div>
    </div>
  );
};

export default Overview;
