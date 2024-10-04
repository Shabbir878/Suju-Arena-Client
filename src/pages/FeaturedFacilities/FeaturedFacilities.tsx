import FacilityCard from "@/components/FacilityCard";
import Loading from "@/components/Loading";
import { useGetFacilityQuery } from "@/redux/api/facilitesApi/facilitesApi";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FeaturedFacilities = ({ isLandingPage }) => {
  const {
    data: facilityData,
    isLoading,
    isError,
  } = useGetFacilityQuery(undefined);

  const navigate = useNavigate(); // Initialize useNavigate

  // Handle loading state
  if (isLoading) {
    return <Loading />;
  }

  // Handle error state
  if (isError) {
    return (
      <p className="text-[30px] text-center py-5 text-red-600">
        Something went wrong!
      </p>
    );
  }

  // Display only the first three facilities on the landing page
  const displayedFacilities = isLandingPage
    ? facilityData?.data?.slice(0, 3) // Show only 3 facilities on landing page
    : facilityData?.data; // Show all facilities if not landing page

  return (
    <section id="nav" className="py-[60px] md:pt-[40px] md:pb-[90px]">
      <div className="max-w-[1170px] mx-auto px-5 xl:px-0">
        <h2 className="text-[30px] leading-[40px] md:text-[70px] md:leading-[80px] text-center font-semibold mb-2 md:mb-8 text-[#1A1A1A]">
          Our Featured <span className="text-[#FF5722]">Facilities</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedFacilities?.map((item) => (
            <FacilityCard item={item} key={item._id} />
          ))}
        </div>

        {/* View More Button (if isLandingPage is true) */}
        {isLandingPage && (
          <div className="flex justify-center mt-5">
            <button
              onClick={() => navigate("/facilities")} // Use navigate for routing
              className="btn bg-[#FF5722] text-white py-2 px-4 rounded"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedFacilities;
