/* eslint-disable @typescript-eslint/no-explicit-any */
// import Loading from "@/components/Loading";
// import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi";

// const AllBooking = () => {
//   const { data: Booking, isLoading } = useGetAllBookingQuery(undefined);

//   //    console.log(Booking)
//   if (isLoading) {
//     return <Loading />;
//   }

//   return (
//     <div>
//       <div>
//         <div className="overflow-x-auto">
//           <table className="table w-full">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Facility Name</th>
//                 <th>Price</th>
//                 <th>Staus</th>
//                 <th>Date</th>
//                 <th>StartTime - EndTime</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Booking?.data.map((item: any, index: any) => (
//                 <tr key={item._id}>
//                   <td>{index + 1}</td>

//                   <td>{item?.facility?.name}</td>
//                   <td className="">${item?.payableAmount}</td>
//                   <td>{item?.isBooked}</td>
//                   <td>{item?.date}</td>
//                   <td>
//                     {item?.startTime}-{item?.endTime}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllBooking;

import Loading from "@/components/Loading";
import { useGetAllBookingQuery } from "@/redux/api/bookingApi/bookingApi";

const AllBooking = () => {
  const { data: Booking, isLoading } = useGetAllBookingQuery(undefined);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16">
      <h2 className="text-2xl font-bold text-center text-orange-600 mb-4">
        All Bookings
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="table-auto w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-orange-500 text-white">
              <th className="py-3 px-4 border-b">#</th>
              <th className="py-3 px-4 border-b">Facility Name</th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Status</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Time</th>
            </tr>
          </thead>
          <tbody>
            {Booking?.data.map((item: any, index: any) => (
              <tr
                key={item._id}
                className="hover:bg-orange-100 transition-colors duration-200"
              >
                <td className="py-3 px-4 border-b">{index + 1}</td>
                <td className="py-3 px-4 border-b">{item?.facility?.name}</td>
                <td className="py-3 px-4 border-b">${item?.payableAmount}</td>
                <td className="py-3 px-4 border-b">
                  {item?.isBooked ? "Booked" : "Available"}
                </td>
                <td className="py-3 px-4 border-b">{item?.date}</td>
                <td className="py-3 px-4 border-b">
                  {item?.startTime} - {item?.endTime}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooking;
