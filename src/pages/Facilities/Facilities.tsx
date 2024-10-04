import { useState } from "react";
import FacilityCard from "@/components/FacilityCard";
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import ScrollToTop from "react-scroll-to-top";
import { LuArrowBigUpDash } from "react-icons/lu";

const Facilities = () => {
  const {
    data: facilityData,
    isLoading,
    isError,
  } = useGetFacilityQuery(undefined);

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("min"); // "min" for min price and "max" for max price
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Derived state
  const filteredFacilities = facilityData?.data?.filter((facility: any) =>
    facility.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Correcting the price property to pricePerHour
  const sortedFacilities = [...(filteredFacilities || [])].sort((a, b) => {
    const priceA =
      typeof a.pricePerHour === "number"
        ? a.pricePerHour
        : parseFloat(a.pricePerHour);
    const priceB =
      typeof b.pricePerHour === "number"
        ? b.pricePerHour
        : parseFloat(b.pricePerHour);

    if (sortOrder === "min") return priceA - priceB; // Ascending order
    if (sortOrder === "max") return priceB - priceA; // Descending order
    return 0; // Default sorting
  });

  // Pagination
  const totalPages = Math.ceil(sortedFacilities.length / itemsPerPage);
  const displayedFacilities = sortedFacilities.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <p className="text-[30px] text-center py-5 text-red-600">
        Something went wrong!
      </p>
    );
  }

  return (
    <section id="nav" className="py-[60px] md:pt-[40px] md:pb-[90px]">
      <ScrollToTop smooth component={<LuArrowBigUpDash size={40} />} />

      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
        <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
          Our Featured <span className="text-[#FF5722]">Facilities</span>
        </h2>

        {/* Search and Sort */}
        <div className="flex justify-between mb-5">
          <input
            type="text"
            placeholder="Search Facilities"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-1/3"
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered w-1/4"
          >
            <option value="min">Min Price</option>
            <option value="max">Max Price</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedFacilities?.map((item) => (
            <FacilityCard item={item} key={item._id} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-5 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`btn text-white py-2 px-4 rounded ${
                currentPage === index + 1
                  ? "bg-[#FF5722]"
                  : "bg-gray-400 hover:bg-gray-500"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
